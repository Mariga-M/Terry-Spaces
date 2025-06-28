import React from 'react';
import { ArrowRight, MapPin, Clock, Users, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Your Perfect
              <span className="text-primary-600 dark:text-primary-400"> Studio Space</span>
              <br />
              in Komarock
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
              Discover Terry Spaces - a versatile, open studio perfect for office work, private meetings, 
              and events. Featuring tiled floors, modern amenities, and flexible rental options.
            </p>
            
            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                <span className="font-medium">Komarock, Kangaru Street</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                <Phone className="text-primary-600 dark:text-primary-400" size={20} />
                <a href="tel:+254733937955" className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  +254 733 937 955
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <Clock className="text-primary-600 dark:text-primary-400" size={20} />
                <span>Flexible Hours</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <Users className="text-primary-600 dark:text-primary-400" size={20} />
                <span>18+ Welcome</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="tel:+254733937955"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="mr-2" size={20} />
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
              >
                Book Your Space
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="animate-float">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern open studio space with tiled floors"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">Flexible</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Time</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">WiFi</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Included</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}