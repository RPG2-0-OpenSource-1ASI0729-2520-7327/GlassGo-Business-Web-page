/**
 * Calendar Page JavaScript
 */

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Sept.', 'Octubre', 'Noviembre', 'Diciembre'
];

const dayNames = ['lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.', 'dom.'];

// Datos de ejemplo de eventos
const events = {
    '2030-9-1': [{ title: 'P. cervezas cristal', time: '18:00' }],
    '2030-9-10': [{ title: 'P. cervezas cusqueña', time: '12:00' }],
    '2030-9-24': [{ title: 'P. cervezas corona', time: '16:00' }],
    '2030-10-4': [{ title: 'P. cervezas cristal', time: '08:00' }]
};

document.addEventListener('DOMContentLoaded', function() {
    initCalendar();
    initCalendarControls();
    initViewToggle();
});

function initCalendar() {
    renderCalendar(currentMonth, currentYear);
}

function initCalendarControls() {
    const prevButton = document.getElementById('prevMonth');
    const nextButton = document.getElementById('nextMonth');

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar(currentMonth, currentYear);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar(currentMonth, currentYear);
        });
    }
}

function initViewToggle() {
    const viewButtons = document.querySelectorAll('.btn-view');

    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const view = this.dataset.view;
            console.log('Switching to view:', view);
            // Aquí puedes implementar diferentes vistas del calendario
        });
    });
}

function renderCalendar(month, year) {
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthElement = document.getElementById('currentMonth');

    if (!calendarGrid || !currentMonthElement) return;

    // Actualizar título del mes
    currentMonthElement.textContent = `${monthNames[month]} de ${year}`;

    // Limpiar calendario
    calendarGrid.innerHTML = '';

    // Agregar encabezados de días
    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });

    // Obtener primer día del mes y total de días
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    // Ajustar para que lunes sea el primer día (0)
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

    // Agregar días del mes anterior
    for (let i = adjustedFirstDay - 1; i >= 0; i--) {
        const dayElement = createDayElement(daysInPrevMonth - i, month - 1, year, true);
        calendarGrid.appendChild(dayElement);
    }

    // Agregar días del mes actual
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
        const dayElement = createDayElement(day, month, year, false, isToday);
        calendarGrid.appendChild(dayElement);
    }

    // Agregar días del siguiente mes para completar la cuadrícula
    const totalCells = calendarGrid.children.length - 7; // Restar los encabezados
    const remainingCells = 35 - totalCells; // 5 semanas * 7 días
    for (let day = 1; day <= remainingCells; day++) {
        const dayElement = createDayElement(day, month + 1, year, true);
        calendarGrid.appendChild(dayElement);
    }
}

function createDayElement(day, month, year, isOtherMonth = false, isToday = false) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';

    if (isOtherMonth) {
        dayElement.classList.add('other-month');
    }

    if (isToday) {
        dayElement.classList.add('today');
    }

    const dayNumber = document.createElement('div');
    dayNumber.className = 'day-number';
    dayNumber.textContent = day;
    dayElement.appendChild(dayNumber);

    // Agregar eventos si existen
    if (!isOtherMonth) {
        const dateKey = `${year}-${month}-${day}`;
        if (events[dateKey]) {
            events[dateKey].forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = 'calendar-event';
                if (event.title.includes('cristal')) {
                    eventElement.classList.add('crystal');
                } else if (event.title.includes('cerveza')) {
                    eventElement.classList.add('beer');
                }
                eventElement.innerHTML = `
                    <span>${event.title}</span>
                    <span class="event-time">${event.time}</span>
                `;
                dayElement.appendChild(eventElement);

                eventElement.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showEventDetails(event, day, month, year);
                });
            });
        }
    }

    return dayElement;
}

function showEventDetails(event, day, month, year) {
    const dateStr = `${day}/${month + 1}/${year}`;
    alert(`Evento: ${event.title}\nFecha: ${dateStr}\nHora: ${event.time}`);
}

