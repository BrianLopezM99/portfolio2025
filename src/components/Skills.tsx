import { Code, Server, Smartphone, Shield, Globe, Database, Terminal, Lock } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      color: "blue",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TailwindCSS", level: 88 },
        { name: "TypeScript", level: 82 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      color: "green",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express", level: 85 },
        { name: "Python", level: 90 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "purple",
      skills: [
        { name: "Flutter", level: 85 },
        { name: "React Native", level: 80 },
        { name: "Dart", level: 85 },
        { name: "Mobile UI/UX", level: 90 }
      ]
    },
    {
      title: "Cybersecurity & Pentesting",
      icon: <Shield className="w-8 h-8" />,
      color: "red",
      skills: [
        { name: "Linux", level: 88 },
        { name: "Nmap", level: 85 },
        { name: "Burp Suite", level: 82 },
        { name: "Web Penetration Testing", level: 80 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-500/20",
        border: "border-blue-500/30",
        text: "text-blue-400",
        progress: "bg-blue-500"
      },
      green: {
        bg: "bg-green-500/20",
        border: "border-green-500/30",
        text: "text-green-400",
        progress: "bg-green-500"
      },
      purple: {
        bg: "bg-purple-500/20",  
        border: "border-purple-500/30",
        text: "text-purple-400",
        progress: "bg-purple-500"
      },
      red: {
        bg: "bg-red-500/20",
        border: "border-red-500/30", 
        text: "text-red-400",
        progress: "bg-red-500"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning development and cybersecurity domains
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 ${colorClasses.bg} rounded-xl border ${colorClasses.border} flex items-center justify-center mb-6 mx-auto`}>
                  <div className={colorClasses.text}>
                    {category.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white text-center mb-6">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className={`text-sm ${colorClasses.text} font-semibold`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 ${colorClasses.progress} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'Docker', 'AWS', 'PostgreSQL', 'Python', 'Wireshark', 
              'OWASP', 'Kali Linux', 'JWT', 'OAuth', 'GraphQL', 'SQLite', 'Firebase'
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full border border-gray-600 hover:border-blue-500/50 hover:text-white transition-all duration-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;