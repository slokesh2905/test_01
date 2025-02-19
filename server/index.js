import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import * as tf from '@tensorflow/tfjs';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/heartcare');

// Define prediction schema
const PredictionSchema = new mongoose.Schema({
  userId: String,
  age: Number,
  sex: Number,
  cp: Number,
  trestbps: Number,
  chol: Number,
  fbs: Number,
  exang: Number,
  oldpeak: Number,
  prediction: Number,
  createdAt: { type: Date, default: Date.now }
});

const Prediction = mongoose.model('Prediction', PredictionSchema);

// Load and initialize the model
let model;
let normParams;

async function loadModel() {
  try {
    model = await tf.loadLayersModel('file://./model/model.json');
    // Load normalization parameters
    normParams = {
      mean: [54.37, 0.683, 0.967, 131.624, 246.264, 0.149, 0.326, 1.039],
      std: [9.072, 0.466, 1.032, 17.538, 51.831, 0.356, 0.469, 1.161]
    };
    console.log('Model loaded successfully');
  } catch (error) {
    console.error('Error loading model:', error);
  }
}

loadModel();

// Prediction endpoint
app.post('/api/predict', async (req, res) => {
  try {
    if (!model) {
      throw new Error('Model not loaded');
    }

    const {
      age, sex, cp, trestbps, chol, fbs, exang, oldpeak
    } = req.body;

    // Create input array
    const inputData = [age, sex, cp, trestbps, chol, fbs, exang, oldpeak];

    // Normalize input data
    const normalizedInput = inputData.map((value, index) => 
      (value - normParams.mean[index]) / normParams.std[index]
    );

    // Make prediction
    const tensorInput = tf.tensor2d([normalizedInput]);
    const prediction = model.predict(tensorInput);
    const result = (await prediction.data())[0];

    // Cleanup tensors
    tensorInput.dispose();
    prediction.dispose();

    // Save prediction to database
    const newPrediction = new Prediction({
      userId: req.body.userId,
      age, sex, cp, trestbps, chol, fbs, exang, oldpeak,
      prediction: result
    });
    await newPrediction.save();

    res.json({ prediction: result });
  } catch (error) {
    console.error('Prediction error:', error);
    res.status(500).json({ error: 'Prediction failed: ' + error.message });
  }
});

// Get user predictions history
app.get('/api/predictions/:userId', async (req, res) => {
  try {
    const predictions = await Prediction.find({ userId: req.params.userId })
      .sort({ createdAt: -1 });
    res.json(predictions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch predictions' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});