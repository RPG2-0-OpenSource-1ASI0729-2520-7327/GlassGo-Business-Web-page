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
    console.log('Updating map for tracking:', trackingNumber);

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


