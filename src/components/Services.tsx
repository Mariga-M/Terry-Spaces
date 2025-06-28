import React from 'react';
import { Briefcase, Users, Coffee, Calendar } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: 'Office Space',
      description: 'Professional workspace perfect for remote work, meetings, and productivity sessions.',
      features: ['Quiet environment', 'High-speed internet', 'Professional setting']
    },
    {
      icon: Users,
      title: 'Private Meetings',
      description: 'Confidential meeting space for business discussions, interviews, and consultations.',
      features: ['Privacy guaranteed', 'Professional atmosphere', 'Flexible duration']
    },
    {
      icon: Coffee,
      title: 'Catering Services',
      description: 'Complete catering solutions for your events, meetings, and special occasions.',
      features: ['Custom menus', 'Professional service', 'Fresh ingredients']
    },
    {
      icon: Calendar,
      title: 'Event Hosting',
      description: 'Versatile space for workshops, training sessions, and small gatherings.',
      features: ['Open layout', 'Flexible setup', 'Modern amenities']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Terry Spaces offers flexible solutions for all your workspace and event needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-300">
                <service.icon className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}