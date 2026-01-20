import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ 
  title, 
  description, 
  price, 
  badge, 
  isPopular, 
  features 
}) => {
  return (
    <div className={`relative bg-white rounded-2xl p-8 ${
      isPopular ? 'border-2 border-slate-900 shadow-xl' : 'border border-gray-200 shadow-lg'
    }`}>
      {badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-slate-900 text-white px-4 py-1 rounded-full text-sm font-medium">
            {badge}
          </span>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="mb-8">
        <span className="text-5xl font-bold text-gray-900">{price}</span>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-gray-900 flex items-center justify-center">
              <Check className="w-3 h-3 text-gray-900" />
            </div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
        isPopular 
          ? 'bg-slate-900 text-white hover:bg-slate-800' 
          : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
      }`}>
        Browse Templates
      </button>
    </div>
  );
};

export default function PricingComponent() {
  const pricingPlans = [
    {
      title: 'Monthly',
      description: 'Perfect for testing the waters',
      price: '$97.00',
      badge: null,
      isPopular: false,
      features: [
        'All template access',
        'Unlimited customization',
        'Priority support',
        'Regular updates',
        'Analytics dashboard'
      ]
    },
    {
      title: '6 Month',
      description: 'Best for growing businesses',
      price: '$497.00',
      badge: 'Most Popular',
      isPopular: true,
      features: [
        'All template access',
        'Unlimited customization',
        'Priority support',
        'Regular updates',
        'Analytics dashboard'
      ]
    },
    {
      title: '1 Year',
      description: 'Maximum value for serious growth',
      price: '$697.00',
      badge: 'Save 40%',
      isPopular: false,
      features: [
        'All template access',
        'Unlimited customization',
        'Priority support',
        'Regular updates',
        'Analytics dashboard'
      ]
    }
  ];


  return (
    <div className="min-h-screen px-4">
      <section className='py-16 border-t border-b border-gray-200'>
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
      </section>
    </div>
  );
}