import React from 'react';
import { Wifi, Car, Coffee, Shield, Zap, Droplets } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Amenities() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.3 });

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
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-800 ${
            titleVisible ? 'animate-fade-in-down' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Premium Amenities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need for a comfortable and productive experience
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className={`flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer group border border-transparent hover:border-primary-100 dark:hover:border-primary-800 ${
                gridVisible ? 'animate-slide-up-bounce' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animationDelay: gridVisible ? `${index * 0.12}s` : '0s',
                transitionDelay: gridVisible ? `${index * 0.12}s` : '0s'
              }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <amenity.icon className="text-primary-600 dark:text-primary-400 group-hover:animate-pulse" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Image */}
        <div 
          ref={imageRef}
          className={`mt-16 transition-all duration-1000 ${
            imageVisible ? 'animate-zoom-in' : 'opacity-0 scale-90'
          }`}
        >
          <div className="aspect-[21/9] bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern studio interior with amenities"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}