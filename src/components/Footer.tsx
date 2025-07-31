import React from 'react';
import { Heart, Code, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="text-2xl font-bold">
              <span className="text-blue-400">Brian</span>
              <span className="text-green-400">Lopez</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-400">
              <Code className="w-4 h-4" />
              <span>+</span>
              <Shield className="w-4 h-4" />
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>© 2025 All rights reserved.</span>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <button 
              onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Building secure applications • Thinking like an attacker • 
            <span className="text-blue-400 font-medium"> Full Stack Development</span> • 
            <span className="text-green-400 font-medium"> Ethical Hacking</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;