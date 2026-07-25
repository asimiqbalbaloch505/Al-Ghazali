import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa6';

export default function Contact() {
  return (
    <div className="w-full bg-background pb-20">
      {/* Page Header */}
      <div className="bg-primary py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-school.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            We are here to help. Reach out to our administration for any inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-serif text-3xl text-primary font-bold mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Our Location</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Chah Malwana, Tehsil Paharpur,<br />
                      District Dera Ismail Khan, KPK,<br />
                      Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Phone Numbers</h3>
                    <div className="flex flex-col gap-1">
                      <a href="tel:03462257660" className="text-secondary hover:underline text-lg font-medium">0346 2257660</a>
                      <a href="tel:03085652708" className="text-secondary hover:underline text-lg font-medium">0308 5652708</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center shrink-0">
                    <FaWhatsapp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">WhatsApp</h3>
                    <a 
                      href="https://wa.me/923429196601" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded-full font-bold hover:bg-[#20bd5a] transition-colors"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Message 0342 9196601
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Office Hours</h3>
                    <p className="text-muted-foreground text-lg">
                      Monday to Saturday: 7:30 AM – 1:30 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-primary font-bold mb-6">Follow Us on Social Media</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-slate-100 hover:bg-secondary text-primary hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-100 hover:bg-secondary text-primary hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-100 hover:bg-secondary text-primary hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
                  <FaTiktok className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-100 hover:bg-secondary text-primary hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
                  <FaYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-full min-h-[400px] rounded-3xl overflow-hidden border border-border shadow-xl bg-slate-100 flex items-center justify-center relative"
          >
            {/* Embedded Google Map Placeholder */}
            <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center p-8 text-center">
              <MapPin className="w-16 h-16 text-primary/40 mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">AlGhazali Public School & College</h3>
              <p className="text-muted-foreground mb-6">Chah Malwana, Tehsil Paharpur, DIKhan</p>
              <div className="px-6 py-3 bg-white text-primary font-semibold rounded-full shadow-sm border border-border">
                Interactive Map Placeholder
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                (In a production environment, embed a Google Maps iframe here using the exact coordinates.)
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
