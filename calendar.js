const calendarGrid = document.getElementById("calendar-grid");
const monthYearElement = document.getElementById("month-year");
const prevMonthButton = document.getElementById("prev-month");
const nextMonthButton = document.getElementById("next-month");

let currentYear, currentMonth;

function generateCalendar(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    monthYearElement.textContent = new Date(year, month, 1).toLocaleString('en-US', { month: 'long', year: 'numeric' });

    let dayCounter = 1;

    calendarGrid.innerHTML = "";

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            const calendarDay = document.createElement("div");
            calendarDay.classList.add("calendar-day");

            if (i === 0 && j < firstDay) {
                calendarDay.textContent = "";
            } else if (dayCounter > daysInMonth) {
                calendarDay.textContent = "";
            } else {
                calendarDay.textContent = dayCounter;
                dayCounter++;
            }

            calendarGrid.appendChild(calendarDay);
        }
    }
}

function updateCalendar() {
    generateCalendar(currentYear, currentMonth);
}

prevMonthButton.addEventListener("click", () => {
    if (currentMonth === 0) {
        currentYear--;
        currentMonth = 11;
    } else {
        currentMonth--;
    }
    updateCalendar();
});

nextMonthButton.addEventListener("click", () => {
    if (currentMonth === 11) {
        currentYear++;
        currentMonth = 0;
    } else {
        currentMonth++;
    }
    updateCalendar();
});

// Initialize the calendar for the current month
const today = new Date();
currentYear = today.getFullYear();
currentMonth = today.getMonth();
generateCalendar(currentYear, currentMonth);
