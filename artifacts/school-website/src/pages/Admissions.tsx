import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, FileEdit, Users, PhoneCall } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const STEPS = [
  {
    icon: MapPin,
    title: "1. Campus Visit",
    desc: "Visit AlGhazali Public School campus during working hours to collect the prospectus and admission form from our reception."
  },
  {
    icon: FileEdit,
    title: "2. Entry Test",
    desc: "Candidates will take a basic competency assessment in core subjects to determine their appropriate academic level."
  },
  {
    icon: Users,
    title: "3. Interview",
    desc: "A brief, interactive session with the candidate and parents to understand the student's background and align expectations."
  },
  {
    icon: PhoneCall,
    title: "4. Selection Call",
    desc: "Selected candidates will receive a confirmation call from the administration regarding fee submission and joining dates."
  }
];

export default function Admissions() {
  return (
    <div className="w-full bg-background pb-20">
      {/* Page Header */}
      <div className="bg-primary py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/school-img6.png')] bg-cover bg-center opacity-25"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join the AlGhazali family. Simple steps to secure your child's future.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        
        {/* Roadmap */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Admission Process</h2>
            <p className="text-muted-foreground text-lg">
              Our admission process is designed to be transparent, fair, and straightforward. Follow these four steps to enroll.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Inquiry Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-border text-center shadow-lg">
          <h2 className="font-serif text-3xl text-primary font-bold mb-4">Have Questions?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our admissions office is ready to help you with fee structures, availability of seats, and transport routes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="tel:03462257660" 
              className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Call 0346 2257660
            </a>
            
            <a 
              href="https://wa.me/923429196601" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
