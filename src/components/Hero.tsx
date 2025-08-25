import { Shield, Code, ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex justify-center items-center space-x-4 mb-6">
          <div className="p-3 bg-blue-500/20 rounded-full border border-blue-500/30">
            <Code className="w-8 h-8 text-blue-400" />
          </div>
          <div className="text-2xl text-gray-400">+</div>
          <div className="p-3 bg-green-500/20 rounded-full border border-green-500/30">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">{t('hero_title_1')}</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            {t('hero_title_2')}
          </span>
          <br />
          <span className="text-gray-300 text-3xl md:text-4xl font-light">{t('hero_subtitle')}</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('hero_description')
            .replace('{{dev}}', `<span class="text-blue-400 font-semibold">${t('innovative_dev')}</span>`)
            .replace('{{security}}', `<span class="text-green-400 font-semibold">${t('cybersecurity_expertise')}</span>`)
            .split('\n').map((line, i) => (
              <span key={i} dangerouslySetInnerHTML={{ __html: line }} className="block" />
            ))
          }
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
          >
            {t('explore_work')}
          </button>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transform hover:scale-105 transition-all duration-200"
          >
            {t('get_in_touch')}
          </button>
        </div>

        <div className="mt-16 animate-bounce">
          <button onClick={scrollToAbout}>
            <ArrowDown className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;