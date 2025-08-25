import { Award, Shield, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  skills: string[];
  status: string;
  verification: {
    url: string;
    credentialId: string;
  };
  image: string;
}

const Certifications = () => {
  const { t } = useTranslation();
  const certifications: Certification[] = [
    {
      id: 1,
      name: "eJPTv2",
      issuer: "eLearnSecurity",
      date: "2024-06-30",
      skills: [
        "Penetration Testing",
        "Network Security",
        "Web Application Security",
        "Vulnerability Assessment",
        "OSINT",
        "Privilege Escalation"
      ],
      status: "Completed",
      verification: {
        url: "https://verified.elearnsecurity.com/certificates/8d6b0d3e-5e4c-4b2d-9e8f-9e8f9e8f9e8f",
        credentialId: "IN-8D6B0D3E5E4C4B2D"
      },
      image: "https://elearnsecurity.com/wp-content/uploads/eJPT-Certification-Badge-1.png"
    },
    {
      id: 2,
      name: "eWPT Web Application Penetration Tester",
      issuer: "eLearnSecurity",
      date: "2024-03-15",
      skills: [
        "Web Application Penetration Testing",
        "Web Application Security",
        "Vulnerability Assessment",
        "OSINT",
        "Privilege Escalation"
      ],
      status: "In Progress",
      verification: {
        url: "#",
        credentialId: "xxxxxx"
      },
      image: "https://elearnsecurity.com/wp-content/uploads/eWPT-Certification-Badge-1.png"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              {t('certifications_title')}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('certifications_subtitle')}
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
                        {cert.status && (
                          <>
                            <span>•</span>
                            <span
                              className={`flex items-center space-x-1 ${cert.status === "In Progress" ? "text-orange-400" : " text-green-400"}`}
                            >
                              <span>{cert.status}</span>
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Skills Covered */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">{t('key_skills_covered')}:</h4>
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
                      <span className="text-gray-400 text-sm">{t('credential_id')}:</span>
                      <span className="text-white font-mono ml-2">{cert.verification.credentialId}</span>
                    </div>
                    <a
                      href="https://certs.ine.com/d780244c-b95e-401f-8795-14d4d44f7355#acc.bmktZQau"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 m-2" />
                      {t('verify')}
                    </a>

                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Future Certifications */}
          <div className="text-center mt-12 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">{t('continuous_learning')}</h3>
            <p className="text-gray-400 mb-4">
              {t('continuous_learning_text')}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['OSCP', 'ICCA', 'AWS Security'].map((cert, index) => (
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