import * as tf from '@tensorflow/tfjs';

// Create a sequential model
export async function createModel() {
  const model = tf.sequential();
  
  // Add layers based on our XGBoost architecture
  model.add(tf.layers.dense({
    units: 16,
    activation: 'relu',
    inputShape: [8]  // 8 features
  }));
  
  model.add(tf.layers.dense({
    units: 8,
    activation: 'relu'
  }));
  
  model.add(tf.layers.dense({
    units: 1,
    activation: 'sigmoid'
  }));

  // Compile the model
  model.compile({
    optimizer: tf.train.adam(0.001),
    loss: 'binaryCrossentropy',
    metrics: ['accuracy']
  });

  return model;
}