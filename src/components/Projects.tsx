import React, { useState } from 'react';
import { ExternalLink, Github, Shield, Smartphone, Globe, Server } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Security Platform",
      description: "Full-stack e-commerce platform with integrated security monitoring and penetration testing automation.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "Node.js", "MongoDB", "Pentesting"],
      category: "fullstack",
      tech: ["React", "Express", "MongoDB", "Burp Suite"]
    },
    {
      id: 2,
      title: "Mobile Banking Security Audit",
      description: "Comprehensive security assessment of a Flutter-based banking app, identifying critical vulnerabilities.",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Flutter", "Firebase", "Pentesting", "Mobile Security"],
      category: "security",
      tech: ["Flutter", "Firebase", "OWASP", "Metasploit"]
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      description: "Secure real-time messaging platform with end-to-end encryption and vulnerability monitoring.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Next.js", "WebSocket", "Security"],
      category: "frontend",
      tech: ["Next.js", "Socket.io", "Encryption", "JWT"]
    },
    {
      id: 4,
      title: "Network Vulnerability Scanner",
      description: "Automated network scanning tool built with Node.js, integrating Nmap and custom vulnerability checks.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Node.js", "Python", "Nmap", "Automation"],
      category: "security",
      tech: ["Node.js", "Python", "Nmap", "Linux"]
    },
    {
      id: 5,
      title: "Task Management Dashboard",
      description: "Modern project management dashboard with role-based access control and security hardening.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "TailwindCSS", "Express", "Security"],
      category: "fullstack",
      tech: ["React", "TailwindCSS", "Express", "JWT"]
    },
    {
      id: 6,
      title: "Cross-Platform Fitness App",
      description: "Flutter-based fitness tracking app with secure user authentication and data protection.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Flutter", "Firebase", "Mobile"],
      category: "mobile",
      tech: ["Flutter", "Firebase", "Dart", "API Integration"]
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'security', label: 'Security' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'react':
      case 'next.js':
        return <Globe className="w-4 h-4" />;
      case 'node.js':
      case 'express':
        return <Server className="w-4 h-4" />;
      case 'flutter':
        return <Smartphone className="w-4 h-4" />;
      case 'pentesting':
      case 'security':
        return <Shield className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of projects that demonstrate my expertise in both development and cybersecurity
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                filter === filterItem.key
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {filterItem.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-blue-500/80 hover:bg-blue-500 rounded-full transition-colors">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors">
                    <Github className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center space-x-1 text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full border border-gray-600"
                    >
                      {getIcon(tech)}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        tag.toLowerCase().includes('react') || tag.toLowerCase().includes('next')
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : tag.toLowerCase().includes('security') || tag.toLowerCase().includes('pentesting')
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : tag.toLowerCase().includes('flutter') || tag.toLowerCase().includes('mobile')
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          : 'bg-gray-600/50 text-gray-300 border border-gray-600'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;