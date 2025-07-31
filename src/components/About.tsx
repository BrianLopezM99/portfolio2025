import React from 'react';
import { User, Code2, Shield, Zap } from 'lucide-react';
import profile from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl border border-gray-700 flex items-center justify-center">
                {/* <User className="w-32 h-32 text-gray-400" /> */}
                <img src={profile} alt="Profile" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full border border-blue-500/30 flex items-center justify-center">
                <Code2 className="w-8 h-8 text-blue-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-500/20 rounded-full border border-green-500/30 flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                Where Development Meets Security
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in tech began with a fascination for building things that work beautifully. 
                Over <span className="text-blue-400 font-semibold">3 years of experience</span>, I've crafted 
                web and mobile applications using modern technologies like React, Next.js, and Flutter.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                But building wasn't enough—I wanted to understand how things could break. This curiosity 
                led me to cybersecurity, where I earned my <span className="text-green-400 font-semibold">eJPT certification </span> 
                and developed expertise in penetration testing and ethical hacking.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Today, I bring a unique perspective to every project: 
                <span className="text-blue-400 font-semibold"> I build secure by design</span> and 
                <span className="text-green-400 font-semibold"> test with an attacker's mindset</span>. 
                This dual expertise ensures the applications I create are not just functional and beautiful, 
                but also resilient against real-world threats.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-medium">Full Stack Developer</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-medium">Ethical Hacker</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-medium">Security-First Approach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;