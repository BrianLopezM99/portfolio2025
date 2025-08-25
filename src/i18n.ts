import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translations
const resources = {
  en: {
    translation: {
      // Navigation
      nav_home: 'Home',
      nav_about: 'About',
      nav_projects: 'Projects',
      nav_skills: 'Skills',
      nav_certifications: 'Certifications',
      nav_contact: 'Contact',
      language: 'Language',
      
      // Hero Section
      hero_title_1: 'Full Stack',
      hero_title_2: 'Developer',
      hero_subtitle: '& Ethical Hacker',
      hero_description: 'Bridging the gap between {{dev}} and {{security}}. Building secure applications while thinking like an attacker.',
      innovative_dev: 'innovative development',
      cybersecurity_expertise: 'cybersecurity expertise',
      explore_work: 'Explore My Work',
      get_in_touch: 'Get In Touch',
      
      // About Section
      about_title: 'About Me',
      about_subtitle: 'Get to know me better',
      about_heading: 'Where Development Meets Security',
      about_paragraph1: 'My journey in tech began with a fascination for building things that work beautifully. Over {{years}} of experience, I\'ve crafted web and mobile applications using modern technologies like React, Next.js, and Flutter.',
      about_paragraph2: 'But building wasn\'t enough—I wanted to understand how things could break. This curiosity led me to cybersecurity, where I earned my {{certification}} and developed expertise in penetration testing and ethical hacking.',
      about_paragraph3: 'Today, I bring a unique perspective to every project: {{secureByDesign}} and {{testWithMindset}}. This dual expertise ensures the applications I create are not just functional and beautiful, but also resilient against real-world threats.',
      experience: 'Years Experience',
      clients: 'Happy Clients',
      projects_count: 'Projects',
      download_cv: 'Download CV',
      full_stack_developer: 'Full Stack Developer',
      ethical_hacker: 'Ethical Hacker',
      security_first_approach: 'Security-First Approach',
      years_experience: '+4 years',
      ejpt_certification: 'eJPT certification',
      secure_by_design: 'I build secure by design',
      test_with_mindset: 'test with an attacker\'s mindset',
      
      // Projects Section
      projects_title: 'Featured Projects',
      projects_subtitle: 'A showcase of projects that demonstrate my expertise in both development and cybersecurity',
      view_project: 'View Project',
      view_code: 'View Code',
      all_projects: 'All Projects',
      full_stack: 'Full Stack',
      security: 'Security',
      frontend: 'Frontend',
      mobile: 'Mobile',
      backend: 'Backend',
      project_descriptions: {
        chatbot_mvp: 'Simple Chatbot built with Flutter (MVP).',
        medical_platform: 'Medical Platform with Chatbot and patient management built with Flutter web. Has a chatbot that asks about your medical history and provides information about the platform.',
        raspberry_pi: 'Raspberry Pi HID Keyboard built with Bash',
        job_board: 'Job Board built with React and Firebase for job seekers and employers.',
        tiendasjumbo: 'Web scraper for TiendasJumbo.com to extract product information and prices.',
        walmart: 'Web scraper for Walmart.com to extract product information and prices.',
        medical_app: 'Mobile app for medics to manage their patients and appointments.'
      },
      project_tech_used: 'Technologies used',
      
      // Skills Section
      skills_title: 'Technical Skills',
      skills_subtitle: 'A comprehensive toolkit spanning development and cybersecurity domains',
      additional_skills: 'Additional Technologies & Tools',
      frontend_dev: 'Frontend Development',
      backend_dev: 'Backend Development',
      mobile_dev: 'Mobile Development',
      cybersecurity: 'Cybersecurity & Pentesting',
      
      // Certifications Section
      certifications_title: 'My Certifications',
      certifications_subtitle: 'Professional certifications that validate my cybersecurity expertise',
      view_certificate: 'View Certificate',
      key_skills_covered: 'Key Skills Covered',
      completed: 'Completed',
      in_progress: 'In Progress',
      verified: 'Verified',
      credential_id: 'Credential ID',
      view_credential: 'View Credential',
      certification_descriptions: {
        ejpt: 'Comprehensive hands-on certification covering penetration testing methodologies, network security assessment, and ethical hacking techniques.',
        ewptx: 'Hands-on certification in web application penetration testing, covering modern vulnerabilities and exploitation techniques.'
      },
      verify: 'Verify',

      continuous_learning: 'Continuous Learning',
      continuous_learning_text: 'Currently preparing for additional certifications including OSCP and CEH to further enhance my cybersecurity expertise.',
      
      // Contact Section
      contact_title: 'Get In Touch',
      contact_subtitle: 'Let\'s work together',
      contact_description: 'Have a project in mind or want to discuss potential opportunities? Feel free to reach out!',
      contact_ready: "Ready to collaborate on your next project? Let's discuss how I can help secure and build your applications.",
      conversation_title: "Let's Start a Conversation",
      conversation_text: "Whether you need a secure web application, a penetration test, or want to discuss cybersecurity best practices, I'm here to help. I bring both development expertise and security mindset to every project.",
      your_name: 'Your Name',
      your_email: 'Your Email',
      your_subject: 'Subject',
      your_message: 'Your Message',
      send_message: 'Send Message',
      connect_with_me: 'Connect With Me',
      send_me_message: 'Send Me a Message',
      location: 'Location',
      available_remote: 'Available for Remote Work',
      response_time: 'Response Time',
      within_24h: 'Within 24 hours',
      message_sent: 'Message Sent!',
      message_error: 'Error sending message. Please try again.',
      
      // Footer
      made_with: 'Made with',
      all_rights_reserved: 'All rights reserved',
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
      about: 'About',
      skills: 'Skills',
      certifications: 'Certifications',
      
      // Form Validation
      required_field: 'This field is required',
      invalid_email: 'Please enter a valid email',
      message_sent_success: 'Your message has been sent successfully!',

      //placeholders inputs send message
      placeholder_name: 'Your Name',
      placeholder_email: 'your.email@example.com',
      placeholder_subject: 'Project Discussion / Security Consultation / etc',
      placeholder_message: 'Tell me about your project, security needs, or how can i help...',
    },
  },
  es: {
    translation: {
      // Navegación
      nav_home: 'Inicio',
      nav_about: 'Sobre Mí',
      nav_projects: 'Proyectos',
      nav_skills: 'Habilidades',
      nav_certifications: 'Certificaciones',
      nav_contact: 'Contacto',
      language: 'Idioma',
      
      // Sección Hero
      hero_title_1: 'Desarrollador',
      hero_title_2: 'Full Stack',
      hero_subtitle: 'y Hacker Ético',
      hero_description: 'Tendiendo puentes entre {{dev}} y {{security}}. Construyendo aplicaciones seguras pensando como un atacante.',
      innovative_dev: 'desarrollo innovador',
      cybersecurity_expertise: 'experiencia en ciberseguridad',
      explore_work: 'Ver Mi Trabajo',
      get_in_touch: 'Contáctame',
      
      // Sección Sobre Mí
      about_title: 'Sobre Mí',
      about_subtitle: 'Conóceme mejor',
      about_heading: 'Donde el Desarrollo se Encuentra con la Seguridad',
      about_paragraph1: 'Mi viaje en tecnología comenzó con una fascinación por construir cosas que funcionen de manera hermosa. Con más de {{years}} de experiencia, he creado aplicaciones web y móviles utilizando tecnologías modernas como React, Next.js y Flutter.',
      about_paragraph2: 'Pero construir no fue suficiente, quería entender cómo podrían romperse las cosas. Esta curiosidad me llevó a la ciberseguridad, donde obtuve mi {{certification}} y desarrollé experiencia en pruebas de penetración y hacking ético.',
      about_paragraph3: 'Hoy, aporto una perspectiva única a cada proyecto: {{secureByDesign}} y {{testWithMindset}}. Esta doble experiencia asegura que las aplicaciones que creo no solo sean funcionales y hermosas, sino también resistentes a las amenazas del mundo real.',
      experience: 'Años de Experiencia',
      clients: 'Clientes Felices',
      projects_count: 'Proyectos',
      download_cv: 'Descargar CV',
      full_stack_developer: 'Desarrollador Full Stack',
      ethical_hacker: 'Hacker Ético',
      security_first_approach: 'Enfoque de Seguridad Primero',
      years_experience: '+4 años',
      ejpt_certification: 'certificación eJPT',
      secure_by_design: 'construyo con seguridad desde el diseño',
      test_with_mindset: 'pruebo con la mentalidad de un atacante',
      
      // Sección Proyectos
      projects_title: 'Proyectos Destacados',
      projects_subtitle: 'Una muestra de proyectos que demuestran mi experiencia tanto en desarrollo como en ciberseguridad',
      view_project: 'Ver Proyecto',
      view_code: 'Ver Código',
      view_live: 'Ver en Vivo',
      all_projects: 'Todos los Proyectos',
      full_stack: 'Full Stack',
      security: 'Seguridad',
      frontend: 'Frontend',
      mobile: 'Móvil',
      backend: 'Backend/API',
      project_tech_used: 'Tecnologías utilizadas',
      project_descriptions: {
        chatbot_mvp: 'Chatbot simple construido con Flutter (MVP).',
        medical_platform: 'Plataforma médica con Chatbot y gestión de pacientes construida con Flutter web. Incluye un chatbot que pregunta sobre tu historial médico y proporciona información sobre la plataforma.',
        raspberry_pi: 'Teclado HID con Raspberry Pi construido con Bash',
        job_board: 'Tablero de empleo construido con React y Firebase para buscadores de empleo y empleadores.',
        tiendasjumbo: 'Web scraper para TiendasJumbo.com para extraer información de productos y precios.',
        walmart: 'Web scraper para Walmart.com para extraer información de productos y precios.',
        medical_app: 'Aplicación móvil para médicos para gestionar sus pacientes y citas.'
      },
      
      // Sección Habilidades
      skills_title: 'Habilidades Técnicas',
      skills_subtitle: 'Un conjunto completo de habilidades que abarcan desarrollo y ciberseguridad',
      additional_skills: 'Tecnologías y Herramientas Adicionales',
      frontend_dev: 'Desarrollo Frontend',
      backend_dev: 'Desarrollo Backend',
      mobile_dev: 'Desarrollo Móvil',
      cybersecurity: 'Ciberseguridad y Pentesting',
      
      // Sección Certificaciones
      certifications_title: 'Mis Certificaciones',
      certifications_subtitle: 'Certificaciones profesionales que validan mi experiencia en ciberseguridad',
      view_certificate: 'Ver Certificado',
      key_skills_covered: 'Habilidades Clave Cubiertas',
      completed: 'Completado',
      in_progress: 'En Progreso',
      verified: 'Verificado',
      credential_id: 'ID de Credencial',
      view_credential: 'Ver Credencial',
      certification_descriptions: {
        ejpt: 'Certificación práctica integral que cubre metodologías de pruebas de penetración, evaluación de seguridad de redes y técnicas de hacking ético.',
        ewptx: 'Certificación práctica en pruebas de penetración de aplicaciones web, que cubre vulnerabilidades modernas y técnicas de explotación.'
      },
      verify: 'Verificar',
      continuous_learning: 'Continuo Aprendizaje',
      continuous_learning_text: 'Actualmente preparándome para certificaciones adicionales incluyendo OSCP y CEH para mejorar aún más mi experiencia en ciberseguridad.',
      
      // Sección Contacto
      contact_title: 'Contáctame',
      contact_subtitle: 'Trabajemos juntos',
      contact_description: '¿Tienes un proyecto en mente o quieres hablar sobre oportunidades potenciales? ¡No dudes en contactarme!',
      contact_ready: '¿Listo para colaborar en tu próximo proyecto? Hablemos de cómo puedo ayudar a asegurar y construir tus aplicaciones.',
      conversation_title: 'Iniciemos una Conversación',
      conversation_text: 'Ya sea que necesites una aplicación web segura, una prueba de penetración o quieras discutir las mejores prácticas de ciberseguridad, estoy aquí para ayudar. Aporto tanto experiencia en desarrollo como mentalidad de seguridad a cada proyecto.',
      your_name: 'Tu Nombre',
      your_email: 'Tu Correo Electrónico',
      your_subject: 'Asunto',
      your_message: 'Tu Mensaje',
      send_message: 'Enviar Mensaje',
      connect_with_me: 'Conéctate Conmigo',
      send_me_message: 'Envíame un Mensaje',
      location: 'Ubicación',
      available_remote: 'Disponible para Trabajo Remoto',
      response_time: 'Tiempo de Respuesta',
      within_24h: 'Dentro de 24 horas',
      message_sent: '¡Mensaje Enviado!',
      message_error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      
      // Pie de Página
      made_with: 'Hecho con',
      all_rights_reserved: 'Todos los derechos reservados',
      home: 'Inicio',
      projects: 'Proyectos',
      contact: 'Contacto',
      about: 'Sobre Mí',
      skills: 'Habilidades',
      certifications: 'Certificaciones',
      
      // Validación de Formulario
      required_field: 'Este campo es obligatorio',
      invalid_email: 'Por favor ingresa un correo electrónico válido',
      message_sent_success: '¡Tu mensaje ha sido enviado con éxito!',

      //placeholders inputs send message
      placeholder_name: 'Tu Nombre',
      placeholder_email: 'tu.email@example.com',
      placeholder_subject: 'Discusión del proyecto / Consulta de seguridad / etc.',
      placeholder_message: 'Cuéntame sobre tu proyecto, tus necesidades de seguridad o cómo puedo ayudarte...',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
