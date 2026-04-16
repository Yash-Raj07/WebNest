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
<div className="relative">
  <div className="top-0 left-0 w-full h-full border-2 border-blue-500 z-10"></div> 
  <div className="absolute bottom-0 right-0 w-full h-full border-2 border-green-500"></div> 
  
  <div className="overflow-visible shadow-sm"> 
    <img 
      src="image.jpg" 
      alt=""           
      className="object-contain transition duration-200 hover:scale-125" 
    />
  </div>
</div>
      </motion.div>
    </section>
  );
};

export default QuoteSection;
