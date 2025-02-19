import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

interface Doctor {
  name: string;
  specialty: string;
  location: string;
  phone: string;
  email: string;
  image: string;
  distance: string;
}

export default function Consultation() {
  const [location, setLocation] = useState<string>('');
  const [doctors, setDoctors] = useState<Doctor[]>([
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      location: "123 Medical Center, New York",
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@example.com",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
      distance: "0.5 miles"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Cardiac Surgeon",
      location: "456 Heart Clinic, New York",
      phone: "+1 (555) 234-5678",
      email: "michael.chen@example.com",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
      distance: "1.2 miles"
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Cardiologist",
      location: "789 Medical Plaza, New York",
      phone: "+1 (555) 345-6789",
      email: "emily.rodriguez@example.com",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
      distance: "1.8 miles"
    }
  ]);

  const handleLocationSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call a geocoding API and search for nearby doctors
    console.log('Searching for doctors near:', location);
  };

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Find Nearby Doctors</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect with experienced cardiologists in your area
        </p>
      </section>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleLocationSearch} className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Enter your location"
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
          >
            Search
          </button>
        </form>

        <div className="space-y-6">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.specialty}</p>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{doctor.location}</span>
                      <span className="ml-2 text-sm text-red-500">({doctor.distance})</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <a href={`tel:${doctor.phone}`} className="hover:text-red-500">{doctor.phone}</a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <a href={`mailto:${doctor.email}`} className="hover:text-red-500">{doctor.email}</a>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex items-center text-red-500 hover:text-red-600"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(`https://maps.google.com/?q=${encodeURIComponent(doctor.location)}`, '_blank');
                  }}
                >
                  <ExternalLink className="h-5 w-5 mr-1" />
                  <span>View on Map</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}