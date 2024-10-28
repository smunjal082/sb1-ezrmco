import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  rating: number;
}

function TestimonialCard({ text, author, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{text}</p>
      <p className="font-semibold">{author}</p>
    </div>
  );
}

export default TestimonialCard;