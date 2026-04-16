import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import designImg from '../assets/Rectangle 17.png';
import pricingImg from '../assets/Rectangle 18.png';
import implementationImg from '../assets/Rectangle 19.png';

const ProcessStep = ({ number, title, image, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start py-20 border-b border-white/10 last:border-b-0"
    >
      {/* Left Column: Number & Title */}
      <div className="lg:col-span-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-[1px] bg-arch-accent mb-2"></div>
            <span className="text-white font-medium text-lg tracking-widest">0{number}</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif leading-tight text-white max-w-xs">{title}</h3>
          
          <div className="mt-8 lg:mt-24">
            <button className="flex items-center gap-3 px-6 py-2.5 border border-white/20 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-arch-dark-blue transition-all duration-300 group">
              View Project
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Middle Column: Image */}
      <div className="lg:col-span-4">
        <div className="relative group">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-arch-accent z-10"></div>
          <div className="overflow-hidden shadow-2xl aspect-[4/3]">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Right Column: Description */}
      <div className="lg:col-span-4 flex flex-col justify-center h-full pt-4">
        <p className="text-white/60 text-xs leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Design",
      image: designImg,
      description: "The design stage begins by developing an understanding of our clients' needs and predispositions in an initial consultation with one of our designers. After this dialogue, we present the first draft of the design with a full explanation of our suggestions and their rationale. After client feedback, we rework our design to include any required modifications. After their approval we finalize the design and take full measurements.",
    },
    {
      number: 2,
      title: "Pricing and Materials Approval",
      image: pricingImg,
      description: "Once full measurements have been calculated and quantities estimated, we present a comprehensive cost analysis, giving clients a range of material options commensurate with their project and budget.",
    },
    {
      number: 3,
      title: "Implementation",
      image: implementationImg,
      description: "After approving the plans and with the clients' approval of carefully chosen materials, we carry out the finishing and decoration work, monitoring the fit-out throughout its progress. After this, we provide our clients with peace of mind thanks to our aftersales service.",
    },
  ];

  return (
    <section className="section-padding bg-arch-dark-blue">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col gap-4">
          <span className="text-white/60 uppercase tracking-[0.3em] text-[10px] font-bold block">Our works goes through three stages</span>
        </div>
        
        <div className="flex flex-col">
          {steps.map((step) => (
            <ProcessStep 
              key={step.number} 
              {...step} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
