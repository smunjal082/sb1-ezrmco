import React from 'react';
import { Phone, Mail, MapPin, Star } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import StatCard from '../components/StatCard';

function HomePage() {
  const services = [
    {
      title: "Emergency Water Extraction",
      description: "Rapid removal of water from affected areas.",
      link: "/services/emergency-water-extraction"
    },
    {
      title: "Structural Drying",
      description: "Comprehensive drying of structures and materials.",
      link: "/services/structural-drying"
    },
    {
      title: "Mold Remediation",
      description: "Safe and effective removal of mold caused by water damage.",
      link: "/services/mold-remediation"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <span className="text-blue-600 font-semibold mb-4 block">Expert Plumbing Services</span>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional Plumbing Solutions
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                24/7 emergency plumbing services with licensed professionals. Fast response times and quality workmanship guaranteed.
              </p>
              <a href="tel:1-800-PLUMBER" 
                 className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 1-800-PLUMBER
              </a>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Professional Plumber"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard number="15000+" title="Services Provided" />
            <StatCard number="20000+" title="Happy Customers" />
            <StatCard number="30000+" title="5-Star Reviews" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              text="Exceptional service! They responded quickly and solved our plumbing emergency professionally."
              author="John Smith"
              rating={5}
            />
            <TestimonialCard 
              text="Very professional and knowledgeable team. Would highly recommend their services!"
              author="Sarah Johnson"
              rating={5}
            />
            <TestimonialCard 
              text="Fast, reliable, and excellent customer service. They went above and beyond!"
              author="Mike Wilson"
              rating={5}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;