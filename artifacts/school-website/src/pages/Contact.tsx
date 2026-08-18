import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa6';

export default function Contact() {
  return (
    <div className="w-full bg-background pb-20">
      {/* Page Header */}
      <div className="bg-primary py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80')" }}></div>
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
            className="flex flex-col gap-4"
          >
            <div className="rounded-3xl overflow-hidden border border-border shadow-xl h-[420px]">
              <iframe
                title="Al Ghazali Public School & College Dhakki D I Khan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.84719839024154!2d71.10763372183557!3d32.201285025270245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392657c073c33629%3A0x488a48181463a094!2sAl%20Ghazali%20Public%20School%20%26%20College%20Dhakki%20D%20I%20Khan!5e0!3m2!1sen!2s!4v1784962027424!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <a
              href="https://www.google.com/maps/dir//6425%2BF2X+Al+Ghazali+Public+School+%26+College+Dhakki+D+I+Khan,+Khu+Malwanawala/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x392657c073c33629:0x488a48181463a094?sa=X&ved=1t:57443&ictx=111"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors text-sm"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
