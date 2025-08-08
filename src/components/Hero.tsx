import React from 'react';
import { ArrowRight, MapPin, Clock, Users, Phone, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Your Perfect
              <span className="text-primary-600 dark:text-primary-400 inline-block hover:animate-bounce-gentle transition-all duration-300"> Studio Space</span>
              <br />
              in Komarock
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
              Discover Terry Spaces - a versatile, open studio perfect for office work, private meetings, 
              and events. Featuring tiled floors, modern amenities, and flexible rental options.
            </p>
            
            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group">
                <MapPin className="text-primary-600 dark:text-primary-400 group-hover:animate-bounce-gentle" size={20} />
                <span className="font-medium">Komarock, Kangaru Street</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group">
                <Phone className="text-primary-600 dark:text-primary-400 group-hover:animate-wiggle" size={20} />
                <a href="tel:+254733937955" className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  +254 733 937 955
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer group">
                <Clock className="text-primary-600 dark:text-primary-400 group-hover:animate-pulse" size={20} />
                <span>Flexible Hours</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer group">
                <Users className="text-primary-600 dark:text-primary-400 group-hover:animate-bounce-gentle" size={20} />
                <span>18+ Welcome</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="tel:+254733937955"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <Phone className="mr-2 relative z-10 group-hover:animate-wiggle" size={20} />
                <span className="relative z-10">Call Now</span>
              </a>
              <a
                href="https://wa.me/254733937955?text=Hello%20Terry%20Spaces!%20I'm%20interested%20in%20booking%20your%20studio%20space.%20Please%20let%20me%20know%20about%20availability%20and%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <MessageCircle className="mr-2 relative z-10 group-hover:animate-bounce-gentle" size={20} />
                <span className="relative z-10">WhatsApp</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
              >
                Book Your Space
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-float">
                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern open studio space with tiled floors"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer animate-bounce-gentle">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Available</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer animate-pulse-slow">
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