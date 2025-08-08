import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Location() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: landmarksRef, isVisible: landmarksVisible } = useScrollAnimation({ threshold: 0.2 });

  const address = "Komarock, Along Kangaru Street, Nairobi, Kenya";
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`;
  
  // For demo purposes, using a generic Komarock location
  const demoMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7234567890123!2d36.9167!3d-1.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940b62a3c8efb8a0!2sKomarock%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske";

  const handleGetDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <section id="location" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-800 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conveniently located in Komarock along Kangaru Street, easily accessible by public transport and private vehicle
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-1000 ${
            contentVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Map */}
          <div className={`order-2 lg:order-1 ${contentVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'}`} style={{ animationDelay: '0.2s' }}>
            <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <iframe
                src={demoMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Terry Spaces Location"
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Map Controls */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleGetDirections}
                className="flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <Navigation className="mr-2 relative z-10 group-hover:animate-bounce-gentle" size={20} />
                <span className="relative z-10">Get Directions</span>
              </button>
              
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
              >
                <MapPin className="mr-2 group-hover:animate-bounce-gentle" size={20} />
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Location Details */}
          <div className={`order-1 lg:order-2 space-y-8 ${contentVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'}`} style={{ animationDelay: '0.4s' }}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Location Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer">
                    <MapPin className="text-primary-600 dark:text-primary-400 hover:animate-bounce-gentle" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Komarock, Along Kangaru Street<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer">
                    <Navigation className="text-primary-600 dark:text-primary-400 hover:animate-pulse" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Getting Here</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Easily accessible by matatu, bus, or private vehicle. 
                      Parking space available on-site for your convenience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer">
                    <Clock className="text-primary-600 dark:text-primary-400 hover:animate-pulse" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Availability</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Flexible hours based on your needs<br />
                      Available 24/7 with advance booking
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer">
                    <Phone className="text-primary-600 dark:text-primary-400 hover:animate-wiggle" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Contact Before Visit</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Please call or message us before visiting to ensure availability 
                      and arrange access to the studio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-6 rounded-xl border border-primary-200 dark:border-primary-700 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Need Directions or Have Questions?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Contact us for detailed directions or any location-related queries.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+254733937955"
                  className="flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
                >
                  <Phone className="mr-2 group-hover:animate-wiggle" size={16} />
                  Call Us
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center px-4 py-2 border border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-medium rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Landmarks Section */}
        <div 
          ref={landmarksRef}
          className={`mt-16 pt-16 border-t border-gray-200 dark:border-gray-700 transition-all duration-800 ${
            landmarksVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center ${
            landmarksVisible ? 'animate-fade-in-down' : 'opacity-0 -translate-y-4'
          }`} style={{ animationDelay: '0.2s' }}>
            Nearby Landmarks
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Komarock Shopping Center", time: "5 minutes walk" },
              { name: "Matatu Stage", time: "2 minutes walk" },
              { name: "Main Road", time: "Direct access" }
            ].map((landmark, index) => (
            <div 
              key={landmark.name}
              className={`text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer group ${
                landmarksVisible ? 'animate-slide-up-bounce' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animationDelay: landmarksVisible ? `${0.4 + index * 0.15}s` : '0s',
                transitionDelay: landmarksVisible ? `${0.4 + index * 0.15}s` : '0s'
              }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <MapPin className="text-primary-600 dark:text-primary-400 group-hover:animate-bounce-gentle" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{landmark.name}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{landmark.time}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}