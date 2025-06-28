import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

export function Location() {
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conveniently located in Komarock along Kangaru Street, easily accessible by public transport and private vehicle
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
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
                className="flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Navigation className="mr-2" size={20} />
                Get Directions
              </button>
              
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
              >
                <MapPin className="mr-2" size={20} />
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Location Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary-600 dark:text-primary-400" size={24} />
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
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Navigation className="text-primary-600 dark:text-primary-400" size={24} />
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
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary-600 dark:text-primary-400" size={24} />
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
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary-600 dark:text-primary-400" size={24} />
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
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-6 rounded-xl border border-primary-200 dark:border-primary-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Need Directions or Have Questions?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Contact us for detailed directions or any location-related queries.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+254XXXXXXXXX"
                  className="flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <Phone className="mr-2" size={16} />
                  Call Us
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center px-4 py-2 border border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-medium rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Landmarks Section */}
        <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nearby Landmarks
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Komarock Shopping Center</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">5 minutes walk</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Matatu Stage</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">2 minutes walk</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Main Road</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Direct access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}