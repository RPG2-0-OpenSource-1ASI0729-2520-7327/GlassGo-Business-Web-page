/**
 * Inventory Page JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initInventoryTable();
    initTrackingLinks();
});

function initInventoryTable() {
    const tableBody = document.getElementById('inventoryTableBody');

    if (tableBody) {
        // Datos de ejemplo del inventario
        const inventoryData = [
            {
                id: 1,
                location: 'Miraflores',
                product: 'Smirnuff',
                quantity: '10 cajas',
                state: 'In progress',
                tracking: '6091228592056',
                priceUnit: 120.00,
                priceTotal: 1200.00
            },
            {
                id: 2,
                location: 'Arequipa',
                product: 'Jugger',
                quantity: '9 cajas',
                state: 'Not started',
                tracking: '6091228593421',
                priceUnit: 150.00,
                priceTotal: 1350.00
            },
            {
                id: 3,
                location: 'Trujillo',
                product: 'Vodka',
                quantity: '12 cajas',
                state: 'Complete',
                tracking: '6091228532423',
                priceUnit: 80.00,
                priceTotal: 960.00
            },
            {
                id: 4,
                location: 'Chiclayo',
                product: 'Cerveza',
                quantity: '19 cajas',
                state: 'Not started',
                tracking: '8492105310153',
                priceUnit: 75.00,
                priceTotal: 1425.00
            }
        ];

        // La tabla ya está renderizada en el HTML, pero puedes agregar funcionalidad aquí
        console.log('Inventory loaded:', inventoryData.length, 'items');
    }
}

function initTrackingLinks() {
    const trackingNumbers = document.querySelectorAll('.tracking-number');

    trackingNumbers.forEach(element => {
        element.style.cursor = 'pointer';
        element.addEventListener('click', function() {
            const trackingNumber = this.textContent;
            // Redirigir a la página de tracking con el número seleccionado
            window.location.href = `tracking.html?tracking=${trackingNumber}`;
        });
    });
}

// Función para filtrar la tabla
function filterInventoryTable(searchTerm) {
    const rows = document.querySelectorAll('#inventoryTableBody tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(searchTerm.toLowerCase())) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Función para exportar inventario (opcional)
function exportInventory() {
    const table = document.querySelector('.inventory-table');
    const rows = table.querySelectorAll('tr');
    let csvContent = '';

    rows.forEach(row => {
        const cols = row.querySelectorAll('td, th');
        const rowData = Array.from(cols).map(col => col.textContent.trim());
        csvContent += rowData.join(',') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inventory.csv';
    a.click();
}

