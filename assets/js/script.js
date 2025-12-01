/**
 * GlassGo Landing Page - Main JavaScript
 * Handles navigation, animations, carousel, forms and interactive features
 * @author GlassGo Development Team
 * @version 2.0.0
 * @description Clean version - removed unused functions
 */

/**
 * Main initialization - Executed when DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollTracking();
    initHeroButtons();
    initCardEffects();
    initHeaderScroll();
    initMobileMenu();
    initTestimonialsCarousel();
    initFAQ();
    initTutorialSection();
    initTermsModal();
    initContactModal();
    initScrollAnimations();
    initFooter();
});

/**
 * Initialize smooth scrolling navigation
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');

            const targetId = this.getAttribute('href').substring(1);

            if (targetId === 'inicio') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/**
 * Initialize scroll tracking for active navigation highlighting
 */
function initScrollTracking() {
    const sections = document.querySelectorAll('section, main');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Initialize hero section buttons
 */
function initHeroButtons() {
    const primaryBtn = document.querySelector('.hero .btn-primary');
    const secondaryBtn = document.querySelector('.hero .btn-secondary');

    if (primaryBtn) {
        primaryBtn.addEventListener('click', function() {
            scrollToSection('faq');
        });
    }

    if (secondaryBtn) {
        secondaryBtn.addEventListener('click', function() {
            const contactModal = document.getElementById('contactModal');
            if (contactModal) {
                contactModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    }
}

/**
 * Initialize card hover effects
 */
function initCardEffects() {
    const cards = document.querySelectorAll('.about-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/**
 * Initialize header background change on scroll
 */
function initHeaderScroll() {
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
}

/**
 * Initialize mobile menu
 */
function initMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;

    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger-menu';
    hamburger.innerHTML = '☰';
    hamburger.style.display = 'none';

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('mobile-active');
    });

    navMenu.parentNode.insertBefore(hamburger, navMenu);

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
}

/**
 * Testimonials Carousel Functionality
 */
const testimonialsCarousel = () => {
    const carousel = document.querySelector('.testimonials-carousel');
    const cards = document.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-nav.prev');
    const nextBtn = document.querySelector('.carousel-nav.next');

    if (!carousel || cards.length === 0) return;

    let currentSlide = 0;
    let autoPlayInterval;
    let isTransitioning = false;
    const slideDelay = 5000;

    const updateCarousel = () => {
        if (isTransitioning) return;
        isTransitioning = true;

        cards.forEach((card, index) => {
            card.classList.remove('active', 'prev', 'next');

            if (index === currentSlide) {
                card.classList.add('active');
            } else if (index === (currentSlide - 1 + cards.length) % cards.length) {
                card.classList.add('prev');
            } else if (index === (currentSlide + 1) % cards.length) {
                card.classList.add('next');
            }
        });

        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentSlide) {
                setTimeout(() => indicator.classList.add('active'), 100);
            }
        });

        setTimeout(() => { isTransitioning = false; }, 800);
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % cards.length;
        updateCarousel();
        restartAutoPlay();
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + cards.length) % cards.length;
        updateCarousel();
        restartAutoPlay();
    };

    const goToSlide = (index) => {
        if (index === currentSlide || isTransitioning) return;
        currentSlide = index;
        updateCarousel();
        restartAutoPlay();
    };

    const startAutoPlay = () => {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setTimeout(() => {
            nextSlide();
            startAutoPlay();
        }, slideDelay);
    };

    const restartAutoPlay = () => {
        carousel.classList.remove('paused');
        startAutoPlay();
    };

    const pauseAutoPlay = () => {
        clearInterval(autoPlayInterval);
        carousel.classList.add('paused');
    };

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

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(index);
        });
    });

    carousel.addEventListener('mouseenter', pauseAutoPlay);
    carousel.addEventListener('mouseleave', restartAutoPlay);

    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        pauseAutoPlay();
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 50;
        const swipeDistance = touchStartX - touchEndX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        restartAutoPlay();
    });

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
            case ' ':
                e.preventDefault();
                if (carousel.classList.contains('paused')) {
                    restartAutoPlay();
                } else {
                    pauseAutoPlay();
                }
                break;
        }
    });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pauseAutoPlay();
        } else {
            restartAutoPlay();
        }
    });

    carousel.setAttribute('tabindex', '0');
    carousel.setAttribute('aria-label', 'Carousel de testimonios. Use las flechas del teclado para navegar');

    updateCarousel();
    startAutoPlay();
};

