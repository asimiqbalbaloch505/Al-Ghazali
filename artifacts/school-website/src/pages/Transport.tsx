import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Route, CheckCircle2, ShieldCheck, Book, Building2 } from 'lucide-react';

const FACILITIES = [
  { icon: Building2, title: "Separate Campuses", desc: "Dedicated, completely separate physical facilities for boys and girls ensuring comfort and focus." },
  { icon: ShieldCheck, title: "Female Faculty", desc: "100% highly qualified female faculty for the Girls' Campus ensuring privacy and safety." },
  { icon: CheckCircle2, title: "Clean Classrooms", desc: "Well-lit, ventilated, and hygienic learning spaces for optimal concentration." },
  { icon: Book, title: "Library", desc: "A resource-rich environment to cultivate reading habits and support academic research." }
];

export default function Transport() {
  return (
    <div className="w-full bg-background pb-20">
      {/* Page Header */}
      <div className="bg-primary py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/transport.png')] bg-cover bg-center opacity-25"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Transport & Facilities</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Ensuring a safe, comfortable, and conducive environment for our students.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        
        {/* Operations & Transport */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-lg"
          >
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-8">
              <Clock className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl text-primary font-bold mb-6">School Hours</h2>
            <div className="text-4xl font-bold text-secondary mb-4">7:30 AM – 1:30 PM</div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our daily schedule is optimized for maximum learning efficiency. Students are expected to arrive 10 minutes prior to the morning assembly. Timings may adjust slightly during extreme weather seasons or Ramzan.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-8 md:p-12 rounded-3xl shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full -z-0"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 text-secondary rounded-2xl flex items-center justify-center mb-8">
                <Route className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-3xl font-bold mb-6">Transport Service</h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                We offer a safe and reliable transportation network covering major areas to ensure your child's secure commute.
              </p>
              
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-secondary font-bold uppercase tracking-wider text-sm mb-3">Primary Route</h3>
                <div className="flex flex-wrap items-center gap-2 text-lg font-medium">
                  <span>Chashma</span>
                  <span className="text-secondary">→</span>
                  <span>Dhakki</span>
                  <span className="text-secondary">→</span>
                  <span>Paharpur</span>
                  <span className="text-secondary">→</span>
                  <span>Dhalla Mian Wada</span>
                </div>
                <p className="mt-4 text-sm text-primary-foreground/60 italic">
                  * Multiple pick-and-drop stops available along this route.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Facilities List */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Campus Facilities</h2>
            <p className="text-muted-foreground text-lg">
              Providing the necessary infrastructure to support academic excellence and physical well-being.
            </p>
          </div>

          {/* Visual photo strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { src: 'images/classroom.png', alt: 'Classroom' },
              { src: '/images/school-img11.png', alt: 'School campus' },
              { src: '/images/library.png', alt: 'Library' },
              { src: '/images/sports.png', alt: 'Sports ground' },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden h-40 shadow-md"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FACILITIES.map((facility, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-6 p-8 bg-slate-50 rounded-2xl border border-border"
              >
                <div className="w-14 h-14 bg-white shadow-sm text-primary rounded-xl flex items-center justify-center shrink-0">
                  <facility.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{facility.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {facility.desc}
                  </p>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-6 p-8 bg-slate-50 rounded-2xl border border-border md:col-span-2"
              >
                <div className="w-14 h-14 bg-white shadow-sm text-primary rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Sports & Co-curricular Ground</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A dedicated ground for physical training, sports events, and our daily morning assemblies. We believe physical health is crucial to mental agility.
                  </p>
                </div>
              </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
