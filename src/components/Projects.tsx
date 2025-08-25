import { useState } from 'react';
import { ExternalLink, Github, Shield, Smartphone, Globe, Server, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Chatbot MVP",
      descriptionKey: "project_descriptions.chatbot_mvp",
      image: "https://www.aceinfoway.com/blog/wp-content/uploads/2020/01/chatbot.jpg",
      tags: ["Flutter", "Mobile"],
      category: "mobile",
      tech: ["Flutter", "Dart"],
      link: "https://www.linkedin.com/posts/brian-lm_flutter-bloc-flutterbloc-activity-7216220120682037249-Hyj5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC32AewBWzZ_K2io9qYURYkMdaPYSGINf5o",
      github: "https://github.com/BrianLopezM99/flutterchatbot"
    },
    {
      id: 2,
      title: "Medical Platform with Chatbot",
      descriptionKey: "project_descriptions.medical_platform",
      image: "https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/03/How-to-Make-a-Medical-App-%E2%80%93-Practical-To-Do-Guide-for-2023-1700x880.png.webp",
      tags: ["Flutter", "AI", "Web"],
      category: "frontend",
      tech: ["Flutter", "Dart", "API Integration", "Patient Management", "Chatbot", "AI"],
      link: "https://zesty-swan-405af3.netlify.app/",
      github: "https://github.com/BrianLopezM99/medical_onboarding_app"
    },
    {
      id: 3,
      title: "Raspberry Pi HID Keyboard",
      descriptionKey: "project_descriptions.raspberry_pi",
      image: "https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2015/12/zero.png?resize=411%2C222&quality=100&strip=all&ssl=1",
      tags: ["Bash", "Automation"],
      category: "security",
      tech: ["Bash", "Automation"],
      link: "https://www.linkedin.com/posts/brian-lm_raspberrypi-hardwarehacking-hidattack-activity-7314560234381864960-6FFM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC32AewBWzZ_K2io9qYURYkMdaPYSGINf5o",
      github: "https://github.com/BrianLopezM99/raspberry-zero-HID-Keyboard-Emulation-Attack"
    },
    {
      id: 4,
      title: "Job Board",
      descriptionKey: "project_descriptions.job_board",
      image: "https://www.betterteam.com/images/betterteam-student-job-board-2400x2400-20220811.jpg?crop=4:3,smart&width=1200&dpr=2&format=pjpg&auto=webp&quality=85",
      tags: ["React", "Firebase", "Full Stack"],
      category: "fullstack",
      tech: ["React", "Firebase", "API Integration"],
      link: "https://adoring-turing-724c86.netlify.app/"
    },
    {
      id: 5,
      title: "TiendasJumbo Web Scraper",
      descriptionKey: "project_descriptions.tiendasjumbo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdAwCHatma4vzggTWyZnz9GPSxIDLdUmzMQ&s",
      tags: ["Python", "Docker", "Backend", "Web Scraping"],
      category: "backend",
      tech: ["Python", "Docker", "API Integration"],
      link: "https://github.com/BrianLopezM99/tiendasjumbo-scrapper",
      github: "https://github.com/BrianLopezM99/tiendasjumbo-scrapper"
    },
    {
      id: 6,
      title: "Walmart Web Scraper",
      descriptionKey: "project_descriptions.walmart",
      image: "https://hasdata.com/_astro/preview.DzLuzmEq.png",
      tags: ["Python", "Docker", "Backend", "Web Scraping"],
      category: "backend",
      tech: ["Python", "Docker", "API Integration"],
      link: "https://github.com/BrianLopezM99/PT-webscraping",
      github: "https://github.com/BrianLopezM99/PT-webscraping"
    },
    {
      id: 7,
      title: "Mobile app for medics",
      descriptionKey: "project_descriptions.medical_app",
      image: "https://images.ctfassets.net/63bmaubptoky/kpVp8pSRCLiGbSqQJeZ6pU3YNAC1sHJcm8UHEtotfB4/817df1ef22c32c63ccb14a6e7871e8b2/aplicaciones-medicas-ES-Capterra-header.png",
      tags: ["Flutter", "Firebase", "Mobile"],
      category: "mobile",
      tech: ["Flutter", "Firebase", "Dart", "API Integration"],
      link: "https://www.linkedin.com/posts/brian-lm_flutter-desarrollomaejvil-riverpod-activity-7353165439914442754-Y9fa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC32AewBWzZ_K2io9qYURYkMdaPYSGINf5o",
      github: "https://github.com/BrianLopezM99/mvpdentapp"
    }
  ];

  const filters = [
    { key: 'all', label: t('all_projects') },
    { key: 'fullstack', label: t('full_stack') },
    { key: 'security', label: t('security') },
    { key: 'frontend', label: t('frontend') },
    { key: 'mobile', label: t('mobile') },
    { key: 'backend', label: t('backend') },
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
      case 'security':
        return <Shield className="w-4 h-4" />;
      case 'backend':
        return <Terminal className="w-4 h-4" />;
      case 'ai':
        return <Terminal className="w-4 h-4" />;
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
              {t('projects_title')}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('projects_subtitle')}
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
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </button>
                  <button className="p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t(project.descriptionKey)}
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