/**
 * Claims Page JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initClaimForm();
    initSocialIcons();
});

function initClaimForm() {
    const form = document.getElementById('claimForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Obtener valores del formulario
            const formData = {
                name: document.getElementById('claimName').value,
                email: document.getElementById('claimEmail').value,
                number: document.getElementById('claimNumber').value,
                message: document.getElementById('claimMessage').value
            };

            // Validar formulario
            if (validateClaimForm(formData)) {
                submitClaim(formData);
            }
        });

        // Agregar validación en tiempo real
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    }
}

function validateClaimForm(formData) {
    let isValid = true;
    const errors = [];

    // Validar nombre
    if (formData.name.trim().length < 2) {
        errors.push('Please enter a valid name');
        isValid = false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        errors.push('Please enter a valid email address');
        isValid = false;
    }

    // Validar número
    const phoneRegex = /^\d{9,}$/;
    if (!phoneRegex.test(formData.number.replace(/\s/g, ''))) {
        errors.push('Please enter a valid phone number');
        isValid = false;
    }

    // Validar mensaje
    if (formData.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
        isValid = false;
    }

    if (!isValid) {
        showNotification(errors.join('\n'), 'error');
    }

    return isValid;
}

function validateField(field) {
    let isValid = true;

    if (field.hasAttribute('required') && field.value.trim() === '') {
        isValid = false;
    }

    if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(field.value);
    }

    if (field.type === 'tel') {
        const phoneRegex = /^\d{9,}$/;
        isValid = phoneRegex.test(field.value.replace(/\s/g, ''));
    }

    // Aplicar estilos de validación
    if (isValid) {
        field.style.borderColor = '#28A745';
    } else {
        field.style.borderColor = '#DC3545';
    }

    return isValid;
}

function submitClaim(formData) {
    // Mostrar indicador de carga
    const submitButton = document.querySelector('.btn-submit');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    // Simular envío del formulario (aquí se conectaría con el backend)
    setTimeout(() => {
        // Simular respuesta exitosa
        console.log('Claim submitted:', formData);

        // Mostrar mensaje de éxito
        showSuccessMessage();

        // Limpiar formulario
        document.getElementById('claimForm').reset();

        // Restaurar botón
        submitButton.textContent = originalText;
        submitButton.disabled = false;

        // Mostrar notificación
        showNotification('Your claim has been submitted successfully. We will contact you soon.', 'success');

        // Opcional: enviar email o guardar en base de datos
        sendClaimEmail(formData);
    }, 1500);
}

function showSuccessMessage() {
    const form = document.getElementById('claimForm');
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message show';
    successMessage.innerHTML = `
        <strong>¡Success!</strong> Your claim has been received. We will respond within 24-48 hours.
    `;

    form.parentElement.insertBefore(successMessage, form);

    setTimeout(() => {
        successMessage.classList.remove('show');
        setTimeout(() => successMessage.remove(), 300);
    }, 5000);
}

function sendClaimEmail(formData) {
    // Aquí se integraría con un servicio de email como EmailJS, SendGrid, etc.
    console.log('Sending email notification for claim:', formData);

    // Ejemplo con EmailJS (requiere configuración previa):
    /*
    email.send('service_id', 'template_id', {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.number,
        message: formData.message
    }).then(
        function(response) {
            console.log('Email sent successfully', response);
        },
        function(error) {
            console.error('Email sending failed', error);
        }
    );
    */
}

function initSocialIcons() {
    const socialIcons = document.querySelectorAll('.social-icon');

    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();

            const platform = this.classList[1]; // facebook, instagram, etc.

            // URL de contacto (debes reemplazar con tus URL reales)
            const contactUrls = {
                facebook: 'https://facebook.com/glassgo',
                instagram: 'https://instagram.com/glassgo',
                twitter: 'https://twitter.com/glassgo',
                whatsapp: 'https://wa.me/51999999999',
                gmail: 'mailto:support@glassgo.com',
                outlook: 'mailto:support@glassgo.com'
            };

            if (contactUrls[platform]) {
                window.open(contactUrls[platform], '_blank');
            }

            console.log('Social icon clicked:', platform);
        });
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#28A745' : type === 'error' ? '#DC3545' : '#0066FF'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
        white-space: pre-line;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Agregar estilos de animación si no existen
if (!document.querySelector('#notification-animations')) {
    const style = document.createElement('style');
    style.id = 'notification-animations';
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
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
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

