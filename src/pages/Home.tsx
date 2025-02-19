import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Users, Stethoscope } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          AI-Powered Heart Disease Prediction
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Early detection and prevention of heart disease using advanced machine learning technology
        </p>
        <Link
          to="/prediction"
          className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
        >
          Get Your Prediction
        </Link>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Activity className="h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Accurate Predictions</h3>
          <p className="text-gray-600">
            Our AI model provides highly accurate predictions based on your health data
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Heart className="h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Preventive Care</h3>
          <p className="text-gray-600">
            Get personalized recommendations for maintaining heart health
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Stethoscope className="h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
          <p className="text-gray-600">
            Connect with certified cardiologists for professional advice
          </p>
        </div>
      </div>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 inline-block mb-4">
              <Users className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="font-semibold mb-2">Create Account</h3>
            <p className="text-gray-600">Sign up and complete your health profile</p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 inline-block mb-4">
              <Activity className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="font-semibold mb-2">Get Prediction</h3>
            <p className="text-gray-600">Enter your health metrics for AI analysis</p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 inline-block mb-4">
              <Stethoscope className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="font-semibold mb-2">Expert Review</h3>
            <p className="text-gray-600">Consult with specialists for detailed guidance</p>
          </div>
        </div>
      </section>
    </div>
  );
}