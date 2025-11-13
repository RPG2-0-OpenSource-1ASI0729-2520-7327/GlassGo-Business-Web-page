/**
 * GlassGo Internationalization System (i18n)
 * Supports Spanish and English languages
 */

class I18n {
    constructor() {
        this.currentLanguage = 'es';
        this.translations = {};
        this.supportedLanguages = ['es', 'en'];
        this.fallbackLanguage = 'es';
        
        // Complete inline fallback translations for when JSON files can't be loaded
        this.inlineTranslations = {
            'es': {
                "meta": { "title": "GlassGo - Software para transporte de vidrio", "language": "es" },
                "notifications": {
                    "terms_accepted": "Términos y condiciones aceptados",
                    "terms_rejected": "Debes aceptar los términos y condiciones para continuar"
                },
                "navigation": { "home": "Inicio", "about": "Nosotros", "benefits": "Beneficios", "testimonials": "Testimonios", "faq": "Preguntas", "tutorials": "Tutoriales", "contact": "Contacto", "login": "Iniciar sesión", "register": "Registrarse" },
                "hero": { "title": "Software diseñado para trazabilidad y<br>prevención de pérdidas en transporte de vidrio", "subtitle": "De la optimización de rutas a la detección de golpes, todo en una sola plataforma", "btn_pricing": "Ver planes y precios", "btn_demo": "Obtener una demostración →" },
                "about": { "title": "Nosotros", "subtitle": "Somos RPG, una plataforma tecnológica que transforma el transporte de licores en envases de vidrio con trazabilidad en tiempo real, optimización de rutas y sensores inteligentes para entregas seguras y eficientes", "cards": { "help": { "title": "Como ayudamos", "description": "Reducimos pérdidas, optimizamos rutas y garantizamos transparencia en cada envío con tecnología accesible que asegura entregas seguras y eficientes." }, "value": { "title": "Propuesta de valor", "description": "Ofrecemos una solución única que une trazabilidad, prevención de roturas y accesibilidad, para que cada botella llegue segura a su destino y tu negocio gane en eficiencia y confianza." }, "mission": { "title": "Misión y visión", "description": "Revolucionamos el transporte de vidrio con tecnología accesible, segura y eficiente, creando un nuevo estándar sin roturas y con total transparencia." } } },
                "team": { "title": "Equipo de desarrollo", "subtitle": "Conoce al equipo que construye GlassGo con tecnología, pasión y una mentalidad centrada en el cliente.", "members": { "1": { "name": "Jarod Céspedes", "career": "Ingeniero de Software" }, "2": { "name": "Guillermo Howard", "career": "Ingeniero de Software" }, "3": { "name": "David Vivar", "career": "Ingeniero de Software" }, "4": { "name": "Dylan Guillen", "career": "Ingeniero de Software" } }, "about_video": { "title": "Sobre el equipo", "subtitle": "Video proximamente: Un vistazo a cómo trabajamos, nuestras prácticas de ingeniería y nuestra cultura.", "badge": "Próximamente", "cta": "Video disponible pronto", "note": "Estamos preparando el video para nuestro canal de YouTube. ¡Vuelve pronto!" } },
                "benefits": { "title": "Beneficios", "subtitle": "Toma el control de tu logística con tecnología que protege tu mercancía, mejora la eficiencia y garantiza transparencia en cada envío", "transport": { "title": "Empresas De Transporte De Camiones", "items": { "tracking": "Seguimiento en tiempo real de cada vehículo", "alerts": "Alertas inmediatas por vibración o impacto en la carga", "optimization": "Optimización de rutas para reducir tiempos y costos", "reduction": "Reducción de pérdidas por roturas en tránsito", "reports": "Reportes automáticos de desempeño de la flota" } }, "distributors": { "title": "Distribuidores De Licores / Dueños De Negocios", "items": { "safe_delivery": "Entregas más seguras y con menor índice de roturas", "transparency": "Transparencia en cada envío con trazabilidad digital", "clear_reports": "Acceso a reportes claros sobre cada entrega", "inventory_control": "Control de inventario en tránsito", "cost_reduction": "Reducción de costos logísticos por pérdidas o devoluciones" } } },
                "testimonials": { "title": "Testimonios", "nav": { "prev": "Testimonio anterior", "next": "Siguiente testimonio" }, "items": { "maria": { "name": "María T.", "role": "Distribuidora", "text": "Lo de trazabilidad completa nos dio tranquilidad. Nuestros clientes reciben sus pedidos íntegros y confiamos plenamente en cada entrego." }, "carlos": { "name": "Carlos M.", "role": "Gerente de transportes", "text": "Antes perdíamos demasiado tiempo y dinero por rutas ineficientes y roturas en el camino. Con esta plataforma ahora controlamos todo en tiempo real y nuestros costos se redujeron notablemente." }, "jorge": { "name": "Jorge R.", "role": "Dueño de negocio", "text": "Ahora sé exactamente dónde está mi mercancía y cuándo llega. He reducido pérdidas y gano más confianza con mis proveedores." } } },
                "faq": { "title": "Preguntas Frecuentes", "subtitle": "Foro de preguntas con más frecuencia", "btn_more": "Ver más", "items": { "what_is": { "question": "¿Qué es GlassGo?", "answer": "GlassGo es una plataforma integral de gestión logística especializada en el transporte seguro de vidrio y materiales frágiles. Ofrecemos seguimiento en tiempo real, optimización de rutas y control total de la cadena de suministro para garantizar entregas perfectas." }, "cost": { "question": "¿Cuánto cuesta usar el software?", "answer": "Ofrecemos planes flexibles adaptados a diferentes necesidades empresariales. Desde $299/mes para pequeñas empresas hasta planes enterprise personalizados. Incluye prueba gratuita de 30 días y soporte técnico completo. Contacta con nuestro equipo para una cotización personalizada." }, "accessible": { "question": "¿Es accesible para pequeñas empresas?", "answer": "Absolutamente. Hemos diseñado GlassGo pensando en empresas de todos los tamaños. Nuestro plan básico es perfecto para pequeñas empresas que buscan profesionalizar su logística sin grandes inversiones. Incluye todas las funciones esenciales y escalabilidad conforme creces." }, "support": { "question": "¿Qué tipo de soporte técnico ofrecen?", "answer": "Proporcionamos soporte técnico 24/7 a través de chat en vivo, email y teléfono. Además, ofrecemos capacitación inicial gratuita, documentación completa, webinars mensuales y un gerente de cuenta dedicado para planes enterprise." }, "security": { "question": "¿Cómo garantizan la seguridad de los datos?", "answer": "Utilizamos encriptación SSL de grado militar, servidores en la nube con certificación ISO 27001, copias de seguridad automáticas cada 6 horas y cumplimos con todas las normativas de protección de datos. Tu información está completamente segura con nosotros." } } },
                "tutorials": { "title": "Tutoriales", "subtitle": "Descubre cómo nuestra plataforma protege tus envíos y optimiza tu logística", "items": { "dashboard": { "title": "Dashboard", "description": "Visualiza el estado de tus envíos, rutas activas y estadísticas en tiempo real desde un panel intuitivo." }, "tracking": { "title": "Tracking", "description": "Sigue la ubicación exacta de tus camiones con total trazabilidad y transparencia." }, "reports": { "title": "Reportes", "description": "Genera reportes detallados, gráficos y estadísticas para optimizar tus operaciones." }, "history": { "title": "Historial", "description": "Revisa el historial completo de entregas y datos anteriores para análisis y referencias." } } },
                "contact": { "title": "Contáctenos", "description": "Escríbenos y juntos impulsaremos tu negocio hacia un transporte sin roturas y con total control", "form": { "subtitle": "Tu opinión y tus necesidades son el punto de partida para crear soluciones efectivas.", "name": "Nombre", "email": "Email", "phone": "Número", "message": "Mensaje", "submit": "Enviar", "sending": "Enviando...", "success": "¡Mensaje enviado con éxito!<br>Te contactaremos pronto.", "errors": { "name": "El nombre debe tener al menos 2 caracteres", "email": "Por favor ingresa un email válido", "phone": "Por favor ingresa un número de teléfono válido", "message": "El mensaje debe tener al menos 10 caracteres", "general": "Error al enviar el mensaje. Por favor intenta de nuevo.", "title": "Por favor corrige los siguientes errores:" } } },
                "footer": { "description": "Estas son las características que diferencian nuestra solución: tecnología accesible, enfocada en tu negocio y lista para impulsar tu crecimiento.", "social_title": "Redes Sociales", "services_title": "Servicios", "legal_title": "Información Legal", "legal": { "contact": "Contacto", "terms": "Términos y Condiciones" }, "services": { "about": "Nosotros", "benefits": "Beneficios", "testimonials": "Testimonios", "faq": "Preguntas", "tutorials": "Tutorial", "contact": "Contacto", "download": "Descargar" }, "copyright": "Todos los derechos reservados © 2025 GlassGo" },
                "terms": { "title": "Términos y Condiciones", "section1": { "title": "1. Aceptación de los Términos", "content": "Al acceder y utilizar los servicios de GlassGo, usted acepta estos términos y condiciones en su totalidad. Es importante que lea detenidamente este documento antes de utilizar nuestros servicios." }, "section2": { "title": "2. Descripción del Servicio", "content": "GlassGo proporciona un software para la gestión y trazabilidad del transporte de vidrio. Nuestros servicios incluyen, pero no se limitan a:", "list": [ "Seguimiento en tiempo real de envíos", "Monitoreo de impactos y vibraciones", "Optimización de rutas", "Generación de reportes y análisis", "Gestión de flotas y conductores" ] }, "section3": { "title": "3. Responsabilidades del Usuario", "content": "El usuario se compromete a:", "list": [ "Proporcionar información precisa y actualizada", "Mantener la confidencialidad de sus credenciales", "Utilizar el servicio de manera ética y legal", "Reportar cualquier uso no autorizado de su cuenta", "Cumplir con todas las leyes y regulaciones aplicables" ] }, "section4": { "title": "4. Privacidad y Protección de Datos", "content": "Nos comprometemos a proteger su privacidad y datos personales. Nuestras prácticas incluyen:", "list": [ "Encriptación de datos sensibles", "Almacenamiento seguro en servidores protegidos", "Acceso restringido a personal autorizado", "Cumplimiento con regulaciones de protección de datos" ] }, "section5": { "title": "5. Limitación de Responsabilidad", "content": "GlassGo no será responsable por:", "list": [ "Pérdidas no atribuibles directamente a nuestro incumplimiento", "Daños indirectos o consecuentes", "Interrupciones temporales del servicio por mantenimiento", "Fuerza mayor o circunstancias fuera de nuestro control" ] }, "section6": { "title": "6. Tarifas y Pagos", "content": "Los detalles sobre precios, facturación y pagos se especifican en nuestros planes de suscripción. Nos reservamos el derecho de modificar las tarifas con previo aviso." }, "section7": { "title": "7. Cancelación y Terminación", "content": "Puede cancelar su suscripción en cualquier momento. Nos reservamos el derecho de suspender o terminar el servicio en caso de violación de estos términos." }, "legal_notice": "La información proporcionada en este documento es solo para fines informativos y no constituye asesoramiento legal. Para cualquier consulta específica, le recomendamos consultar con un profesional legal.", "accept_button": "Aceptar Términos y Condiciones" },
                "language": { "current": "Español", "selector_label": "Seleccionar idioma" }
            },
            'en': {
                "meta": { "title": "GlassGo - Glass Transport Software", "language": "en" },
                "notifications": {
                    "terms_accepted": "Terms and conditions accepted",
                    "terms_rejected": "You must accept the terms and conditions to continue"
                },
                "navigation": { "home": "Home", "about": "About Us", "benefits": "Benefits", "testimonials": "Testimonials", "faq": "FAQ", "tutorials": "Tutorials", "contact": "Contact", "login": "Log In", "register": "Sign Up" },
                "hero": { "title": "Software designed for traceability and<br>loss prevention in glass transportation", "subtitle": "From route optimization to impact detection, everything in one platform", "btn_pricing": "View plans and pricing", "btn_demo": "Get a demo →" },
                "about": { "title": "About Us", "subtitle": "We are RPG, a technological platform that transforms the transportation of liquors in glass containers with real-time traceability, route optimization and smart sensors for safe and efficient deliveries", "cards": { "help": { "title": "How We Help", "description": "We reduce losses, optimize routes and guarantee transparency in every shipment with accessible technology that ensures safe and efficient deliveries." }, "value": { "title": "Value Proposition", "description": "We offer a unique solution that combines traceability, breakage prevention and accessibility, so that every bottle arrives safely at its destination and your business gains efficiency and confidence." }, "mission": { "title": "Mission and Vision", "description": "We revolutionize glass transportation with accessible, safe and efficient technology, creating a new standard without breakage and with total transparency." } } },
                "team": { "title": "Development Team", "subtitle": "Meet the team building GlassGo with technology, passion and a client-focused mindset.", "members": { "1": { "name": "Jarod Céspedes", "career": "Software Engineer" }, "2": { "name": "Guillermo Howard", "career": "Software Engineer" }, "3": { "name": "David Vivar", "career": "Software Engineer" }, "4": { "name": "Dylan Guillen", "career": "Software Engineer" } }, "about_video": { "title": "About the Team", "subtitle": "Coming soon: A look at how we work, our engineering practices and our culture.", "badge": "Coming soon", "cta": "Video available soon", "note": "We're preparing the video for our YouTube channel. Come back soon!" } },
                "benefits": { "title": "Benefits", "subtitle": "Take control of your logistics with technology that protects your merchandise, improves efficiency and guarantees transparency in every shipment", "transport": { "title": "Truck Transportation Companies", "items": { "tracking": "Real-time tracking of every vehicle", "alerts": "Immediate alerts for vibration or impact on cargo", "optimization": "Route optimization to reduce time and costs", "reduction": "Reduction of losses due to breakage in transit", "reports": "Automatic fleet performance reports" } }, "distributors": { "title": "Liquor Distributors / Business Owners", "items": { "safe_delivery": "Safer deliveries with lower breakage rates", "transparency": "Transparency in every shipment with digital traceability", "clear_reports": "Access to clear reports on every delivery", "inventory_control": "In-transit inventory control", "cost_reduction": "Reduction of logistics costs due to losses or returns" } } },
                "testimonials": { "title": "Testimonials", "nav": { "prev": "Previous testimonial", "next": "Next testimonial" }, "items": { "maria": { "name": "María T.", "role": "Distributor", "text": "Complete traceability gave us peace of mind. Our customers receive their orders intact and we fully trust every delivery." }, "carlos": { "name": "Carlos M.", "role": "Transport Manager", "text": "Before, we lost too much time and money due to inefficient routes and breakage on the road. With this platform we now control everything in real time and our costs were significantly reduced." }, "jorge": { "name": "Jorge R.", "role": "Business Owner", "text": "Now I know exactly where my merchandise is and when it arrives. I have reduced losses and gain more confidence with my suppliers." } } },
                "faq": { "title": "Frequently Asked Questions", "subtitle": "Most frequently asked questions forum", "btn_more": "See more", "items": { "what_is": { "question": "What is GlassGo?", "answer": "GlassGo is a comprehensive logistics management platform specialized in the safe transportation of glass and fragile materials. We offer real-time tracking, route optimization and total supply chain control to guarantee perfect deliveries." }, "cost": { "question": "How much does it cost to use the software?", "answer": "We offer flexible plans adapted to different business needs. From $299/month for small businesses to personalized enterprise plans. Includes 30-day free trial and complete technical support. Contact our team for a personalized quote." }, "accessible": { "question": "Is it accessible for small businesses?", "answer": "Absolutely. We have designed GlassGo thinking about companies of all sizes. Our basic plan is perfect for small businesses looking to professionalize their logistics without major investments. It includes all essential functions and scalability as you grow." }, "support": { "question": "What type of technical support do you offer?", "answer": "We provide 24/7 technical support through live chat, email and phone. Additionally, we offer free initial training, complete documentation, monthly webinars and a dedicated account manager for enterprise plans." }, "security": { "question": "How do you guarantee data security?", "answer": "We use military-grade SSL encryption, cloud servers with ISO 27001 certification, automatic backups every 6 hours and comply with all data protection regulations. Your information is completely secure with us." } } },
                "tutorials": { "title": "Tutorials", "subtitle": "Discover how our platform protects your shipments and optimizes your logistics", "items": { "dashboard": { "title": "Dashboard", "description": "Visualize the status of your shipments, active routes and real-time statistics from an intuitive panel." }, "tracking": { "title": "Tracking", "description": "Follow the exact location of your trucks with total traceability and transparency." }, "reports": { "title": "Reports", "description": "Generate detailed reports, graphics and statistics to optimize your operations." }, "history": { "title": "History", "description": "Review the complete history of deliveries and previous data for analysis and references." } } },
                "contact": { "title": "Contact Us", "description": "Write to us and together we will boost your business towards transport without breakage and with total control", "form": { "subtitle": "Your opinion and your needs are the starting point to create effective solutions.", "name": "Name", "email": "Email", "phone": "Phone", "message": "Message", "submit": "Send", "sending": "Sending...", "success": "Message sent successfully!<br>We will contact you soon.", "errors": { "name": "Name must have at least 2 characters", "email": "Please enter a valid email", "phone": "Please enter a valid phone number", "message": "Message must have at least 10 characters", "general": "Error sending message. Please try again.", "title": "Please correct the following errors:" } } },
                "footer": { "description": "These are the characteristics that differentiate our solution: accessible technology, focused on your business and ready to boost your growth.", "social_title": "Social Networks", "services_title": "Services", "legal_title": "Legal Information", "legal": { "contact": "Contact", "terms": "Terms and Conditions" }, "services": { "about": "About Us", "benefits": "Benefits", "testimonials": "Testimonials", "faq": "FAQ", "tutorials": "Tutorials", "contact": "Contact", "download": "Download" }, "copyright": "All rights reserved © 2025 GlassGo" },
                "terms": { "title": "Terms and Conditions", "section1": { "title": "1. Acceptance of Terms", "content": "By accessing and using GlassGo services, you accept these terms and conditions in their entirety. It is important that you read this document carefully before using our services." }, "section2": { "title": "2. Service Description", "content": "GlassGo provides software for glass transport management and traceability. Our services include, but are not limited to:", "list": [ "Real-time shipment tracking", "Impact and vibration monitoring", "Route optimization", "Report generation and analysis", "Fleet and driver management" ] }, "section3": { "title": "3. User Responsibilities", "content": "The user agrees to:", "list": [ "Provide accurate and updated information", "Maintain the confidentiality of their credentials", "Use the service ethically and legally", "Report any unauthorized use of their account", "Comply with all applicable laws and regulations" ] }, "section4": { "title": "4. Privacy and Data Protection", "content": "We are committed to protecting your privacy and personal data. Our practices include:", "list": [ "Sensitive data encryption", "Secure storage on protected servers", "Restricted access to authorized personnel", "Compliance with data protection regulations" ] }, "section5": { "title": "5. Limitation of Liability", "content": "GlassGo will not be responsible for:", "list": [ "Losses not directly attributable to our non-compliance", "Indirect or consequential damages", "Temporary service interruptions for maintenance", "Force majeure or circumstances beyond our control" ] }, "section6": { "title": "6. Fees and Payments", "content": "Details about pricing, billing and payments are specified in our subscription plans. We reserve the right to modify rates with prior notice." }, "section7": { "title": "7. Cancellation and Termination", "content": "You can cancel your subscription at any time. We reserve the right to suspend or terminate service in case of violation of these terms." }, "legal_notice": "The information provided in this document is for informational purposes only and does not constitute legal advice. For any specific consultation, we recommend consulting with a legal professional.", "accept_button": "Accept Terms and Conditions" },
                "language": { "current": "English", "selector_label": "Select language" }
            }
        };
        
        // Initialize the system
        this.init();
    }
    
