import React from 'react';
import { X, MessageCircle, Mail } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    message: string;
  };
}

export function ContactModal({ isOpen, onClose, formData }: ContactModalProps) {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const phoneNumber = "254733937955"; // Terry Spaces WhatsApp number
    const message = `Hello Terry Spaces!

*Contact Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Needed: ${formData.service}
Preferred Date: ${formData.date || 'Not specified'}

*Message:*
${formData.message}

I'm interested in booking your studio space. Please let me know about availability and pricing.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleEmail = () => {
    const subject = `Studio Booking Inquiry - ${formData.service}`;
    const body = `Hello Terry Spaces,

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Needed: ${formData.service}
Preferred Date: ${formData.date || 'Not specified'}

Message:
${formData.message}

I'm interested in booking your studio space. Please let me know about availability and pricing.

Best regards,
${formData.name}`;

    const emailUrl = `mailto:info@terryspaces.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-6 animate-scale-in border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Send Your Message
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110 hover:rotate-90"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          Choose how you'd like to send your inquiry to Terry Spaces:
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <MessageCircle className="relative z-10 group-hover:animate-bounce-gentle" size={24} />
            <div className="relative z-10 text-left">
              <div className="font-bold">Send via WhatsApp</div>
              <div className="text-sm text-green-100">Instant messaging</div>
            </div>
          </button>

          <button
            onClick={handleEmail}
            className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <Mail className="relative z-10 group-hover:animate-bounce-gentle" size={24} />
            <div className="relative z-10 text-left">
              <div className="font-bold">Send via Email</div>
              <div className="text-sm text-primary-100">Traditional email</div>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Your message will be pre-formatted with all the details you provided
          </p>
        </div>
      </div>
    </div>
  );
}