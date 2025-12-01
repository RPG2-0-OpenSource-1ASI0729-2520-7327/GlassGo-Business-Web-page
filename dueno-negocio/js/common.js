/**
 * GlassGo - Business Owner Dashboard
 * Common JavaScript - Navigation and Utilities
 */

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initLanguageSelector();
    initUserMenu();
});

/**
 * Initialize navigation active states
 */
function initNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href && href.includes(currentPage)) {
            item.classList.add('active');
        }

        // Remove active from others
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

/**
 * Initialize language selector
 */
function initLanguageSelector() {
    const languageSelector = document.querySelector('.sidebar-language');

    if (languageSelector) {
        // Set initial language text
        const currentLang = localStorage.getItem('glassgo_language') || 'es';
        const langText = languageSelector.querySelector('.language-text');
        if (langText) {
            langText.textContent = currentLang === 'es' ? 'Español' : 'English';
        }

        languageSelector.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Toggle between Spanish and English
            const currentLang = localStorage.getItem('glassgo_language') || 'es';
            const newLang = currentLang === 'es' ? 'en' : 'es';

            localStorage.setItem('glassgo_language', newLang);

            // Update text immediately
            const langText = this.querySelector('.language-text');
            if (langText) {
                langText.textContent = newLang === 'es' ? 'Español' : 'English';
            }

            // Apply translations using i18n if available
            if (window.i18n) {
                window.i18n.loadTranslations(newLang).then(() => {
                    window.i18n.applyTranslations();
                    showNotification(
                        newLang === 'es' ? 'Idioma cambiado a Español' : 'Language changed to English',
                        'success'
                    );
                });
            } else {
                showNotification(
                    newLang === 'es' ? 'Idioma cambiado a Español' : 'Language changed to English',
                    'success'
                );
            }
        });
    }
}

/**
 * Initialize user menu
 */
function initUserMenu() {
    const userAvatar = document.querySelector('.icon-button.user-avatar');

    if (userAvatar) {
        userAvatar.addEventListener('click', function() {
            // Show user menu or redirect to profile
            console.log('User menu clicked');
        });
    }
}

/**
 * Show notification message
 */
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.dashboard-notification');
    if (existing) {
        existing.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `dashboard-notification ${type}`;
    notification.textContent = message;

    // Styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '12px',
        backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
        color: '#ffffff',
        fontWeight: '600',
        fontSize: '14px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease',
        maxWidth: '400px'
    });

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Format currency
 */
function formatCurrency(amount) {
    return `S/.${parseFloat(amount).toFixed(2)}`;
}

/**
 * Format date
 */
function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString('es-PE', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

/**
 * Logout function
 */
function logout() {
    if (confirm('¿Estás seguro que deseas cerrar sesión?')) {
        localStorage.removeItem('glassgo_user');
        localStorage.removeItem('glassgo_token');
        window.location.href = '../sign-in.html';
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

