import React from 'react';
import { motion } from 'framer-motion';
import { History, ShieldCheck, UserCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full bg-background pb-20">
      {/* Page Header */}
      <div className="bg-primary py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/school-img5.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Discover the legacy and values that have shaped our institution for over a quarter of a century.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        
        {/* History & Legacy */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center justify-center p-3 bg-secondary/10 text-secondary rounded-xl mb-4">
              <History className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">25 Years of Legacy</h2>
            <div className="text-muted-foreground text-lg space-y-4 leading-relaxed">
              <p>
                Established with a vision to provide accessible, high-quality education to the Chah Malwana and Dera Ismail Khan region, AlGhazali Public School & College has been a beacon of learning for 25 years.
              </p>
              <p>
                From our humble beginnings, we have grown into a comprehensive educational institution serving students from Nursery up to Higher Secondary levels (FA/FSc). Our enduring commitment to our motto — "إياك نعبد وإياك نستعين" — guides our daily efforts to nurture not just minds, but souls.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl relative h-[400px]"
          >
            <img src="/images/school-img6.png" alt="Students assembly" className="w-full h-full object-cover" />
          </motion.div>
        </section>

        {/* Separate Campuses */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl relative h-[400px]"
          >
            <img src="/images/school-img8.png" alt="Teachers and staff" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="inline-flex items-center justify-center p-3 bg-secondary/10 text-secondary rounded-xl mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Dedicated Campuses</h2>
            <div className="text-muted-foreground text-lg space-y-4 leading-relaxed">
              <p>
                We understand the cultural values and preferences of our community. That is why AlGhazali Public School operates completely separate physical facilities for boys and girls.
              </p>
              <p>
                <strong>Girls' Campus:</strong> Our girls' section ensures 100% privacy and comfort, staffed by a highly qualified all-female faculty. We provide an empowering, safe environment where young women can focus entirely on their personal and academic growth.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Leadership */}
        <section className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-border">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-secondary/10 text-secondary rounded-xl mb-4">
              <UserCheck className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Our Leadership</h2>
            
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-secondary mx-auto mt-8 mb-4 shadow-lg">
              <img src="/images/principal.png" alt="Principal Abdul Rauf" className="w-full h-full object-cover object-top" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Abdul Rauf</h3>
            <p className="text-secondary font-medium uppercase tracking-wider text-sm">Principal & Owner</p>
            
            <div className="text-muted-foreground text-lg leading-relaxed mt-6">
              <p>
                Under the dedicated leadership of Principal Abdul Rauf, the institution has flourished, continually upgrading its facilities, expanding its curriculum, and maintaining the strict discipline and high academic standards that AlGhazali is known for across the DIKhan region.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
