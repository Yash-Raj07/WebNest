import React from 'react';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Service', href: '#' },
    { name: 'Project', href: '#' },
    { name: 'Team', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-10 h-10 border-2 border-arch-accent flex items-center justify-center p-1">
          <div className="flex flex-col leading-none text-[10px] font-bold text-arch-dark uppercase tracking-tighter">
            <span>no</span>
            <span>vo</span>
          </div>
        </div>
      </div>
      
      {/* Nav Links - Centered */}
      <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-sm font-medium text-arch-dark/70 hover:text-arch-accent transition-all duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
      
      {/* Contact Button */}
      <button className="btn-pill group">
        Contact Us
        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </nav>
  );
};

export default Navbar;
