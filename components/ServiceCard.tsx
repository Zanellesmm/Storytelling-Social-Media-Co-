
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group p-8 bg-white border border-pink-50 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50 hover:-translate-y-2">
      <div className="text-4xl mb-6 bg-pink-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-pink-100 transition-colors">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">
        {service.description}
      </p>
      <a href="#booking" className="text-pink-500 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
        Learn More <span className="ml-1">→</span>
      </a>
    </div>
  );
};

export default ServiceCard;
