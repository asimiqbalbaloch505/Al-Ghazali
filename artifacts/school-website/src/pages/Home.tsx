import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Award, BookOpen, Shield, Bus, GraduationCap, ArrowRight, Target, Users } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';

const STATS = [
  { icon: Award, label: 'Years of Excellence', value: '25+' },
  { icon: GraduationCap, label: 'Educational Levels', value: 'Nursery to FSc' },
  { icon: Shield, label: 'Girls Campus', value: '100% Privacy' },
  { icon: Bus, label: 'Safe Transport', value: 'Daily Routes' },
  { icon: BookOpen, label: 'Top Board Result', value: '91.5%' },
];

const DISCIPLINES = [
  { title: 'Nursery & Prep', desc: 'A nurturing environment for early childhood development focusing on basic skills and socialization.', img: '/images/nursery_classroom.png', borderColor: 'border-blue-200' },
  { title: 'Primary Wing', desc: 'Building strong foundations in core subjects with an emphasis on moral character (1st to 5th Grade).', img: '/images/primary-wing.png', borderColor: 'border-indigo-200' },
  { title: 'Middle Wing', desc: 'Developing critical thinking and analytical skills to prepare for higher studies (6th to 8th Grade).', img: '/images/middle-wing.png', borderColor: 'border-sky-200' },
  { title: 'Secondary / Matric', desc: 'Rigorous academic preparation in Science & Arts streams for outstanding board results (9th & 10th).', img: '/images/matric-section.png', borderColor: 'border-slate-200' },
  { title: 'Higher Secondary', desc: 'College-level FA & FSc (Pre-Medical / Pre-Engineering), preparing students for university and professional success.', img: '/images/higher-secondary.png', borderColor: 'border-blue-200' },
];

export default function Home() {
  return (
    <div className="w-full bg-background">
      <HeroCarousel />

      {/* Highlights Strip */}
      <section className="bg-white border-b border-border relative z-10 -mt-8 mx-4 sm:mx-8 md:mx-auto max-w-7xl rounded-xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-border">
          {STATS.map((stat, idx) => (
            <div key={idx} className="p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-slate-50 transition-colors">
              <div className="p-3 bg-primary/5 text-secondary rounded-full">
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-xl text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principal Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-secondary/10 rounded-2xl transform rotate-3 z-0" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border-8 border-white">
              <img 
                src="/images/assembly_outdoor.png" 
                alt="School assembly" 
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl z-20 max-w-[240px]">
              <div className="font-serif text-4xl text-secondary mb-2">"</div>
              <p className="text-sm font-medium italic mb-2">Education builds not just minds, but the moral character of our nation.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">Welcome to AlGhazali</h2>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-6 leading-tight">
              A Message from Our Principal
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg mb-8">
              <p>
                "For over 25 years, AlGhazali Public School has been a cornerstone of education in our community. We are committed to nurturing not just academic excellence, but moral character and civic responsibility in every student."
              </p>
              <p>
                We believe that every child has immense potential. Through dedicated teachers, separate well-equipped campuses, and a focus on Islamic values alongside modern education, we provide an environment where students thrive.
              </p>
            </div>
            
            <div className="flex items-center gap-4 border-t border-border pt-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary shrink-0">
                <img src="/images/principal.png" alt="Abdul Rauf" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <h4 className="font-bold text-primary text-lg">Abdul Rauf</h4>
                <p className="text-sm text-secondary font-medium">Principal & Owner</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Academic Disciplines */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">Our Programs</h2>
            <h3 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-6">
              Academic Disciplines
            </h3>
            <p className="text-muted-foreground text-lg">
              Providing a seamless educational journey from early childhood through college preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DISCIPLINES.map((disc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl bg-white border shadow-sm hover:shadow-xl transition-all group overflow-hidden ${disc.borderColor}`}
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={disc.img}
                    alt={disc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-3 flex items-center justify-between">
                    {disc.title}
                    <ArrowRight className="w-5 h-5 text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {disc.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/academics" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors">
              Explore All Academics <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission Preview */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 bg-[url('/images/assembly-outdoor.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40"></div>
          
          <div className="relative z-10 p-10 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="font-serif text-3xl md:text-5xl font-bold mb-6">Our Vision & Mission</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                To build character alongside intellect. We are dedicated to preparing patriotic, responsible leaders for Pakistan's future through academic discipline and moral training.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 text-white">
                  <Target className="w-6 h-6 text-secondary" />
                  <span className="font-medium">Academic Excellence</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Users className="w-6 h-6 text-secondary" />
                  <span className="font-medium">Moral Character</span>
                </div>
              </div>
              <Link href="/vision" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary/90 transition-colors">
                Read Full Vision
              </Link>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="w-full h-80 rounded-2xl overflow-hidden border-4 border-white/20">
                <img src="/images/school-img9.png" alt="School campus" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