    /**
     * Initialize the i18n system
     */
    async init() {
        try {
            console.log('🚀 Initializing i18n system...');
            
            // Detect user's preferred language
            this.currentLanguage = this.detectLanguage();
            console.log('Detected language:', this.currentLanguage);
            
            // Load translations for current language
            await this.loadTranslations(this.currentLanguage);
            
            // Apply translations immediately
            this.applyTranslations();
            
            // Setup language selector
            this.setupLanguageSelector();
            
            // Update page meta information
            this.updatePageMeta();
            
            console.log(`🌐 i18n initialized with language: ${this.currentLanguage}`);
            
            // Also apply after a small delay to catch any late-loaded elements
            setTimeout(() => {
                this.applyTranslations();
                console.log('🔄 Applied translations after delay');
            }, 500);
            
        } catch (error) {
            console.error('❌ Error initializing i18n:', error);
            // Fallback to default language
            await this.loadTranslations(this.fallbackLanguage);
            this.applyTranslations();
        }
    }
    
    /**
     * Detect user's preferred language
     * Priority: localStorage > browser language > fallback
     */
    detectLanguage() {
        // Check if language is stored in localStorage
        const savedLanguage = localStorage.getItem('glassgo_language');
        if (savedLanguage && this.supportedLanguages.includes(savedLanguage)) {
            return savedLanguage;
        }
        
        // Check browser language
        const browserLanguage = navigator.language.slice(0, 2);
        if (this.supportedLanguages.includes(browserLanguage)) {
            return browserLanguage;
        }
        
        // Fallback to default
        return this.fallbackLanguage;
    }
    
