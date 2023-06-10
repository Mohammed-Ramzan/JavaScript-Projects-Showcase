  // Get current date
  let today = new Date();

  // Initialize variables for current month and year
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  // Initialize variables for selected date
  let selectedDate = today;

  // Function to render calendar for given month and year
function renderCalendar(month, year) {
// Get number of days in the month and the first day of the month
let numDays = new Date(year, month + 1, 0).getDate();
let firstDay = new Date(year, month, 1).getDay();
// Get reference to the days container
let daysContainer = document.querySelector('.days');

// Clear the days container
daysContainer.innerHTML = '';

// Add empty cells for days before the first day of the month
for (let i = 0; i < firstDay; i++) {
  let emptyCell = document.createElement('div');
  emptyCell.classList.add('disabled');
  daysContainer.appendChild(emptyCell);
}

// Add cells for each day of the month
for (let i = 1; i <= numDays; i++) {
  let cell = document.createElement('div');
  cell.textContent = i;
  if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
    cell.classList.add('today');
  }
  if (selectedDate.getDate() === i && selectedDate.getMonth() === month && selectedDate.getFullYear() === year) {
    cell.classList.add('selected');
  }
  daysContainer.appendChild(cell);
}

// Update the current month and year text
let currentMonthYear = document.querySelector('#current-month-year');
currentMonthYear.textContent = `${monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month]} ${year}`;
}

// Call the renderCalendar function with the current month and year
renderCalendar(currentMonth, currentYear);

// Add event listeners for previous and next month buttons
let prevMonthBtn = document.querySelector('#prev-month-btn');
let nextMonthBtn = document.querySelector('#next-month-btn');

prevMonthBtn.addEventListener('click', () => {
currentMonth--;
if (currentMonth < 0) {
currentMonth = 11;
currentYear--;
}
renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
currentMonth++;
if (currentMonth > 11) {
currentMonth = 0;
currentYear++;
}
renderCalendar(currentMonth, currentYear);
});

// Add event listener for clicking on a day cell
daysContainer.addEventListener('click', (event) => {
// Get the selected day cell
let selectedCell = event.target;
// Check if the selected cell is not disabled
if (!selectedCell.classList.contains('disabled')) {
// Remove the selected class from the previously selected cell
let previouslySelectedCell = document.querySelector('.selected');
if (previouslySelectedCell) {
previouslySelectedCell.classList.remove('selected');
}
// Add the selected class to the clicked cell
selectedCell.classList.add('selected');
// Update the selected date variable
selectedDate = new Date(currentYear, currentMonth, parseInt(selectedCell.textContent));
}
});
