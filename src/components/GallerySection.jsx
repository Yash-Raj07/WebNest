import React from 'react';
import { motion } from 'framer-motion';
import bustImg from '../assets/Rectangle 12.png';
import horsesImg from '../assets/Rectangle 15.png';
import archwayImg from '../assets/Rectangle 16.png';

const StatsSection = () => {
  const stats = [
    { value: '12+', label: 'Branches' },
    { value: '10K+', label: 'Successful Projects' },
    { value: '2M', label: 'Satisfied Client' },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto border-t border-b border-arch-accent/30 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-6xl md:text-8xl font-serif text-arch-dark-blue mb-4">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest font-medium text-arch-text-muted">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-arch-dark-blue mb-6"
          >
            One step towards your <br /> dream home
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-arch-text-muted tracking-wide"
          >
            Challenging ourselves in every project
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Bust & Text */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full aspect-[3/4] group"
            >
              <div className="absolute top-0 left-0 w-full h-4 bg-arch-accent z-10"></div>
              <div className="overflow-hidden h-full shadow-lg">
                <img 
                  src={bustImg} 
                  alt="Classical Bust" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[13px] leading-relaxed text-arch-text-muted max-w-sm"
            >
              We are also committed to bioengineering in order to produce a healthier and more sustainable environment in all our solutions, utilizing nature to create humane spaces that stand out from the visual monotony of the urban landscape.
            </motion.p>
          </div>

          {/* Right Column: Overlapping Images */}
          <div className="lg:col-span-8 relative h-[600px] mt-12 lg:mt-32">
            {/* Background Image (Horses) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-3/4 aspect-[4/3] group z-0"
            >
              <div className="absolute -top-4 -right-4 w-full h-full border-[12px] border-arch-accent -z-10"></div>
              <div className="overflow-hidden h-full shadow-2xl">
                <img 
                  src={horsesImg} 
                  alt="Horse Statues" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Foreground Image (Archway) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 left-0 w-2/3 aspect-[4/3] z-10"
            >
              <div className="overflow-hidden h-full shadow-2xl border-4 border-white">
                <img 
                  src={archwayImg} 
                  alt="Garden Archway" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { StatsSection, GallerySection };