    /**
     * Load translations from JSON file with intelligent fallback
     */
    async loadTranslations(language) {
        try {
            console.log(`📁 Attempting to load JSON translations for ${language}...`);
            
            // Try to fetch from JSON file first (will work with server)
            const response = await fetch(`assets/i18n/${language}.json`);
            
            if (response.ok) {
                this.translations = await response.json();
                this.currentLanguage = language;
                localStorage.setItem('glassgo_language', language);
                console.log(`✅ JSON translations loaded successfully for ${language}`);
                return;
            } else {
                throw new Error(`HTTP ${response.status}: Failed to load JSON`);
            }
            
        } catch (error) {
            console.log(`⚠️ JSON loading failed: ${error.message}`);
            console.log(`🔄 Using inline fallback translations for ${language}...`);
            
            // Use inline translations as fallback
            if (this.inlineTranslations && this.inlineTranslations[language]) {
                this.translations = this.inlineTranslations[language];
                this.currentLanguage = language;
                localStorage.setItem('glassgo_language', language);
                console.log(`✅ Inline fallback translations loaded for ${language}`);
            } else {
                // Final fallback to default language
                if (language !== this.fallbackLanguage) {
                    console.log(`🔄 Falling back to ${this.fallbackLanguage}`);
                    await this.loadTranslations(this.fallbackLanguage);
                } else {
                    console.error('❌ No translations available, using keys as fallback');
                    this.translations = this.inlineTranslations[this.fallbackLanguage] || {};
                }
            }
        }
    }
    
