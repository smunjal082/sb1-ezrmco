import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

function ServiceCard({ title, description, link }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link 
        to={link}
        className="inline-flex items-center text-blue-600 hover:text-blue-700"
      >
        Learn More <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
}

export default ServiceCard;