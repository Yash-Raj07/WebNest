import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const InfoSection = () => {
  const items = [
    {
      title: "Our Vision",
      description: "To be the first choice for quality in implementation and innovation of ideas in all interior and exterior decorations and finishes."
    },
    {
      title: "Our Mission",
      description: "To achieve uniqueness in all that we do, adding elements of nature in order to humanize the spaces we create, balancing form, function and aesthetics."
    },
    {
      title: "Our Work",
      description: "All Novo work is undertaken under one brand in order to ensure quality in materials and implementation. We pride ourselves in offering inimitable ideas and solutions which create harmony and coherence between each stage of the project. We employ familiar materials but use them innovatively."
    }
  ];

  return (
    <section className="section-padding bg-arch-dark-blue text-white flex flex-col lg:flex-row gap-16 items-start overflow-hidden">
      {/* Left Column */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 lg:max-w-xl"
      >
        <h2 className="text-4xl font-serif mb-6 text-white">Introduction</h2>
        <p className="text-white/60 text-[13px] leading-relaxed mb-16 max-w-md">
          We are living in a time of rapid urban growth with increasingly busy and fast lifestyles characterized by movement and commotion — so much so that the need to humanize architecture has never been more important.
        </p>

        <div className="flex flex-col">
          {items.map((item, index) => (
            <div key={index} className="border-t border-white/10 py-8 last:border-b last:border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-arch-accent hover:border-arch-accent transition-all duration-300 cursor-pointer">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>
              <p className="text-white/60 text-[12px] leading-relaxed max-w-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full relative group"
      >
        <div className="absolute top-0 left-0 w-full h-4 bg-arch-accent z-10"></div>
        <div className="overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600" 
            alt="Interior Architecture" 
            className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </motion.div>
    </section>
  );
};

const SuccessSection = () => {
  return (
    <section className="section-padding bg-arch-dark-blue text-white py-40 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
          <span>Our Success</span>
          <span>01/03</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-end gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 lg:max-w-4xl"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed text-white/80">
              We are living in a time of rapid urban growth with increasingly busy and fast lifestyles characterized by movement and commotion — so much so that the need to humanize architecture has never been more important. This means reconsidering the form and functions of our buildings and the materials we use, a prevalent trend in our industry which, more and more, seeks to provide an environment that understands people’s needs and shield them from the noise and bustle of the city streets. This encapsulates the Novo Design & Build approach. It begins with our name, one which promises authentic human feelings, taking us back to a time of serenity and spaciousness and looking ahead to ‘smart’, modern solutions.
            </p>
            <div className="w-full h-[1px] bg-white/10 mt-20"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center hover:border-arch-accent transition-all duration-300 cursor-pointer group">
              <span className="text-sm font-medium tracking-widest uppercase group-hover:text-arch-accent transition-colors duration-300">Next</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#EBECEE] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        {/* Left Column: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-between py-4"
        >
          <div>
            <h4 className="text-sm font-medium text-arch-dark/60 mb-10">Also get in touch</h4>
            <div className="space-y-6 text-[13px] text-arch-dark/80 font-medium">
              <div className="flex gap-2">
                <span className="text-arch-dark/40">e:</span>
                <span>info@novo.sa</span>
              </div>
              <div className="flex gap-2">
                <span className="text-arch-dark/40">t:</span>
                <span>+966 11 2111 090</span>
              </div>
              <div className="flex gap-2">
                <span className="text-arch-dark/40">m:</span>
                <span>+966 575 77 8888</span>
              </div>
              <div className="pt-2">
                <span className="block mb-4">novo-sa.com</span>
                <p className="text-arch-dark/60 leading-relaxed max-w-[200px]">
                  4658 King Abdulaziz Road, Al Rabeeh, 7542, Riyadh 13315 Saudi Arabia
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="w-12 h-12 border-2 border-arch-accent flex items-center justify-center p-1">
              <div className="flex flex-col leading-none text-[12px] font-bold text-arch-dark uppercase tracking-tighter">
                <span>no</span>
                <span>vo</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vertical Separator */}
        <div className="hidden lg:block w-[1px] bg-arch-accent/40 self-stretch"></div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-[1.5]"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-arch-dark-blue mb-6">Register your interest</h2>
          <p className="text-xs text-arch-dark/60 tracking-wide mb-16">Construction commencing during 2023 earthworks. season.</p>

          <form className="space-y-12">
            <div className="group">
              <input 
                type="text" 
                placeholder="e.g. Mohammed" 
                className="w-full bg-transparent border-b border-arch-accent/30 py-4 text-arch-dark placeholder:text-arch-dark/20 focus:outline-none focus:border-arch-accent transition-colors"
              />
              <label className="block text-[9px] uppercase tracking-widest font-bold text-arch-dark/40 mt-2 group-focus-within:text-arch-accent">Your Name</label>
            </div>

            <div className="group">
              <input 
                type="email" 
                placeholder="e.g. mohammed@gmail.com" 
                className="w-full bg-transparent border-b border-arch-accent/30 py-4 text-arch-dark placeholder:text-arch-dark/20 focus:outline-none focus:border-arch-accent transition-colors"
              />
              <label className="block text-[9px] uppercase tracking-widest font-bold text-arch-dark/40 mt-2 group-focus-within:text-arch-accent">Your E-mail</label>
            </div>

            <div className="group">
              <input 
                type="text" 
                placeholder="e.g. Hello!" 
                className="w-full bg-transparent border-b border-arch-accent/30 py-4 text-arch-dark placeholder:text-arch-dark/20 focus:outline-none focus:border-arch-accent transition-colors"
              />
              <label className="block text-[9px] uppercase tracking-widest font-bold text-arch-dark/40 mt-2 group-focus-within:text-arch-accent">Your Messages</label>
            </div>

            <div className="pt-10">
              <button className="w-full md:w-auto px-20 py-5 bg-arch-dark-blue text-white rounded-full flex items-center justify-center gap-3 hover:bg-arch-accent transition-all duration-300 text-sm font-medium">
                Send Message
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export { InfoSection, SuccessSection, ContactForm };
