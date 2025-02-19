import React from 'react';
import { Heart, Award, Users, Brain } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">About HeartCare AI</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We combine cutting-edge artificial intelligence with medical expertise to provide accurate heart disease predictions and preventive care recommendations.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center space-x-4 mb-6">
            <Brain className="h-8 w-8 text-red-500" />
            <h2 className="text-2xl font-semibold">Our Technology</h2>
          </div>
          <p className="text-gray-600">
            Our AI model is trained on extensive medical datasets and validated by healthcare professionals. We use advanced machine learning algorithms to analyze multiple health parameters and provide accurate predictions.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center space-x-4 mb-6">
            <Award className="h-8 w-8 text-red-500" />
            <h2 className="text-2xl font-semibold">Our Mission</h2>
          </div>
          <p className="text-gray-600">
            We're committed to making early heart disease detection accessible to everyone. Our goal is to prevent heart-related complications through timely intervention and awareness.
          </p>
        </div>
      </div>

      {/* <section className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center space-x-4 mb-6">
          <Users className="h-8 w-8 text-red-500" />
          <h2 className="text-2xl font-semibold">Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300"
              alt="Medical Professional"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold">Dr. Sarah Johnson</h3>
            <p className="text-gray-600">Chief Medical Officer</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300"
              alt="AI Specialist"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold">Dr. Michael Chen</h3>
            <p className="text-gray-600">AI Research Lead</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300"
              alt="Cardiologist"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold">Dr. Emily Rodriguez</h3>
            <p className="text-gray-600">Senior Cardiologist</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}