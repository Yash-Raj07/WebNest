import React from 'react';
import { motion } from 'framer-motion';

const QuoteSection = () => {
  return (
    <section className="section-padding bg-arch-dark-blue text-white relative py-40 flex flex-col items-center justify-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mb-24 relative z-10"
      >
        <span className="text-white/60 uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Innovative architectural designs</span>
        <h2 className="text-4xl md:text-6xl font-serif leading-snug tracking-tight">
          The place where you spend your <br />
          time is a direct reflection of your <br />
          <span className="text-white italic">culture</span>
        </h2>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full max-w-6xl h-[600px] group"
      >
   {/* Frame Accents */}
        <div className="absolute -top-4 -left-4 w-3/4 h-3/4 border-[12px] border-arch-accent -z-10"></div>
        <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border-[12px] border-arch-accent -z-10"></div>
        
        <div className="overflow-hidden h-full shadow-2xl relative">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default QuoteSection;
