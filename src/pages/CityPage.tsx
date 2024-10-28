import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Star } from 'lucide-react';
import { CityData } from '../types';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

interface CityPageProps {
  data?: CityData;
}

function CityPage({ data }: CityPageProps) {
  const { city, state } = useParams();
  
  // If no data is provided, show loading or 404
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Water Damage Restoration in {data.city}, {data.state}
              </h1>
              <p className="text-lg text-gray-700 mb-8">{data.about}</p>
              <a href={`tel:${data.phone}`} 
                 className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Service: {data.phone}
              </a>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt={`Water Damage Restoration in ${data.city}, ${data.state}`}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services in {data.city}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                link={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="prose lg:prose-xl mx-auto">
            <div dangerouslySetInnerHTML={{ __html: data.why }} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.reviews.map((review, index) => (
              <TestimonialCard 
                key={index}
                text={review.text}
                author={review.author}
                rating={review.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Area</h2>
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe 
              src={`https://maps.google.com/maps?q=${data.city},${data.state}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-[450px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CityPage;