import React from 'react';
import { Check, Clock, Calendar, Package } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      icon: Clock,
      name: 'Hourly Rate',
      price: 'Contact',
      period: 'per hour',
      description: 'Perfect for short meetings and quick sessions',
      features: [
        'Minimum 2 hours',
        'All amenities included',
        'WiFi access',
        'Washroom facilities',
        'Flexible timing'
      ],
      popular: false
    },
    {
      icon: Calendar,
      name: 'Daily Rate',
      price: 'Contact',
      period: 'per day',
      description: 'Ideal for full-day events and workshops',
      features: [
        '8-12 hour access',
        'All amenities included',
        'Catering options',
        'Setup assistance',
        'Extended hours available'
      ],
      popular: true
    },
    {
      icon: Package,
      name: 'Multi-Day Package',
      price: 'Contact',
      period: 'custom',
      description: 'Best value for extended projects and events',
      features: [
        'Discounted rates',
        'Priority booking',
        'Dedicated support',
        'Custom arrangements',
        'Flexible payment terms'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Flexible Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the rental option that best fits your needs and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-200 dark:border-primary-700 shadow-lg'
                  : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                  plan.popular 
                    ? 'bg-primary-100 dark:bg-primary-800/50' 
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}>
                  <plan.icon className={`${
                    plan.popular 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`} size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">
                    {plan.period}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className={`mr-3 flex-shrink-0 ${
                      plan.popular 
                        ? 'text-primary-600 dark:text-primary-400' 
                        : 'text-gray-400 dark:text-gray-500'
                    }`} size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-center block ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                }`}
              >
                Get Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}