/**
 * History Page JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initHistorySearch();
    initSummaryButtons();
    initModal();
});

function initHistorySearch() {
    const searchInput = document.getElementById('searchHistory');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const rows = document.querySelectorAll('#historyTableBody tr');

            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
}

function initSummaryButtons() {
    const summaryButtons = document.querySelectorAll('.btn-summary');

    summaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const orderData = extractOrderData(row);
            showSummaryModal(orderData);
        });
    });
}

function extractOrderData(row) {
    const cells = row.querySelectorAll('td');
    return {
        number: cells[0].textContent,
        location: cells[1].textContent,
        product: cells[2].textContent,
        quantity: cells[3].textContent,
        state: cells[4].textContent.trim(),
        tracking: cells[5].textContent,
        priceTotal: cells[6].textContent
    };
}

function showSummaryModal(orderData) {
    const modal = document.getElementById('summaryModal');
    const summaryDetails = document.getElementById('summaryDetails');

    if (!modal || !summaryDetails) return;

    // Crear contenido del resumen
    summaryDetails.innerHTML = `
        <div style="display: grid; gap: 16px;">
            <div style="display: grid; grid-template-columns: 150px 1fr; gap: 12px; padding: 12px; background: #F5F7FA; border-radius: 8px;">
                <strong style="color: #003049;">Order Number:</strong>
                <span>${orderData.number}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 150px 1fr; gap: 12px; padding: 12px; background: #F5F7FA; border-radius: 8px;">
                <strong style="color: #003049;">Location:</strong>
                <span>${orderData.location}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 150px 1fr; gap: 12px; padding: 12px; background: #F5F7FA; border-radius: 8px;">
                <strong style="color: #003049;">Product:</strong>
                <span>${orderData.product}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 150px 1fr; gap: 12px; padding: 12px; background: #F5F7FA; border-radius: 8px;">
                <strong style="color: #003049;">Quantity:</strong>
                <span>${orderData.quantity}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 150px 1fr; gap: 12px; padding: 12px; background: #F5F7FA; border-radius: 8px;">
                <strong style="color: #003049;">Status:</strong>
                <span style="color: #28A745; font-weight: 600;">${orderData.state}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 150px 1fr; gap: 12px; padding: 12px; background: #F5F7FA; border-radius: 8px;">
                <strong style="color: #003049;">Tracking Number:</strong>
                <span style="background: #003049; color: white; padding: 4px 12px; border-radius: 16px; display: inline-block; width: fit-content;">${orderData.tracking}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 150px 1fr; gap: 12px; padding: 12px; background: #F5F7FA; border-radius: 8px;">
                <strong style="color: #003049;">Total Price:</strong>
                <span style="font-size: 20px; font-weight: 700; color: #0066FF;">${orderData.priceTotal}</span>
            </div>
            
            <div style="margin-top: 16px; padding-top: 16px; border-top: 2px solid #E8EDF2;">
                <h3 style="color: #003049; margin-bottom: 12px;">Delivery Information</h3>
                <p style="color: #778DA9;">Order delivered successfully on the expected date.</p>
                <p style="color: #778DA9; margin-top: 8px;">Customer signature received and documented.</p>
            </div>
            
            <div style="display: flex; gap: 12px; margin-top: 16px;">
                <button onclick="downloadSummary('${orderData.tracking}')" style="flex: 1; padding: 12px; background: #0066FF; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    Download PDF
                </button>
                <button onclick="printSummary()" style="flex: 1; padding: 12px; background: #003049; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    Print Summary
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function initModal() {
    const modal = document.getElementById('summaryModal');
    const closeBtn = modal?.querySelector('.close');

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}

function downloadSummary(trackingNumber) {
    console.log('Downloading summary for:', trackingNumber);
    showNotification('Summary downloaded successfully', 'success');
}

function printSummary() {
    window.print();
}


// Función para exportar historial completo
function exportHistory() {
    const table = document.querySelector('.history-table');
    const rows = table.querySelectorAll('tr');
    let csvContent = '';

    rows.forEach(row => {
        const cols = row.querySelectorAll('td, th');
        const rowData = Array.from(cols).map(col => {
            // Limpiar el contenido de badges y botones
            const clone = col.cloneNode(true);
            const badges = clone.querySelectorAll('.status-badge, .tracking-number');
            badges.forEach(badge => {
                badge.replaceWith(badge.textContent);
            });
            const buttons = clone.querySelectorAll('button');
            buttons.forEach(btn => btn.remove());
            return clone.textContent.trim();
        });
        csvContent += rowData.join(',') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'history.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