/**
 * Initialize Testimonials Carousel
 */
const initTestimonialsCarousel = () => {
    if (document.querySelector('.testimonials-carousel')) {
        testimonialsCarousel();
    }
};

/**
 * FAQ Accordion Functionality
 */
const initFAQ = () => {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach((question, index) => {
        question.addEventListener('click', () => {
            const faqItem = faqItems[index];
            const isActive = faqItem.classList.contains('active');

            faqItems.forEach(item => {
                item.classList.remove('active');
                const questionBtn = item.querySelector('.faq-question');
                questionBtn.setAttribute('aria-expanded', 'false');
            });

            if (!isActive) {
                faqItem.classList.add('active');
                question.setAttribute('aria-expanded', 'true');

                setTimeout(() => {
                    const rect = faqItem.getBoundingClientRect();
                    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

                    if (!isVisible) {
                        faqItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 200);
            }
        });

        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextQuestion = faqQuestions[index + 1];
                if (nextQuestion) nextQuestion.focus();
            }

            if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevQuestion = faqQuestions[index - 1];
                if (prevQuestion) prevQuestion.focus();
            }
        });
    });

    const verMasBtn = document.querySelector('.btn-ver-mas');
    if (verMasBtn) {
        verMasBtn.addEventListener('click', () => {
            console.log('Ver más questions clicked');
        });
    }
};

/**
 * Tutorial Section Functionality
 */
const initTutorialSection = () => {
    const tutorialCards = document.querySelectorAll('.tutorial-card');

    tutorialCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

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

    tutorialCards.forEach(card => observer.observe(card));
};

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
    const cards = document.querySelectorAll('.about-card');

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

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

/**
 * Utility function to scroll to section
 */
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

/**
 * Initialize Terms Modal
 */
const initTermsModal = () => {
    const modal = document.getElementById('termsModal');
    const btn = document.getElementById('termsBtn');
    const closeBtn = document.querySelector('.terms-close');
    const acceptBtn = document.getElementById('acceptTermsBtn');

    if (!modal || !btn) return;

    btn.addEventListener('click', () => {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('termsAccepted', 'true');
            localStorage.setItem('termsAcceptedDate', new Date().toISOString());

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

            closeModal();

            setTimeout(() => {
                confirmationMessage.style.opacity = '0';
                setTimeout(() => confirmationMessage.remove(), 300);
            }, 3000);
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

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

/**
 * Initialize Contact Modal
 */
const initContactModal = () => {
    const contactModal = document.getElementById('contactModal');
    const contactBtn = document.getElementById('contactBtn');
    const contactClose = document.getElementById('contactClose');
    const contactForm = document.getElementById('contactModalForm');

    if (!contactModal || !contactBtn) return;

    contactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        contactModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    if (contactClose) {
        contactClose.addEventListener('click', function() {
            contactModal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === contactModal) {
            contactModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactModal.classList.contains('show')) {
            contactModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            console.log('Contact form submitted:', Object.fromEntries(formData));

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
};

/**
 * Footer Functionality
 */
const initFooter = () => {
    const footerSocials = document.querySelectorAll('.footer-social');
    footerSocials.forEach(social => {
        social.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = social.classList[1];
            console.log(`Footer ${platform} clicked`);

            social.style.transform = 'translateY(-2px) scale(0.95)';
            setTimeout(() => {
                social.style.transform = 'translateY(-2px) scale(1)';
            }, 150);
        });
    });

    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href && href.startsWith('#')) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    const navLinks = document.querySelectorAll('.nav-link');
                    navLinks.forEach(navLink => navLink.classList.remove('active'));

                    const correspondingNavLink = document.querySelector(`.nav-link[href="${href}"]`);
                    if (correspondingNavLink) {
                        correspondingNavLink.classList.add('active');
                    }

                    console.log(`Footer navigation to ${targetId}`);
                }
            } else {
                console.log(`Footer link clicked: ${href}`);
            }
        });
    });

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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

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

    createScrollToTop();
};

