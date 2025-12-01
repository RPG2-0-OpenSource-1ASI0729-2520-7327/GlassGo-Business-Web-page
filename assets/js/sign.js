/**
 * GlassGo Authentication JavaScript
 * @description Handles authentication functionality for Sign In, Sign Up, and Forgot Password
 * @version 2.0.0 - Cleaned version
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        initPasswordToggle();
        initForms();
        initModal();
    });

    /**
     * Initialize password visibility toggle
     */
    function initPasswordToggle() {
        const toggleButtons = document.querySelectorAll('.password-toggle');

        toggleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const passwordInput = this.parentElement.querySelector('input[type="password"], input[type="text"]');

                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    this.innerHTML = `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                            <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                    `;
                } else {
                    passwordInput.type = 'password';
                    this.innerHTML = `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    `;
                }
            });
        });
    }

    /**
     * Initialize form handlers
     */
    function initForms() {
        const signinForm = document.getElementById('signinForm');
        if (signinForm) {
            signinForm.addEventListener('submit', handleSignIn);
        }

        const signupForm = document.getElementById('signupForm');
        if (signupForm) {
            signupForm.addEventListener('submit', handleSignUp);
        }

        const forgotForm = document.getElementById('forgotForm');
        if (forgotForm) {
            forgotForm.addEventListener('submit', handleForgotPassword);
        }
    }

    /**
     * Handle Sign In form submission
     */
    function handleSignIn(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const userType = document.querySelector('input[name="userType"]:checked').value;

        if (!username || !password) {
            showNotification('Por favor completa todos los campos', 'error');
            return;
        }

        console.log('Sign In:', { username, userType });

        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Signing in...';
        submitButton.disabled = true;

        setTimeout(() => {
            showNotification('¡Inicio de sesión exitoso!', 'success');
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            localStorage.setItem('glassgo_username', username);
            localStorage.setItem('glassgo_usertype', userType);

            setTimeout(() => {
                if (userType === 'business') {
                    window.location.href = 'dueno-negocio/home.html';
                } else {
                    window.location.href = 'index.html';
                }
            }, 1500);
        }, 1000);
    }

    /**
     * Handle Sign Up form submission
     */
    function handleSignUp(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const userType = document.querySelector('input[name="userType"]:checked').value;

        if (!username || !email || !password) {
            showNotification('Por favor completa todos los campos', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Por favor ingresa un email válido', 'error');
            return;
        }

        if (password.length < 6) {
            showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
            return;
        }

        console.log('Sign Up:', { username, email, userType });

        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Registering...';
        submitButton.disabled = true;

        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            showSuccessModal();
        }, 1000);
    }

    /**
     * Handle Forgot Password form submission
     */
    function handleForgotPassword(e) {
        e.preventDefault();

        const emailInput = document.getElementById('forgotEmail') || document.getElementById('email');
        const email = emailInput ? emailInput.value : '';

        if (!email) {
            showNotification('Por favor ingresa tu email', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Por favor ingresa un email válido', 'error');
            return;
        }

        console.log('Forgot Password:', { email });

        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        setTimeout(() => {
            showNotification('¡Correo de recuperación enviado! Revisa tu bandeja de entrada.', 'success');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            e.target.reset();

            const forgotPasswordModal = document.getElementById('forgotPasswordModal');
            if (forgotPasswordModal) {
                setTimeout(() => {
                    forgotPasswordModal.classList.remove('active');
                }, 1500);
            }
        }, 1000);
    }

    /**
     * Show success modal
     */
    function showSuccessModal() {
        const modal = document.getElementById('successModal');
        if (modal) {
            modal.classList.add('active');
        }
    }

    /**
     * Initialize modal handlers
     */
    function initModal() {
        const modal = document.getElementById('successModal');
        const closeButton = document.getElementById('closeModal');

        if (closeButton) {
            closeButton.addEventListener('click', function() {
                if (modal) {
                    modal.classList.remove('active');
                }
                setTimeout(() => {
                    window.location.href = 'sign-in.html';
                }, 300);
            });
        }

        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    setTimeout(() => {
                        window.location.href = 'sign-in.html';
                    }, 300);
                }
            });
        }

        const forgotPasswordLink = document.getElementById('forgotPasswordLink');
        const forgotPasswordModal = document.getElementById('forgotPasswordModal');
        const closeForgotModal = document.getElementById('closeForgotModal');

        if (forgotPasswordLink && forgotPasswordModal) {
            forgotPasswordLink.addEventListener('click', function(e) {
                e.preventDefault();
                forgotPasswordModal.classList.add('active');
            });
        }

        if (closeForgotModal && forgotPasswordModal) {
            closeForgotModal.addEventListener('click', function() {
                forgotPasswordModal.classList.remove('active');
            });
        }

        if (forgotPasswordModal) {
            forgotPasswordModal.addEventListener('click', function(e) {
                if (e.target === forgotPasswordModal) {
                    forgotPasswordModal.classList.remove('active');
                }
            });
        }
    }

    /**
     * Validate email format
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Show notification message
     */
    function showNotification(message, type = 'info') {
        const existingNotification = document.querySelector('.auth-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `auth-notification ${type}`;
        notification.textContent = message;

        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '16px 24px',
            borderRadius: '12px',
            backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
            color: '#ffffff',
            fontWeight: '600',
            fontSize: '15px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
            zIndex: '10000',
            animation: 'slideInRight 0.3s ease',
            maxWidth: '400px'
        });

        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;

        if (!document.querySelector('style[data-notification-styles]')) {
            style.setAttribute('data-notification-styles', '');
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }

    /**
     * Social login handlers
     */
    document.addEventListener('click', function(e) {
        if (e.target.closest('.google-btn')) {
            e.preventDefault();
            showNotification('Inicio de sesión con Google - Próximamente', 'info');
            console.log('Google login clicked');
        }

        if (e.target.closest('.facebook-btn')) {
            e.preventDefault();
            showNotification('Inicio de sesión con Facebook - Próximamente', 'info');
            console.log('Facebook login clicked');
        }

        if (e.target.closest('.apple-btn')) {
            e.preventDefault();
            showNotification('Inicio de sesión con Apple - Próximamente', 'info');
            console.log('Apple login clicked');
        }
    });

})();

