/**
 * Create Order Page JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initProductSearch();
    initQuantityControls();
    initRemoveButtons();
    initAddProduct();
    calculateTotals();
});

function initProductSearch() {
    const searchInput = document.querySelector('.order-header .search-box input');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            console.log('Searching for:', this.value);
            // Aquí puedes implementar la búsqueda de productos
        });
    }
}

function initQuantityControls() {
    const quantityInputs = document.querySelectorAll('.order-table input[type="number"]');

    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            calculateTotals();
        });
    });
}

function initRemoveButtons() {
    const removeButtons = document.querySelectorAll('.btn-remove');

    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            row.remove();
            calculateTotals();
            showNotification('Product removed', 'info');
        });
    });
}

function initAddProduct() {
    const addButton = document.querySelector('.btn-primary');

    if (addButton && addButton.textContent.includes('Add new product')) {
        addButton.addEventListener('click', function() {
            showNotification('Add product functionality coming soon', 'info');
        });
    }
}

function calculateTotals() {
    const rows = document.querySelectorAll('.order-table tbody tr');
    let subtotal = 0;

    rows.forEach(row => {
        const quantity = row.querySelector('input[type="number"]').value;
        const priceText = row.querySelectorAll('td')[2].textContent;
        const price = parseFloat(priceText.replace('S/. ', '').replace(',', ''));
        const total = quantity * price;

        row.querySelectorAll('td')[3].textContent = `S/. ${total.toFixed(2)}`;
        subtotal += total;
    });

    const shipping = 20;
    const total = subtotal + shipping;

    // Update summary
    const summaryRows = document.querySelectorAll('.summary-row');
    if (summaryRows.length >= 3) {
        summaryRows[0].querySelector('span:last-child').textContent = `S/. ${subtotal.toFixed(2)}`;
        summaryRows[1].querySelector('span:last-child').textContent = `S/. ${shipping.toFixed(2)}`;
        summaryRows[2].querySelector('span:last-child').textContent = `S/. ${total.toFixed(2)}`;
    }
}

function showNotification(message, type = 'info') {
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

