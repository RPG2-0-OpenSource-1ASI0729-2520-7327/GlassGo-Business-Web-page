// Navigation and Page Functionality for GlassGo

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href').substring(1);
            
            // Special handling for inicio - scroll to top
            if (targetId === 'inicio') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active navigation link on scroll
    const sections = document.querySelectorAll('section, main');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Hero buttons functionality
    const btnPrimary = document.querySelector('.btn-primary');
    const btnSecondary = document.querySelector('.btn-secondary');
    
    if (btnPrimary) {
        btnPrimary.addEventListener('click', function() {
            // Scroll to pricing section (when implemented)
            console.log('Ver planes y precios clicked');
            // You can implement this later when you add pricing section
        });
    }
    
    if (btnSecondary) {
        btnSecondary.addEventListener('click', function() {
            // Open demo modal or redirect to demo page
            console.log('Obtener demostración clicked');
            // You can implement this later
        });
    }
    
    // Login and Register buttons
    const btnLogin = document.querySelector('.btn-login');
    const btnRegister = document.querySelector('.btn-register');
    
    if (btnLogin) {
        btnLogin.addEventListener('click', function() {
            console.log('Iniciar sesión clicked');
            // Implement login functionality
        });
    }
    
    if (btnRegister) {
        btnRegister.addEventListener('click', function() {
            console.log('Registrarse clicked');
            // Implement register functionality
        });
    }
    
    // Card hover effects (additional animations)
    const cards = document.querySelectorAll('.nosotros-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Header background change on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
        }
    });
    
    // Language selector functionality
    const languageSelector = document.querySelector('.language-selector');
    
    if (languageSelector) {
        languageSelector.addEventListener('click', function() {
            console.log('Language selector clicked');
            // Implement language switching functionality
        });
    }
    
    // Mobile menu toggle (for future responsive implementation)
    const createMobileMenu = () => {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger-menu';
        hamburger.innerHTML = '☰';
        hamburger.style.display = 'none';
        
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-active');
        });
        
        // Insert hamburger before nav-menu
        navMenu.parentNode.insertBefore(hamburger, navMenu);
        
        // Show/hide hamburger based on screen size
        const checkScreenSize = () => {
            if (window.innerWidth <= 968) {
                hamburger.style.display = 'block';
                navMenu.style.display = navMenu.classList.contains('mobile-active') ? 'flex' : 'none';
            } else {
                hamburger.style.display = 'none';
                navMenu.style.display = 'flex';
                navMenu.classList.remove('mobile-active');
            }
        };
        
        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();
    };
    
    // Initialize mobile menu
    createMobileMenu();
    
    // Testimonios Carousel Functionality - Enhanced Version
    const testimoniosCarousel = () => {
        const carousel = document.querySelector('.testimonios-carousel');
        const cards = document.querySelectorAll('.testimonio-card');
        const indicators = document.querySelectorAll('.indicator');
        const prevBtn = document.querySelector('.carousel-nav.prev');
        const nextBtn = document.querySelector('.carousel-nav.next');
        
        if (!carousel || cards.length === 0) return;
        
        let currentSlide = 0;
        let autoPlayInterval;
        let isTransitioning = false;
        const slideDelay = 5000; // 5 segundos
        
        // Función para actualizar el carousel con efectos avanzados
        const updateCarousel = (direction = 'next') => {
            if (isTransitioning) return;
            isTransitioning = true;
            
            // Resetear todas las clases
            cards.forEach((card, index) => {
                card.classList.remove('active', 'prev', 'next');
                
                // Aplicar clases según la posición relativa al slide actual
                if (index === currentSlide) {
                    card.classList.add('active');
                } else if (index === (currentSlide - 1 + cards.length) % cards.length) {
                    card.classList.add('prev');
                } else if (index === (currentSlide + 1) % cards.length) {
                    card.classList.add('next');
                }
            });
            
            // Actualizar indicadores con animación
            indicators.forEach((indicator, index) => {
                indicator.classList.remove('active');
                if (index === currentSlide) {
                    // Pequeño delay para crear efecto de onda
                    setTimeout(() => {
                        indicator.classList.add('active');
                    }, 100);
                }
            });
            
            // Resetear transición después de la animación
            setTimeout(() => {
                isTransitioning = false;
            }, 800);
        };
        
        // Función para el siguiente slide
        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % cards.length;
            updateCarousel('next');
            restartAutoPlay();
        };
        
        // Función para el slide anterior
        const prevSlide = () => {
            currentSlide = (currentSlide - 1 + cards.length) % cards.length;
            updateCarousel('prev');
            restartAutoPlay();
        };
        
        // Función para ir a un slide específico
        const goToSlide = (index) => {
            if (index === currentSlide || isTransitioning) return;
            currentSlide = index;
            updateCarousel();
            restartAutoPlay();
        };
        
        // Función para iniciar el auto-play
        const startAutoPlay = () => {
            // Limpiar intervalos existentes
            clearInterval(autoPlayInterval);
            
            // Iniciar auto-play
            autoPlayInterval = setTimeout(() => {
                nextSlide();
                startAutoPlay(); // Recursivo para continuar
            }, slideDelay);
        };
        
        // Función para reiniciar el auto-play
        const restartAutoPlay = () => {
            carousel.classList.remove('paused');
            startAutoPlay();
        };
        
        // Función para pausar el auto-play
        const pauseAutoPlay = () => {
            clearInterval(autoPlayInterval);
            carousel.classList.add('paused');
        };
        
        // Event listeners para los botones
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                prevSlide();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                nextSlide();
            });
        }
        
        // Event listeners para los indicadores
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', (e) => {
                e.preventDefault();
                goToSlide(index);
            });
        });
        
        // Pausar en hover y reanudar al salir
        carousel.addEventListener('mouseenter', pauseAutoPlay);
        carousel.addEventListener('mouseleave', restartAutoPlay);
        
        // Soporte para touch/swipe en móviles
        let touchStartX = 0;
        let touchEndX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            pauseAutoPlay();
        });
        
        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            restartAutoPlay();
        });
        
        const handleSwipe = () => {
            const swipeThreshold = 50;
            const swipeDistance = touchStartX - touchEndX;
            
            if (Math.abs(swipeDistance) > swipeThreshold) {
                if (swipeDistance > 0) {
                    nextSlide(); // Swipe left = next
                } else {
                    prevSlide(); // Swipe right = prev
                }
            }
        };
        
        // Soporte para teclado
        document.addEventListener('keydown', (e) => {
            if (!carousel.matches(':hover')) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    prevSlide();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    nextSlide();
                    break;
                case ' ': // Spacebar
                    e.preventDefault();
                    if (carousel.classList.contains('paused')) {
                        restartAutoPlay();
                    } else {
                        pauseAutoPlay();
                    }
                    break;
            }
        });
        
        // Pausar cuando la pestaña no está visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                pauseAutoPlay();
            } else {
                restartAutoPlay();
            }
        });
        
        // Inicializar
        updateCarousel();
        startAutoPlay();
        
        // Agregar indicador visual para mostrar que se puede controlar con teclado
        carousel.setAttribute('tabindex', '0');
        carousel.setAttribute('aria-label', 'Carousel de testimonios. Use las flechas del teclado para navegar');
    };
    
    // Initialize testimonios carousel
    if (document.querySelector('.testimonios-carousel')) {
        testimoniosCarousel();
    }
    
    // FAQ Accordion Functionality
    const initFAQ = () => {
        const faqItems = document.querySelectorAll('.faq-item');
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach((question, index) => {
            question.addEventListener('click', () => {
                const faqItem = faqItems[index];
                const isActive = faqItem.classList.contains('active');
                
                // Cerrar todas las preguntas
                faqItems.forEach(item => {
                    item.classList.remove('active');
                    const questionBtn = item.querySelector('.faq-question');
                    questionBtn.setAttribute('aria-expanded', 'false');
                });
                
                // Si no estaba activa, abrir la seleccionada
                if (!isActive) {
                    faqItem.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                    
                    // Scroll suave hacia la pregunta si es necesario
                    setTimeout(() => {
                        const rect = faqItem.getBoundingClientRect();
                        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
                        
                        if (!isVisible) {
                            faqItem.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            });
                        }
                    }, 200);
                }
            });
            
            // Soporte para teclado
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
                
                // Navegación con flechas
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextQuestion = faqQuestions[index + 1];
                    if (nextQuestion) {
                        nextQuestion.focus();
                    }
                }
                
                if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevQuestion = faqQuestions[index - 1];
                    if (prevQuestion) {
                        prevQuestion.focus();
                    }
                }
            });
        });
        
        // Ver más button functionality
        const verMasBtn = document.querySelector('.btn-ver-mas');
        if (verMasBtn) {
            verMasBtn.addEventListener('click', () => {
                console.log('Ver más preguntas clicked');
                // Aquí puedes implementar la funcionalidad para mostrar más preguntas
                // Por ejemplo, cargar más preguntas dinámicamente o redirigir a una página completa de FAQ
            });
        }
    };
    
    // Initialize FAQ
    if (document.querySelector('.preguntas')) {
        initFAQ();
    }
    
    // Tutorial Cards Functionality
    const initTutorial = () => {
        const tutorialCards = document.querySelectorAll('.tutorial-card');
        
        // Agregar efectos de hover mejorados
        tutorialCards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // Intersection Observer para animaciones al scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observar las tarjetas de tutorial
        tutorialCards.forEach(card => {
            observer.observe(card);
        });
    };
    
    // Initialize Tutorial
    if (document.querySelector('.tutorial')) {
        initTutorial();
    }
    
    // Contact Form Functionality
    const initContactForm = () => {
        const contactForm = document.getElementById('contactForm');
        const submitBtn = document.querySelector('.btn-enviar');
        
        if (!contactForm) return;
        
        // Form validation
        const validateForm = (formData) => {
            const errors = [];
            
            if (!formData.get('nombre') || formData.get('nombre').trim().length < 2) {
                errors.push('El nombre debe tener al menos 2 caracteres');
            }
            
            const email = formData.get('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                errors.push('Por favor ingresa un email válido');
            }
            
            const numero = formData.get('numero');
            if (!numero || numero.trim().length < 10) {
                errors.push('Por favor ingresa un número de teléfono válido');
            }
            
            if (!formData.get('mensaje') || formData.get('mensaje').trim().length < 10) {
                errors.push('El mensaje debe tener al menos 10 caracteres');
            }
            
            return errors;
        };
        
        // Show success message
        const showSuccessMessage = () => {
            const successDiv = document.createElement('div');
            successDiv.className = 'success-message';
            successDiv.innerHTML = `
                <div style="background: #10b981; color: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; text-align: center;">
                    <strong>¡Mensaje enviado con éxito!</strong><br>
                    Te contactaremos pronto.
                </div>
            `;
            
            contactForm.parentNode.insertBefore(successDiv, contactForm);
            
            setTimeout(() => {
                successDiv.remove();
            }, 5000);
        };
        
        // Show error messages
        const showErrorMessages = (errors) => {
            // Remove existing error messages
            const existingErrors = document.querySelectorAll('.error-message');
            existingErrors.forEach(error => error.remove());
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerHTML = `
                <div style="background: #ef4444; color: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                    <strong>Por favor corrige los siguientes errores:</strong>
                    <ul style="margin: 0.5rem 0 0 1rem;">
                        ${errors.map(error => `<li>${error}</li>`).join('')}
                    </ul>
                </div>
            `;
            
            contactForm.parentNode.insertBefore(errorDiv, contactForm);
            
            setTimeout(() => {
                errorDiv.remove();
            }, 8000);
        };
        
        // Handle form submission
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const errors = validateForm(formData);
            
            if (errors.length > 0) {
                showErrorMessages(errors);
                return;
            }
            
            // Change button state
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            try {
                // Simulate API call (replace with actual endpoint)
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Success
                showSuccessMessage();
                contactForm.reset();
                
                console.log('Form submitted:', Object.fromEntries(formData));
                
            } catch (error) {
                showErrorMessages(['Error al enviar el mensaje. Por favor intenta de nuevo.']);
                console.error('Form submission error:', error);
            } finally {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }
        });
        
        // Enhanced input effects
        const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentNode.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', () => {
                input.parentNode.style.transform = 'scale(1)';
            });
        });
        
        // Social media links functionality
        const socialLinks = document.querySelectorAll('.red-social');
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = link.classList[1]; // facebook, instagram, etc.
                console.log(`${platform} clicked`);
                
                // Add click effect
                link.style.transform = 'translateY(-3px) scale(0.95)';
                setTimeout(() => {
                    link.style.transform = 'translateY(-3px) scale(1.05)';
                }, 150);
            });
        });
    };
    
    // Initialize Contact Form
    if (document.querySelector('.contacto')) {
        initContactForm();
    }
    
    // Footer Functionality
    const initFooter = () => {
        // Footer social media links
        const footerSocials = document.querySelectorAll('.footer-social');
        footerSocials.forEach(social => {
            social.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = social.classList[1]; // facebook, instagram, etc.
                console.log(`Footer ${platform} clicked`);
                
                // Add click effect
                social.style.transform = 'translateY(-2px) scale(0.95)';
                setTimeout(() => {
                    social.style.transform = 'translateY(-2px) scale(1)';
                }, 150);
            });
        });
        
        // Footer navigation links
        const footerLinks = document.querySelectorAll('.footer-link');
        footerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // If it's an anchor link to a section
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);
                    
                    if (targetSection) {
                        // Smooth scroll to section
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        
                        // Update active navigation link in header
                        const navLinks = document.querySelectorAll('.nav-link');
                        navLinks.forEach(navLink => navLink.classList.remove('active'));
                        
                        const correspondingNavLink = document.querySelector(`.nav-link[href="${href}"]`);
                        if (correspondingNavLink) {
                            correspondingNavLink.classList.add('active');
                        }
                        
                        console.log(`Footer navigation to ${targetId}`);
                    }
                } else {
                    // External link or download
                    console.log(`Footer link clicked: ${href}`);
                }
            });
        });
        
        // Add scroll-to-top functionality (optional)
        const createScrollToTop = () => {
            const scrollButton = document.createElement('button');
            scrollButton.className = 'scroll-to-top';
            scrollButton.innerHTML = '↑';
            scrollButton.style.cssText = `
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                width: 50px;
                height: 50px;
                border: none;
                border-radius: 50%;
                background: #2b6cb0;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(43, 108, 176, 0.3);
            `;
            
            scrollButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Show/hide based on scroll position
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    scrollButton.style.opacity = '1';
                    scrollButton.style.visibility = 'visible';
                } else {
                    scrollButton.style.opacity = '0';
                    scrollButton.style.visibility = 'hidden';
                }
            });
            
            document.body.appendChild(scrollButton);
        };
        
        // Initialize scroll to top button
        createScrollToTop();
    };
    
    // Initialize Footer
    if (document.querySelector('.footer')) {
        initFooter();
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards for animation
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Utility functions
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

// Initialize Terms Modal
const initTermsModal = () => {
    const modal = document.getElementById('termsModal');
    const btn = document.getElementById('termsBtn');
    const closeBtn = document.querySelector('.terms-close');
    const acceptBtn = document.getElementById('acceptTermsBtn');

    // Open modal
    btn.addEventListener('click', () => {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // Close modal
    const closeModal = () => {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);

    // Handle terms acceptance
    acceptBtn.addEventListener('click', () => {
        // Aquí puedes agregar la lógica para guardar la aceptación
        localStorage.setItem('termsAccepted', 'true');
        localStorage.setItem('termsAcceptedDate', new Date().toISOString());
        
        // Mostrar mensaje de confirmación
        const confirmationMessage = document.createElement('div');
        confirmationMessage.className = 'terms-confirmation';
        confirmationMessage.innerHTML = `
            <div class="terms-confirmation-content">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#10b981">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span>Términos y condiciones aceptados</span>
            </div>
        `;
        document.body.appendChild(confirmationMessage);

        // Cerrar el modal
        closeModal();

        // Remover el mensaje de confirmación después de 3 segundos
        setTimeout(() => {
            confirmationMessage.style.opacity = '0';
            setTimeout(() => confirmationMessage.remove(), 300);
        }, 3000);
    });

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Add styles for confirmation message
    const style = document.createElement('style');
    style.textContent = `
        .terms-confirmation {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            opacity: 1;
            transition: opacity 0.3s ease;
        }
        .terms-confirmation-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #10b981;
            font-weight: 500;
        }
    `;
    document.head.appendChild(style);
};

// Initialize Terms Modal
if (document.querySelector('.terms-modal')) {
    initTermsModal();
}

// Initialize Contact Modal
const initContactModal = () => {
    const contactModal = document.getElementById('contactModal');
    const contactBtn = document.getElementById('contactBtn');
    const contactClose = document.getElementById('contactClose');
    const contactForm = document.getElementById('contactModalForm');

    if (!contactModal || !contactBtn || !contactClose) return;

    // Open contact modal
    contactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        contactModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // Close contact modal
    contactClose.addEventListener('click', function() {
        contactModal.classList.remove('show');
        document.body.style.overflow = '';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === contactModal) {
            contactModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactModal.classList.contains('show')) {
            contactModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // Handle contact form submission in modal
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            console.log('Contact form submitted:', Object.fromEntries(formData));
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'modal-success-message';
            successMessage.innerHTML = `
                <div style="background: #10b981; color: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; text-align: center;">
                    <strong>¡Mensaje enviado con éxito!</strong><br>
                    Te contactaremos pronto.
                </div>
            `;
            
            contactForm.parentNode.insertBefore(successMessage, contactForm);
            contactForm.reset();
            
            setTimeout(() => {
                successMessage.remove();
                contactModal.classList.remove('show');
                document.body.style.overflow = '';
            }, 3000);
        });
    }

    // Handle social links in contact modal
    const modalSocialLinks = contactModal.querySelectorAll('.modal-social');
    modalSocialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = link.classList[1];
            console.log(`Contact modal ${platform} clicked`);
            
            // Add click effect
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 150);
        });
    });
};

if (document.getElementById('contactModal')) {
    initContactModal();
}

// Export functions for global use
window.GlassGoUtils = {
    scrollToTop,
    scrollToSection
};