import { Code2, Shield, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import profile from '../assets/profile.jpg';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              {t('about_title')}
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
                {t('about_heading')}
              </h3>
              
              <p 
                className="text-gray-300 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: t('about_paragraph1')
                    .replace('{{years}}', `<span class="text-blue-400 font-semibold">${t('years_experience')}</span>`)
                }}
              />

              <p 
                className="text-gray-300 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: t('about_paragraph2')
                    .replace('{{certification}}', `<span class="text-green-400 font-semibold">${t('ejpt_certification')}</span>`)
                }}
              />

              <p 
                className="text-gray-300 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: t('about_paragraph3')
                    .replace('{{secureByDesign}}', `<span class="text-blue-400 font-semibold">${t('secure_by_design')}</span>`)
                    .replace('{{testWithMindset}}', `<span class="text-green-400 font-semibold">${t('test_with_mindset')}</span>`)
                }}
              />

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-medium">{t('full_stack_developer')}</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-medium">{t('ethical_hacker')}</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-medium">{t('security_first_approach')}</span>
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