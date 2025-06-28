import React from 'react';
import { Wifi, Car, Coffee, Shield, Zap, Droplets } from 'lucide-react';

export function Amenities() {
  const amenities = [
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Reliable WiFi connection for all your digital needs'
    },
    {
      icon: Droplets,
      title: 'Private Washroom',
      description: 'Clean, private bathroom facilities included'
    },
    {
      icon: Zap,
      title: 'Tiled Flooring',
      description: 'Easy-to-clean, professional tiled floors throughout'
    },
    {
      icon: Shield,
      title: 'Secure Access',
      description: 'Safe and secure environment for your peace of mind'
    },
    {
      icon: Car,
      title: 'Parking Available',
      description: 'Convenient parking space for your vehicle'
    },
    {
      icon: Coffee,
      title: 'Refreshment Area',
      description: 'Space for coffee breaks and light refreshments'
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Premium Amenities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need for a comfortable and productive experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <amenity.icon className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Image */}
        <div className="mt-16">
          <div className="aspect-[21/9] bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern studio interior with amenities"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}