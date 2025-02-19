import React, { useState } from 'react';
import { Activity, Heart, AlertCircle, Droplets, Gauge, HeartPulse as Pulse, Dumbbell } from 'lucide-react';
import { predictHeartDisease } from '../lib/api';
import { useAuth } from '../contexts/AuthContext';

export default function Prediction() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    exang: '',
    oldpeak: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await predictHeartDisease({
        ...formData,
        userId: user?.id,
        age: Number(formData.age),
        sex: Number(formData.sex),
        cp: Number(formData.cp),
        trestbps: Number(formData.trestbps),
        chol: Number(formData.chol),
        fbs: Number(formData.fbs),
        exang: Number(formData.exang),
        oldpeak: Number(formData.oldpeak)
      });
      setPrediction(result.prediction);
    } catch (err) {
      setError('Failed to get prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Heart Disease Prediction</h1>
        <p className="text-xl text-gray-600">
          Enter your health metrics below for an AI-powered heart disease risk assessment
        </p>
      </section>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="sex" className="block text-sm font-medium text-gray-700">Sex</label>
            <select
              id="sex"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="chestPain" className="block text-sm font-medium text-gray-700">Chest Pain Type</label>
            <select
              id="chestPain"
              name="chestPain"
              value={formData.chestPain}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            >
              <option value="">Select</option>
              <option value="1">Typical Angina</option>
              <option value="2">Atypical Angina</option>
              <option value="3">Non-Anginal Pain</option>
              <option value="4">Asymptomatic</option>
            </select>
          </div>

          <div>
            <label htmlFor="bloodPressure" className="block text-sm font-medium text-gray-700">
              Resting Blood Pressure (mm Hg)
            </label>
            <div className="relative mt-1">
              <Gauge className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="number"
                id="bloodPressure"
                name="bloodPressure"
                value={formData.bloodPressure}
                onChange={handleChange}
                className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="bloodSugar" className="block text-sm font-medium text-gray-700">
              Fasting Blood Sugar
            </label>
            <div className="relative mt-1">
              <Droplets className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <select
                id="bloodSugar"
                name="bloodSugar"
                value={formData.bloodSugar}
                onChange={handleChange}
                className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              >
                <option value="">Select</option>
                <option value="1"> 120 mg/dl</option>
                <option value="0">≤ 120 mg/dl</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="angina" className="block text-sm font-medium text-gray-700">
              Exercise Induced Angina
            </label>
            <div className="relative mt-1">
              <Dumbbell className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <select
                id="angina"
                name="angina"
                value={formData.angina}
                onChange={handleChange}
                className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              >
                <option value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="maxHeartRate" className="block text-sm font-medium text-gray-700">
              Maximum Heart Rate
            </label>
            <div className="relative mt-1">
              <Pulse className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="number"
                id="maxHeartRate"
                name="maxHeartRate"
                value={formData.maxHeartRate}
                onChange={handleChange}
                className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 flex items-center space-x-2"
          >
            <Activity className="h-5 w-5" />
            <span>Get Prediction</span>
          </button>
        </div>
      </form>

      {loading && (
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-2">Processing prediction...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-lg">
          {error}
        </div>
      )}

      {prediction !== null && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <Heart className="h-6 w-6 text-red-500" />
            <span>Prediction Result</span>
          </h2>
          <p className="text-lg">
            Risk of Heart Disease: 
            <span className={`font-bold ${prediction > 0.5 ? 'text-red-500' : 'text-green-500'}`}>
              {prediction > 0.5 ? ' High' : ' Low'} ({(prediction * 100).toFixed(2)}%)
            </span>
          </p>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <AlertCircle className="h-6 w-6 text-red-500" />
          <span>Important Note</span>
        </h2>
        <p className="text-gray-600">
          This prediction tool is for informational purposes only and should not be considered as a substitute for professional medical advice. Please consult with a healthcare provider for proper diagnosis and treatment.
        </p>
      </div>
    </div>
  );
}