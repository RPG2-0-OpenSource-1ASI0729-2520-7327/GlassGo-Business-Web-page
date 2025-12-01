/**
 * Tracking Page JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initTrackingSearch();
    initTrackingSelection();
});

function initTrackingSearch() {
    const searchInput = document.getElementById('searchTracking');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const trackingItems = document.querySelectorAll('.tracking-item');

            trackingItems.forEach(item => {
                const trackingNumber = item.dataset.tracking;
                const trackingText = item.textContent.toLowerCase();

                if (trackingNumber.includes(searchTerm) || trackingText.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
}

function initTrackingSelection() {
    const checkboxes = document.querySelectorAll('.tracking-item input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const trackingNumber = this.closest('.tracking-item').dataset.tracking;

            if (this.checked) {
                console.log('Selected tracking:', trackingNumber);
                showNotification(`Tracking ${trackingNumber} selected`, 'success');
                // Aquí puedes actualizar el mapa con la ruta seleccionada
                updateMapRoute(trackingNumber);
            }
        });
    });
}

function updateMapRoute(trackingNumber) {
    // Simulación de actualización del mapa
    console.log('Updating map for tracking:', trackingNumber);

    // Aquí puedes integrar con una API de mapas real como Google Maps o Mapbox
    const routeInfo = document.querySelector('.route-distance');
    if (routeInfo) {
        const distances = {
            '6091228592056': '16 km',
            '6091222839502': '192 km',
            '6091228512345': '178 km',
            '6091223452986': '23 km'
        };

        routeInfo.textContent = distances[trackingNumber] || '16 km';
    }
}

// Función de notificación (debe estar también en common.js)
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
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
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

