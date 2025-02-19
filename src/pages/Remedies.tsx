import React from 'react';
import { Heart, Utensils, Scaling as Walking, Moon, Coffee, Cigarette } from 'lucide-react';

export default function Remedies() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Heart Health Remedies</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover lifestyle changes and natural remedies that can help improve your heart health
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Utensils className="h-8 w-8 text-red-500" />
            <h2 className="text-xl font-semibold">Healthy Diet</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Increase intake of fruits and vegetables</li>
            <li>• Choose whole grains over refined grains</li>
            <li>• Limit saturated and trans fats</li>
            <li>• Reduce sodium intake</li>
            <li>• Include omega-3 rich foods</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Walking className="h-8 w-8 text-red-500" />
            <h2 className="text-xl font-semibold">Physical Activity</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Aim for 150 minutes of moderate exercise weekly</li>
            <li>• Include both cardio and strength training</li>
            <li>• Take regular walking breaks</li>
            <li>• Try swimming or cycling</li>
            <li>• Practice yoga for stress reduction</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Moon className="h-8 w-8 text-red-500" />
            <h2 className="text-xl font-semibold">Lifestyle Changes</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Get adequate sleep (7-9 hours)</li>
            <li>• Manage stress through meditation</li>
            <li>• Maintain a healthy weight</li>
            <li>• Monitor blood pressure regularly</li>
            <li>• Stay hydrated</li>
          </ul>
        </div>
      </div>

      <section className="bg-white p-8 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-bold">Habits to Avoid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <Cigarette className="h-6 w-6 text-red-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Quit Smoking</h3>
              <p className="text-gray-600">Smoking increases risk of heart disease and stroke</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Coffee className="h-6 w-6 text-red-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Limit Caffeine</h3>
              <p className="text-gray-600">Excessive caffeine can increase blood pressure</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Heart className="h-6 w-6 text-red-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Avoid Stress</h3>
              <p className="text-gray-600">Chronic stress contributes to heart problems</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}