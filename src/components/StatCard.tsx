import React from 'react';

interface StatCardProps {
  number: string;
  title: string;
}

function StatCard({ number, title }: StatCardProps) {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold mb-2">{number}</h3>
      <p className="text-xl">{title}</p>
    </div>
  );
}

export default StatCard;