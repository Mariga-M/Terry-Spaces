import React from 'react';
import { Check, Clock, Calendar, Package } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Pricing() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 });

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
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-800 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Flexible Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the rental option that best fits your needs and budget
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-200 dark:border-primary-700 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:scale-105 '
                  : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 hover:bg-primary-25 dark:hover:bg-primary-900/10 '
              } cursor-pointer group ${
                cardsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animationDelay: cardsVisible ? `${index * 0.2}s` : '0s',
                transitionDelay: cardsVisible ? `${index * 0.2}s` : '0s'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                  plan.popular 
                    ? 'bg-primary-100 dark:bg-primary-800/50 group-hover:bg-primary-200 dark:group-hover:bg-primary-700/50' 
                    : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30'
                } transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <plan.icon className={`${
                    plan.popular 
                      ? 'text-primary-600 dark:text-primary-400 group-hover:animate-pulse' 
                      : 'text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400'
                  } transition-colors duration-300`} size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
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
                  <li key={feature} className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    <Check className={`mr-3 flex-shrink-0 ${
                      plan.popular 
                        ? 'text-primary-600 dark:text-primary-400 group-hover:animate-bounce-gentle' 
                        : 'text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400'
                    } transition-colors duration-300`} size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-center block ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 text-gray-900 dark:text-white transform hover:scale-105 hover:-translate-y-1'
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