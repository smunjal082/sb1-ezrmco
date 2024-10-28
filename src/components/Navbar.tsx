import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Wrench } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Wrench className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Expert Plumbing</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="tel:1-800-PLUMBER" className="flex items-center text-gray-600 hover:text-blue-600">
              <Phone className="h-5 w-5 mr-2" />
              <span className="hidden sm:block">1-800-PLUMBER</span>
            </a>
            <a href="mailto:contact@expertplumbing.com" className="flex items-center text-gray-600 hover:text-blue-600">
              <Mail className="h-5 w-5 mr-2" />
              <span className="hidden sm:block">Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;