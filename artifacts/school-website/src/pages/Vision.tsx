import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Star, BookOpen, HeartHandshake, Shield, Sparkles, Flag } from 'lucide-react';

const VALUES = [
  { icon: Star, title: 'Academic Excellence', desc: 'Striving for the highest standards in all academic pursuits.' },
  { icon: HeartHandshake, title: 'Moral Character', desc: 'Instilling Islamic values, honesty, and integrity in daily life.' },
  { icon: Shield, title: 'Discipline', desc: 'Fostering order, punctuality, and respect for rules and peers.' },
  { icon: Sparkles, title: 'Innovation', desc: 'Embracing modern learning methods alongside traditional wisdom.' },
  { icon: Flag, title: 'Patriotism', desc: 'Developing a deep love for Pakistan and a desire to serve the nation.' },
  { icon: BookOpen, title: 'Community Service', desc: 'Encouraging empathy and active contribution to society.' },
];

export default function Vision() {
  return (
    <div className="w-full bg-background pb-20">
      {/* Page Header */}
      <div className="bg-primary py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/middle-wing.png')] bg-cover bg-center opacity-25"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Vision & Mission</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            The guiding principles that shape our educational philosophy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        
        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-border relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-8">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl text-primary font-bold mb-6">Our Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To be the premier educational institution in the DIKhan region, recognized for building unshakeable moral character alongside rigorous intellectual development. We envision a community of learners where every student is nurtured to achieve their highest potential, rooted deeply in Islamic values and equipped with the knowledge to navigate the modern world.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-primary text-white p-10 rounded-3xl shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="w-16 h-16 bg-white/10 text-secondary rounded-2xl flex items-center justify-center mb-8">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Preparing patriotic, responsible, and capable leaders for Pakistan's future. We achieve this by providing a balanced curriculum, maintaining strict academic discipline, offering dedicated facilities for both boys and girls, and fostering an environment where Islamic morals and modern education go hand in hand.
            </p>
          </motion.div>
        </div>

        {/* Motto Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24 py-16 px-8 bg-slate-50 rounded-3xl border border-border"
        >
          <h3 className="text-secondary font-bold tracking-widest uppercase text-sm mb-6">Our Guiding Principle</h3>
          <div className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">
            "إياك نعبد وإياك نستعين"
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
            "You alone we worship, You alone we ask for help."
          </p>
        </motion.div>

        {/* Core Values */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              These principles form the foundation of our institution's culture and guide our daily interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-border rounded-2xl hover:border-secondary hover:shadow-lg transition-all bg-white"
              >
                <div className="w-12 h-12 bg-slate-50 text-secondary rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
