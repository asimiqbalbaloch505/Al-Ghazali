import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, Monitor, FlaskConical, Palette, GraduationCap } from 'lucide-react';

const SECTIONS = [
  {
    id: "junior",
    icon: Palette,
    title: "Junior Wing",
    grades: "Nursery to Prep",
    content: "Our Junior Wing provides a warm, nurturing environment where young minds take their first steps into formal education. We focus on basic literacy, numeracy, and crucial socialization skills through interactive and play-based learning methods."
  },
  {
    id: "primary",
    icon: BookOpen,
    title: "Primary Wing",
    grades: "1st to 5th Grade",
    content: "The Primary Wing builds a robust foundation in core subjects — English, Urdu, Mathematics, Islamiyat, and Science. We emphasize developing a reading habit, conceptual understanding, and moral character in these formative years."
  },
  {
    id: "middle",
    icon: FlaskConical,
    title: "Middle Wing",
    grades: "6th to 8th Grade",
    content: "Transitioning into more complex subjects, the Middle Wing focuses on critical thinking and analytical skills. Students are introduced to deeper scientific concepts, advanced mathematics, and comprehensive language studies to prepare them for the rigors of secondary education."
  },
  {
    id: "secondary",
    icon: Monitor,
    title: "Secondary / Matric",
    grades: "9th & 10th Grade",
    content: "Our Secondary section offers intensive preparation for Board Examinations. Students can choose between Science and Arts streams. We pride ourselves on consistently producing top board results through dedicated teaching, regular assessments, and conceptual clarity."
  },
  {
    id: "higher",
    icon: GraduationCap,
    title: "Higher Secondary / College",
    grades: "FA & FSc (11th & 12th)",
    content: "The College section prepares students for university admissions and professional careers. We offer specialized streams:\n\n• FSc Pre-Medical: For aspiring healthcare professionals.\n• FSc Pre-Engineering: For future engineers and architects.\n• FA: A strong foundation in Arts and Humanities."
  }
];

export default function Academics() {
  return (
    <div className="w-full bg-background pb-20">
      {/* Page Header */}
      <div className="bg-primary py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/school-img5.png')] bg-cover bg-center opacity-25"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Academics</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive educational programs from Nursery to College, tailored for excellence.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-primary font-bold mb-4">Educational Journey</h2>
          <p className="text-muted-foreground text-lg">
            At AlGhazali, we offer a continuous and cohesive educational path. Discover our academic divisions below.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl border border-border p-4 md:p-8"
        >
          <Accordion type="single" collapsible defaultValue="junior" className="w-full">
            {SECTIONS.map((section) => (
              <AccordionItem key={section.id} value={section.id} className="border-b last:border-0 border-border">
                <AccordionTrigger className="hover:no-underline py-6 group">
                  <div className="flex items-center gap-6 text-left">
                    <div className="hidden sm:flex w-16 h-16 bg-slate-50 text-secondary rounded-2xl items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                      <section.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-secondary uppercase tracking-wider mb-1">{section.grades}</div>
                      <div className="font-serif text-2xl text-primary font-bold">{section.title}</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pt-2 sm:pl-[5.5rem]">
                  <div className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="bg-slate-50 p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-primary mb-3">Qualified Faculty</h3>
            <p className="text-muted-foreground">
              Our teachers are subject-matter experts dedicated to student success. The Girls' Campus features a 100% highly qualified female faculty.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-primary mb-3">Board Results</h3>
            <p className="text-muted-foreground">
              We consistently maintain an outstanding track record in BISE DIKhan board examinations, with recent top results reaching 91.5%.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