    /**
     * Get translation for a key using dot notation
     * @param {string} key - Translation key (e.g., 'navigation.home')
     * @param {object} params - Parameters for interpolation
     */
    t(key, params = {}) {
        try {
            // Split the key by dots and traverse the object
            const keys = key.split('.');
            let translation = this.translations;
            
            for (const k of keys) {
                if (translation && typeof translation === 'object' && k in translation) {
                    translation = translation[k];
                } else {
                    console.warn(`⚠️ Translation not found for key: ${key}`);
                    return key; // Return the key if translation not found
                }
            }
            
            // If translation is found and is a string, apply interpolation
            if (typeof translation === 'string') {
                return this.interpolate(translation, params);
            }
            
            console.warn(`⚠️ Translation for key ${key} is not a string:`, translation);
            return key;
            
        } catch (error) {
            console.error(`❌ Error getting translation for key ${key}:`, error);
            return key;
        }
    }
    
    /**
     * Interpolate parameters into translation string
     * @param {string} text - Text with placeholders like {{name}}
     * @param {object} params - Parameters to interpolate
     */
    interpolate(text, params) {
        if (!params || Object.keys(params).length === 0) {
            return text;
        }
        
        return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
            return params[key] !== undefined ? params[key] : match;
        });
    }
    
    /**
     * Apply translations to all elements with data-i18n attribute
     */
    applyTranslations() {
        console.log('🔄 Applying translations...');
        console.log('Current translations:', this.translations);
        
        // Check if translations are loaded
        if (!this.translations || Object.keys(this.translations).length === 0) {
            console.warn('⚠️ No translations loaded, skipping application');
            return;
        }
        
        // Show loading indicator
        this.showLoadingIndicator();
        
        // Add transition class for smooth changes
        document.body.classList.add('i18n-transitioning');
        
        // Translate elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        console.log(`Found ${elements.length} elements to translate`);
        
        let translatedCount = 0;
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (!key) return;
            
            const translation = this.t(key);
            
            // Only update if translation is different from key (meaning it was found)
            if (translation !== key) {
                console.log(`Translating ${key} -> ${translation}`);
                
                // Handle different types of content
                if (element.hasAttribute('data-i18n-html')) {
                    element.innerHTML = translation;
                } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else if (element.hasAttribute('aria-label')) {
                    element.setAttribute('aria-label', translation);
                } else {
                    element.textContent = translation;
                }
                translatedCount++;
            } else {
                console.warn(`⚠️ Translation not found for key: ${key}`);
            }
        });
        
        // Update language selector
        this.updateLanguageSelector();
        
        // Update page meta
        this.updatePageMeta();
        
        // Remove transition class and hide loading indicator
        setTimeout(() => {
            document.body.classList.remove('i18n-transitioning');
            this.hideLoadingIndicator();
            console.log(`✅ Translations applied successfully (${translatedCount}/${elements.length} elements)`);
        }, 200);
    }
    
    /**
     * Setup the language selector functionality
     */
    setupLanguageSelector() {
        const languageSelector = document.querySelector('.language-selector');
        if (!languageSelector) return;
        
        // Create dropdown structure
        this.createLanguageDropdown(languageSelector);
        
        // Add click event to toggle dropdown
        languageSelector.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.toggleLanguageDropdown();
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!languageSelector.contains(e.target)) {
                this.closeLanguageDropdown();
            }
        });
        
        // Handle keyboard navigation
        languageSelector.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleLanguageDropdown();
            } else if (e.key === 'Escape') {
                this.closeLanguageDropdown();
            }
        });
    }
    
    /**
     * Create language dropdown HTML
     */
    createLanguageDropdown(container) {
        const currentLangInfo = this.getLanguageInfo(this.currentLanguage);
        
        container.innerHTML = `
            <div class="language-current">
                <span class="language-flag">${currentLangInfo.flag}</span>
                <span class="language-text">${currentLangInfo.name}</span>
                <span class="dropdown-arrow">▼</span>
            </div>
            <div class="language-dropdown">
                ${this.supportedLanguages.map(lang => {
                    const info = this.getLanguageInfo(lang);
                    const isActive = lang === this.currentLanguage;
                    return `
                        <div class="language-option ${isActive ? 'active' : ''}" 
                             data-language="${lang}"
                             role="button"
                             tabindex="0"
                             aria-label="${this.t('language.selector_label')}: ${info.name}">
                            <span class="language-flag">${info.flag}</span>
                            <span class="language-text">${info.name}</span>
                            ${isActive ? '<span class="checkmark">✓</span>' : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        `;
        
        // Add event listeners to language options
        const options = container.querySelectorAll('.language-option');
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const language = option.getAttribute('data-language');
                this.changeLanguage(language);
            });
            
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const language = option.getAttribute('data-language');
                    this.changeLanguage(language);
                }
            });
        });
    }
    
    /**
     * Get language information (name and flag)
     */
    getLanguageInfo(language) {
        const languageMap = {
            'es': { name: 'Español', flag: '🇪🇸' },
            'en': { name: 'English', flag: '🇺🇸' }
        };
        
        return languageMap[language] || languageMap['es'];
    }
    
    /**
     * Toggle language dropdown visibility
     */
    toggleLanguageDropdown() {
        const selector = document.querySelector('.language-selector');
        if (selector) {
            selector.classList.toggle('active');
        }
    }
    
    /**
     * Close language dropdown
     */
    closeLanguageDropdown() {
        const selector = document.querySelector('.language-selector');
        if (selector) {
            selector.classList.remove('active');
        }
    }
    
    /**
     * Update language selector display
     */
    updateLanguageSelector() {
        const languageSelector = document.querySelector('.language-selector');
        if (languageSelector) {
            this.createLanguageDropdown(languageSelector);
        }
    }
    
    /**
     * Change language
     */
    async changeLanguage(language) {
        if (language === this.currentLanguage || !this.supportedLanguages.includes(language)) {
            this.closeLanguageDropdown();
            return;
        }

        try {
            // Close dropdown
            this.closeLanguageDropdown();
            
            // Show loading
            this.showLoadingIndicator();
            
            // Load new translations
            await this.loadTranslations(language);
            
            // Apply translations
            this.applyTranslations();
            
            // Emit custom event for other components
            const event = new CustomEvent('languageChanged', {
                detail: { 
                    oldLanguage: this.currentLanguage,
                    newLanguage: language 
                }
            });
            document.dispatchEvent(event);
            
            console.log(`🌐 Language changed to: ${language}`);
            
        } catch (error) {
            console.error(`❌ Error changing language to ${language}:`, error);
            this.hideLoadingIndicator();
        }
    }    /**
     * Update page meta information
     */
    updatePageMeta() {
        // Update page title
        const title = this.t('meta.title');
        if (title && title !== 'meta.title') {
            document.title = title;
        }
        
        // Update html lang attribute
        document.documentElement.lang = this.currentLanguage;
        
        // Update meta description if exists
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            // You can add description translations to your JSON files
            const description = this.t('meta.description');
            if (description && description !== 'meta.description') {
                metaDescription.setAttribute('content', description);
            }
        }
    }
    
    /**
     * Show loading indicator
     */
    showLoadingIndicator() {
        let loader = document.querySelector('.i18n-loader');
        if (!loader) {
            loader = document.createElement('div');
            loader.className = 'i18n-loader';
            loader.innerHTML = `
                <div class="i18n-loader-content">
                    <div class="i18n-spinner"></div>
                    <span class="i18n-loader-text">Loading...</span>
                </div>
            `;
            document.body.appendChild(loader);
        }
        loader.style.display = 'flex';
    }
    
    /**
     * Hide loading indicator
     */
    hideLoadingIndicator() {
        const loader = document.querySelector('.i18n-loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }
    
    /**
     * Get current language
     */
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    /**
     * Get supported languages
     */
    getSupportedLanguages() {
        return this.supportedLanguages;
    }
    
    /**
     * Check if a language is supported
     */
    isLanguageSupported(language) {
        return this.supportedLanguages.includes(language);
    }
}

// Initialize i18n system when DOM is loaded
let i18n;

// Initialize immediately when script loads
console.log('🚀 i18n script loaded, initializing system...');
i18n = new I18n();

// Make it globally available immediately
window.i18n = i18n;

// Also initialize on DOM loaded as backup
document.addEventListener('DOMContentLoaded', () => {
    if (!window.i18n || !window.i18n.translations || Object.keys(window.i18n.translations).length === 0) {
        console.log('� Re-initializing i18n system on DOM ready...');
        i18n = new I18n();
        window.i18n = i18n;
    } else {
        // Just apply translations if system is already loaded
        console.log('🔄 i18n system already loaded, applying translations...');
        i18n.applyTranslations();
    }
    
    // Debug information
    console.log('🌐 i18n system ready!');
    console.log('Current language:', i18n.getCurrentLanguage());
    console.log('Supported languages:', i18n.getSupportedLanguages());
});

// Export for global access
window.i18n = i18n;