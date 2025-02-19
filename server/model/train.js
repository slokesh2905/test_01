import * as tf from '@tensorflow/tfjs';
import { createModel } from './model.js';

// Training data from your dataset
const trainingData = [
  // Sample format: [age, sex, cp, trestbps, chol, fbs, exang, oldpeak]
];

const trainingLabels = [
  // 0 or 1 for each training example
];

// Normalize the data
function normalizeData(data) {
  const tensorData = tf.tensor2d(data);
  const dataMean = tensorData.mean(0);
  const dataStd = tensorData.std(0);
  
  const normalizedData = tensorData.sub(dataMean).div(dataStd);
  return {
    normalizedData,
    dataMean,
    dataStd
  };
}

async function trainModel() {
  const model = await createModel();
  
  // Normalize training data
  const { normalizedData, dataMean, dataStd } = normalizeData(trainingData);
  const labelsTensor = tf.tensor2d(trainingLabels, [trainingLabels.length, 1]);

  // Train the model
  await model.fit(normalizedData, labelsTensor, {
    epochs: 100,
    batchSize: 32,
    validationSplit: 0.2,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(`Epoch ${epoch}: loss = ${logs.loss}, accuracy = ${logs.acc}`);
      }
    }
  });

  // Save the model
  await model.save('file://./model');
  
  // Save normalization parameters
  const normParams = {
    mean: dataMean.arraySync(),
    std: dataStd.arraySync()
  };
  
  return { model, normParams };
}