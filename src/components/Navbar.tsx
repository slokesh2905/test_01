import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Heart, 
  User, 
  LogOut, 
  Home, 
  Info, 
  Activity, 
  Pill,
  MapPin,
  Dumbbell
} from 'lucide-react';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold">HeartCare AI</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-red-500 flex items-center space-x-1">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-500 flex items-center space-x-1">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link to="/prediction" className="text-gray-700 hover:text-red-500 flex items-center space-x-1">
              <Activity className="h-5 w-5" />
              <span>Health Check</span>
            </Link>
            <Link to="/remedies" className="text-gray-700 hover:text-red-500 flex items-center space-x-1">
              <Pill className="h-5 w-5" />
              <span>Remedies</span>
            </Link>
            <Link to="/exercise" className="text-gray-700 hover:text-red-500 flex items-center space-x-1">
              <Dumbbell className="h-5 w-5" />
              <span>Exercise</span>
            </Link>
            <Link to="/consultation" className="text-gray-700 hover:text-red-500 flex items-center space-x-1">
              <MapPin className="h-5 w-5" />
              <span>Find Doctors</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-red-500">
                  <User className="h-6 w-6" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-500"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}