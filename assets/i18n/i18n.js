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
                "benefits": { "title": "Beneficios", "subtitle": "Toma el control de tu logística con tecnología que protege tu mercancía, mejora la eficiencia y garantiza transparencia en cada envío", "transport": { "title": "Empresas De Transporte De Camiones", "items": { "tracking": "Seguimiento en tiempo real de cada vehículo", "alerts": "Alertas inmediatas por vibración o impacto en la carga", "optimization": "Optimización de rutas para reducir tiempos y costos", "reduction": "Reducción de pérdidas por roturas en tránsito", "reports": "Reportes automáticos de desempeño de la flota" } }, "distributors": { "title": "Distribuidores De Licores / Dueños De Negocios", "items": { "safe_delivery": "Entregas más seguras y con menor índice de roturas", "transparency": "Transparencia en cada envío con trazabilidad digital", "clear_reports": "Acceso a reportes claros sobre cada entrega", "inventory_control": "Control de inventario en tránsito", "cost_reduction": "Reducción de costos logísticos por pérdidas o devoluciones" } } },
                "testimonials": { "title": "Testimonios", "nav": { "prev": "Testimonio anterior", "next": "Siguiente testimonio" }, "items": { "maria": { "name": "María T.", "role": "Distribuidora", "text": "Lo de trazabilidad completa nos dio tranquilidad. Nuestros clientes reciben sus pedidos íntegros y confiamos plenamente en cada entrego." }, "carlos": { "name": "Carlos M.", "role": "Gerente de transportes", "text": "Antes perdíamos demasiado tiempo y dinero por rutas ineficientes y roturas en el camino. Con esta plataforma ahora controlamos todo en tiempo real y nuestros costos se redujeron notablemente." }, "jorge": { "name": "Jorge R.", "role": "Dueño de negocio", "text": "Ahora sé exactamente dónde está mi mercancía y cuándo llega. He reducido pérdidas y gano más confianza con mis proveedores." } } },
                "faq": { "title": "Preguntas Frecuentes", "subtitle": "Foro de preguntas con más frecuencia", "btn_more": "Ver más", "items": { "what_is": { "question": "¿Qué es GlassGo?", "answer": "GlassGo es una plataforma integral de gestión logística especializada en el transporte seguro de vidrio y materiales frágiles. Ofrecemos seguimiento en tiempo real, optimización de rutas y control total de la cadena de suministro para garantizar entregas perfectas." }, "cost": { "question": "¿Cuánto cuesta usar el software?", "answer": "Ofrecemos planes flexibles adaptados a diferentes necesidades empresariales. Desde $299/mes para pequeñas empresas hasta planes enterprise personalizados. Incluye prueba gratuita de 30 días y soporte técnico completo. Contacta con nuestro equipo para una cotización personalizada." }, "accessible": { "question": "¿Es accesible para pequeñas empresas?", "answer": "Absolutamente. Hemos diseñado GlassGo pensando en empresas de todos los tamaños. Nuestro plan básico es perfecto para pequeñas empresas que buscan profesionalizar su logística sin grandes inversiones. Incluye todas las funciones esenciales y escalabilidad conforme creces." }, "support": { "question": "¿Qué tipo de soporte técnico ofrecen?", "answer": "Proporcionamos soporte técnico 24/7 a través de chat en vivo, email y teléfono. Además, ofrecemos capacitación inicial gratuita, documentación completa, webinars mensuales y un gerente de cuenta dedicado para planes enterprise." }, "security": { "question": "¿Cómo garantizan la seguridad de los datos?", "answer": "Utilizamos encriptación SSL de grado militar, servidores en la nube con certificación ISO 27001, copias de seguridad automáticas cada 6 horas y cumplimos con todas las normativas de protección de datos. Tu información está completamente segura con nosotros." } } },
                "tutorials": { "title": "Tutoriales", "subtitle": "Descubre cómo nuestra plataforma protege tus envíos y optimiza tu logística", "items": { "dashboard": { "title": "Dashboard", "description": "Visualiza el estado de tus envíos, rutas activas y estadísticas en tiempo real desde un panel intuitivo." }, "tracking": { "title": "Tracking", "description": "Sigue la ubicación exacta de tus camiones con total trazabilidad y transparencia." }, "reports": { "title": "Reportes", "description": "Genera reportes detallados, gráficos y estadísticas para optimizar tus operaciones." }, "history": { "title": "Historial", "description": "Revisa el historial completo de entregas y datos anteriores para análisis y referencias." } } },
                "contact": { "title": "Contáctenos", "description": "Escríbenos y juntos impulsaremos tu negocio hacia un transporte sin roturas y con total control", "form": { "subtitle": "Tu opinión y tus necesidades son el punto de partida para crear soluciones efectivas.", "name": "Nombre", "email": "Email", "phone": "Número", "message": "Mensaje", "submit": "Enviar", "sending": "Enviando...", "success": "¡Mensaje enviado con éxito!<br>Te contactaremos pronto.", "errors": { "name": "El nombre debe tener al menos 2 caracteres", "email": "Por favor ingresa un email válido", "phone": "Por favor ingresa un número de teléfono válido", "message": "El mensaje debe tener al menos 10 caracteres", "general": "Error al enviar el mensaje. Por favor intenta de nuevo.", "title": "Por favor corrige los siguientes errores:" } } },
                "footer": { "description": "Estas son las características que diferencian nuestra solución: tecnología accesible, enfocada en tu negocio y lista para impulsar tu crecimiento.", "social_title": "Redes Sociales", "services_title": "Servicios", "legal_title": "Información Legal", "legal": { "contact": "Contacto", "terms": "Términos y Condiciones" }, "services": { "about": "Nosotros", "benefits": "Beneficios", "testimonials": "Testimonios", "faq": "Preguntas", "tutorials": "Tutorial", "contact": "Contacto", "download": "Descargar" }, "copyright": "Todos los derechos reservados © 2025 GlassGo" },
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
                "benefits": { "title": "Benefits", "subtitle": "Take control of your logistics with technology that protects your merchandise, improves efficiency and guarantees transparency in every shipment", "transport": { "title": "Truck Transportation Companies", "items": { "tracking": "Real-time tracking of every vehicle", "alerts": "Immediate alerts for vibration or impact on cargo", "optimization": "Route optimization to reduce time and costs", "reduction": "Reduction of losses due to breakage in transit", "reports": "Automatic fleet performance reports" } }, "distributors": { "title": "Liquor Distributors / Business Owners", "items": { "safe_delivery": "Safer deliveries with lower breakage rates", "transparency": "Transparency in every shipment with digital traceability", "clear_reports": "Access to clear reports on every delivery", "inventory_control": "In-transit inventory control", "cost_reduction": "Reduction of logistics costs due to losses or returns" } } },
                "testimonials": { "title": "Testimonials", "nav": { "prev": "Previous testimonial", "next": "Next testimonial" }, "items": { "maria": { "name": "María T.", "role": "Distributor", "text": "Complete traceability gave us peace of mind. Our customers receive their orders intact and we fully trust every delivery." }, "carlos": { "name": "Carlos M.", "role": "Transport Manager", "text": "Before, we lost too much time and money due to inefficient routes and breakage on the road. With this platform we now control everything in real time and our costs were significantly reduced." }, "jorge": { "name": "Jorge R.", "role": "Business Owner", "text": "Now I know exactly where my merchandise is and when it arrives. I have reduced losses and gain more confidence with my suppliers." } } },
                "faq": { "title": "Frequently Asked Questions", "subtitle": "Most frequently asked questions forum", "btn_more": "See more", "items": { "what_is": { "question": "What is GlassGo?", "answer": "GlassGo is a comprehensive logistics management platform specialized in the safe transportation of glass and fragile materials. We offer real-time tracking, route optimization and total supply chain control to guarantee perfect deliveries." }, "cost": { "question": "How much does it cost to use the software?", "answer": "We offer flexible plans adapted to different business needs. From $299/month for small businesses to personalized enterprise plans. Includes 30-day free trial and complete technical support. Contact our team for a personalized quote." }, "accessible": { "question": "Is it accessible for small businesses?", "answer": "Absolutely. We have designed GlassGo thinking about companies of all sizes. Our basic plan is perfect for small businesses looking to professionalize their logistics without major investments. It includes all essential functions and scalability as you grow." }, "support": { "question": "What type of technical support do you offer?", "answer": "We provide 24/7 technical support through live chat, email and phone. Additionally, we offer free initial training, complete documentation, monthly webinars and a dedicated account manager for enterprise plans." }, "security": { "question": "How do you guarantee data security?", "answer": "We use military-grade SSL encryption, cloud servers with ISO 27001 certification, automatic backups every 6 hours and comply with all data protection regulations. Your information is completely secure with us." } } },
                "tutorials": { "title": "Tutorials", "subtitle": "Discover how our platform protects your shipments and optimizes your logistics", "items": { "dashboard": { "title": "Dashboard", "description": "Visualize the status of your shipments, active routes and real-time statistics from an intuitive panel." }, "tracking": { "title": "Tracking", "description": "Follow the exact location of your trucks with total traceability and transparency." }, "reports": { "title": "Reports", "description": "Generate detailed reports, graphics and statistics to optimize your operations." }, "history": { "title": "History", "description": "Review the complete history of deliveries and previous data for analysis and references." } } },
                "contact": { "title": "Contact Us", "description": "Write to us and together we will boost your business towards transport without breakage and with total control", "form": { "subtitle": "Your opinion and your needs are the starting point to create effective solutions.", "name": "Name", "email": "Email", "phone": "Phone", "message": "Message", "submit": "Send", "sending": "Sending...", "success": "Message sent successfully!<br>We will contact you soon.", "errors": { "name": "Name must have at least 2 characters", "email": "Please enter a valid email", "phone": "Please enter a valid phone number", "message": "Message must have at least 10 characters", "general": "Error sending message. Please try again.", "title": "Please correct the following errors:" } } },
                "footer": { "description": "These are the characteristics that differentiate our solution: accessible technology, focused on your business and ready to boost your growth.", "social_title": "Social Networks", "services_title": "Services", "legal_title": "Legal Information", "legal": { "contact": "Contact", "terms": "Terms and Conditions" }, "services": { "about": "About Us", "benefits": "Benefits", "testimonials": "Testimonials", "faq": "FAQ", "tutorials": "Tutorials", "contact": "Contact", "download": "Download" }, "copyright": "All rights reserved © 2025 GlassGo" },
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
            
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                // Apply translations to the page
                this.applyTranslations();
                
                // Setup language selector
                this.setupLanguageSelector();
                
                // Update page meta information
                this.updatePageMeta();
                
                console.log(`🌐 i18n initialized with language: ${this.currentLanguage}`);
            }, 100);
            
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
        
        // Show loading indicator
        this.showLoadingIndicator();
        
        // Add transition class for smooth changes
        document.body.classList.add('i18n-transitioning');
        
        setTimeout(() => {
            // Translate elements with data-i18n attribute
            const elements = document.querySelectorAll('[data-i18n]');
            console.log(`Found ${elements.length} elements to translate`);
            
            elements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                const translation = this.t(key);
                
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
            });
            
            // Update language selector
            this.updateLanguageSelector();
            
            // Update page meta
            this.updatePageMeta();
            
            // Remove transition class
            setTimeout(() => {
                document.body.classList.remove('i18n-transitioning');
                this.hideLoadingIndicator();
                console.log('✅ Translations applied successfully');
            }, 300);
            
        }, 100);
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

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM loaded, initializing i18n system...');
    i18n = new I18n();
    
    // Make it globally available
    window.i18n = i18n;
    
    // Debug information
    console.log('🌐 i18n system ready!');
    console.log('Current language:', i18n.getCurrentLanguage());
    console.log('Supported languages:', i18n.getSupportedLanguages());
});

// Export for global access
window.i18n = i18n;