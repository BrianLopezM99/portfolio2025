import React from 'react';
import { Award, Shield, CheckCircle, ExternalLink, Zap, Link } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "eLearnSecurity Junior Penetration Tester (eJPT)",
      issuer: "eLearnSecurity",
      date: "2025",
      description: "Comprehensive hands-on certification covering penetration testing methodologies, network security assessment, and ethical hacking techniques.",
      skills: ["Network Penetration Testing", "Web Application Security", "Host & Network Auditing", "Information Gathering"],
      verified: true,
      credentialId: "157697897"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications validating my cybersecurity expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 mb-8"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                {/* Certification Badge */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-500/30 rounded-lg flex items-center justify-center">
                      <Shield className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                </div>

                {/* Certification Details */}
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {cert.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <span className="flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>{cert.issuer}</span>
                        </span>
                        <span>•</span>
                        <span>{cert.date}</span>
                        {cert.verified && (
                          <>
                            <span>•</span>
                            <span className="flex items-center space-x-1 text-orange-400">
                              <Zap className="w-4 h-4" />
                              <span>In progress (Aug 2025)</span>
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Covered */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential Info */}
                  <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-4">
                    <div>
                      <span className="text-gray-400 text-sm">Credential ID:</span>
                      <span className="text-white font-mono ml-2">{cert.credentialId}</span>
                    </div>
                    <a
                      href="https://certs.ine.com/d780244c-b95e-401f-8795-14d4d44f7355#acc.bmktZQau"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 m-2" />
                      Verify
                    </a>

                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Future Certifications */}
          <div className="text-center mt-12 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-400 mb-4">
              Currently preparing for additional certifications including OSCP and CEH to further enhance my cybersecurity expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['OSCP (Planned)', 'ICCA (Planned)', 'AWS Security (Planned)'].map((cert, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;