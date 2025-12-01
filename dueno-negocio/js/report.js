/**
 * Report Page JavaScript
 */

// Variables globales
let rowCounter = 4;
let salesChart = null;

document.addEventListener('DOMContentLoaded', function() {
    initChart();
    initMetricCards();
    initDataForm();
    initSalesChart();
});

function initDataForm() {
    const form = document.getElementById('dataEntryForm');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        addNewRow();
    });
}

function addNewRow() {
    const productName = document.getElementById('productName').value;
    const zone = document.getElementById('zone').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);

    // Calcular total
    const total = quantity * price;

    // Crear nueva fila
    const tbody = document.getElementById('dataTableBody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${rowCounter}</td>
        <td>${productName}</td>
        <td>${zone}</td>
        <td>${quantity}</td>
        <td>S/ ${price.toFixed(2)}</td>
        <td>S/ ${total.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
        <td>
            <button class="btn-action delete" onclick="deleteRow(this)">
                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="16" height="16">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
            </button>
        </td>
    `;

    tbody.appendChild(newRow);
    rowCounter++;

    // Limpiar formulario
    document.getElementById('dataEntryForm').reset();

    // Mostrar animación
    newRow.style.backgroundColor = '#E8F5E9';
    setTimeout(() => {
        newRow.style.backgroundColor = '';
    }, 1000);

    // Actualizar gráfico
    updateSalesChart();
}

function deleteRow(button) {
    if (confirm('¿Estás seguro de eliminar este registro?')) {
        const row = button.closest('tr');
        row.style.backgroundColor = '#FFEBEE';
        setTimeout(() => {
            row.remove();
            updateRowNumbers();
            updateSalesChart();
        }, 300);
    }
}

function updateRowNumbers() {
    const tbody = document.getElementById('dataTableBody');
    const rows = tbody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        rows[i].cells[0].textContent = i + 1;
    }
}

function initSalesChart() {
    const canvas = document.getElementById('salesChart');

    if (!canvas) return;

    // Verificar si Chart.js está disponible
    if (typeof Chart === 'undefined') {
        console.log('Chart.js not loaded for sales chart');
        canvas.style.display = 'none';
        return;
    }

    const ctx = canvas.getContext('2d');

    // Obtener datos de la tabla
    const data = getSalesDataFromTable();

    salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.products,
            datasets: [{
                label: 'Total de Ventas (S/)',
                data: data.totals,
                backgroundColor: [
                    '#0066FF',
                    '#DC3545',
                    '#28A745',
                    '#FFC107',
                    '#17A2B8',
                    '#6610F2',
                    '#E83E8C',
                    '#FD7E14'
                ],
                borderRadius: 8,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                title: {
                    display: false
                },
                legend: {
                    display: true,
                    position: 'top',
                    align: 'end',
                    labels: {
                        boxWidth: 20,
                        padding: 15,
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Total: S/ ' + context.parsed.y.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Total de Ventas (S/)',
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    },
                    grid: {
                        display: true,
                        color: '#E8EDF2'
                    },
                    ticks: {
                        callback: function(value) {
                            return 'S/ ' + value.toLocaleString('es-PE');
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Productos',
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function getSalesDataFromTable() {
    const tbody = document.getElementById('dataTableBody');
    const rows = tbody.getElementsByTagName('tr');

    const products = [];
    const totals = [];

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].cells;
        const productName = cells[1].textContent;
        const totalText = cells[5].textContent.replace('S/ ', '').replace(',', '');
        const total = parseFloat(totalText);

        products.push(productName);
        totals.push(total);
    }

    return { products, totals };
}

function updateSalesChart() {
    if (!salesChart) return;

    const data = getSalesDataFromTable();

    salesChart.data.labels = data.products;
    salesChart.data.datasets[0].data = data.totals;

    // Actualizar colores si hay más productos
    const colors = [
        '#0066FF', '#DC3545', '#28A745', '#FFC107',
        '#17A2B8', '#6610F2', '#E83E8C', '#FD7E14'
    ];

    salesChart.data.datasets[0].backgroundColor = data.products.map((_, i) => colors[i % colors.length]);

    salesChart.update();
}

function initChart() {
    const canvas = document.getElementById('popularLiquorsChart');

    if (!canvas) return;

    // Verificar si Chart.js está disponible
    if (typeof Chart === 'undefined') {
        console.log('Chart.js not loaded, rendering static chart representation');
        renderStaticChart(canvas);
        return;
    }

    const ctx = canvas.getContext('2d');

    const chartData = {
        labels: ['Smirnuff', 'Juger', 'Pisco', 'Cerveza', 'Vodka'],
        datasets: [
            {
                label: 'July Population',
                data: [25, 35, 48, 28, 38],
                backgroundColor: '#0066FF',
                borderRadius: 4
            },
            {
                label: 'August Population',
                data: [55, 30, 65, 58, 32],
                backgroundColor: '#DC3545',
                borderRadius: 4
            }
        ]
    };

    const config = {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            indexAxis: 'y',
            plugins: {
                title: {
                    display: false
                },
                legend: {
                    display: true,
                    position: 'top',
                    align: 'end',
                    labels: {
                        boxWidth: 20,
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Total Population',
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        display: true
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Licores',
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

function renderStaticChart(canvas) {
    // Renderizar una representación estática del gráfico si Chart.js no está disponible
    canvas.style.minHeight = '400px';
    canvas.style.background = '#F5F7FA';
    canvas.style.display = 'flex';
    canvas.style.alignItems = 'center';
    canvas.style.justifyContent = 'center';
    canvas.style.borderRadius = '8px';

    const message = document.createElement('div');
    message.textContent = 'Chart will be rendered here (Chart.js library needed)';
    message.style.color = '#778DA9';
    message.style.textAlign = 'center';
    message.style.padding = '20px';

    canvas.parentElement.insertBefore(message, canvas);
    canvas.style.display = 'none';
}

function initMetricCards() {
    const metricCards = document.querySelectorAll('.metric-card');

    metricCards.forEach((card, index) => {
        // Animación de entrada escalonada
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);

        // Agregar interactividad
        card.addEventListener('click', function() {
            const metricValue = this.querySelector('.metric-value').textContent;
            const metricLabel = this.querySelector('.metric-label').textContent;
            console.log(`Clicked metric: ${metricLabel} - ${metricValue}`);
        });
    });
}

// Función para actualizar métricas (simulación)
function updateMetrics() {
    const metricValues = document.querySelectorAll('.metric-value');

    metricValues.forEach(element => {
        const currentValue = parseInt(element.textContent.replace(/,/g, ''));
        const change = Math.floor(Math.random() * 200) - 100; // Cambio aleatorio
        const newValue = currentValue + change;

        animateValue(element, currentValue, newValue, 1000);
    });
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// Función para exportar reporte
function exportReport() {
    console.log('Exporting report...');
    showNotification('Report exported successfully', 'success');
}


