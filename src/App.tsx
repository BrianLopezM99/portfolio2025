import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="loading">
        <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
          <Footer />
        </div>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;