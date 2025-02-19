import { supabase } from './supabase';

export interface PredictionData {
  age: number;
  sex: number;
  cp: number;
  trestbps: number;
  chol: number;
  fbs: number;
  exang: number;
  oldpeak: number;
  userId: string;
}

export const predictHeartDisease = async (data: PredictionData) => {
  try {
    const { data: prediction, error } = await supabase
      .from('predictions')
      .insert([data])
      .select()
      .single();

    if (error) throw error;
    return prediction;
  } catch (error) {
    throw new Error('Prediction failed');
  }
};

export const getPredictionHistory = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('predictions')
      .select('*')
      .eq('userId', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    throw new Error('Failed to fetch prediction history');
  }
};