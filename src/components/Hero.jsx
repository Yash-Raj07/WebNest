import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import heroMain from '../assets/Rectangle 7.png';
import heroDetail from '../assets/Rectangle 10.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Geometric Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-arch-light-grey/30 -skew-x-12 -z-10 origin-top-right"></div>
      <div className="absolute top-0 left-0 w-1/4 h-full bg-arch-light-grey/20 skew-x-12 -z-10 origin-top-left"></div>

      {/* Top Layout: Heading & Side Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        {/* Left: Main Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.95] tracking-tight">
            <span className="text-arch-accent italic">Our</span> <span className="text-arch-dark">Implicit Belief</span> <br />
            <span className="text-arch-accent">in</span> <span className="text-arch-accent">Architecture's</span> <br />
            <span className="text-arch-accent">Dynamism</span>
          </h1>
        </motion.div>

        {/* Right: Small Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 flex flex-col gap-8"
        >
          <div className="max-w-xs ml-auto text-right">
            <p className="text-[10px] text-arch-dark/60 uppercase tracking-widest leading-relaxed mb-4">
              Decorations and finishes of ideas in all <br /> interior and exterior implementation.
            </p>
            <h2 className="text-xl md:text-2xl font-serif text-arch-accent leading-snug">
              To achieve uniqueness in <br /> all that we do, adding <br /> elements of nature
            </h2>
          </div>
          
          <div className="relative w-40 ml-auto group">
            <div className="absolute -top-1 left-0 w-full h-1 bg-arch-accent z-10"></div>
            <img 
              src={heroDetail} 
              alt="Architecture Detail" 
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>

      {/* Center Layout: Main Image */}
      <div className="relative flex justify-center mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-5xl"
        >
          {/* Offset Frames */}
          <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 border-[16px] border-arch-accent -z-10"></div>
          <div className="absolute -top-6 -right-6 w-1/2 h-1/2 border-[16px] border-arch-accent -z-10"></div>
          
          <div className="overflow-hidden shadow-2xl">
            <img 
              src={heroMain} 
              alt="Main Modern Architecture" 
              className="w-full h-[500px] object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Layout: Video & Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mt-auto pb-12 border-b border-arch-dark/10">
        {/* Bottom Left: Watch Video */}
        <div className="flex items-center gap-6">
          <div className="relative w-32 h-32 flex items-center justify-center cursor-pointer group">
            {/* Circular Text */}
            <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
              <path 
                id="circlePath" 
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" 
                fill="none" 
              />
              <text className="text-[7px] uppercase tracking-[0.2em] font-medium fill-arch-dark">
                <textPath xlinkHref="#circlePath">
                  WATCH VIDEO WATCH VIDEO WATCH VIDEO
                </textPath>
              </text>
            </svg>
            <div className="w-12 h-12 bg-arch-dark rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Play className="fill-white text-white translate-x-0.5" size={16} />
            </div>
          </div>
        </div>

        {/* Bottom Right: Team Description */}
        <div className="max-w-sm ml-auto text-right">
          <p className="text-xs text-arch-dark/60 leading-relaxed italic">
            Our architectural team excels at creating visually appealing and function-driven spaces. We specialize in residential, commercial, and industrial architectural design, tailoring our designs to meet the unique needs of each client
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
