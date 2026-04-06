// app.js

// Time Sheet Management Application

// Check for existing entries in localStorage
let timeEntries = JSON.parse(localStorage.getItem('timeEntries')) || [];

// Function to add a time entry
function addEntry(date, hours, description) {
    const entry = { date, hours, description };
    timeEntries.push(entry);
    localStorage.setItem('timeEntries', JSON.stringify(timeEntries));
    renderEntries();
}

// Function to delete an entry
function deleteEntry(index) {
    timeEntries.splice(index, 1);
    localStorage.setItem('timeEntries', JSON.stringify(timeEntries));
    renderEntries();
}

// Function to calculate and display total hours
function calculateTotalHours() {
    return timeEntries.reduce((total, entry) => total + Number(entry.hours), 0);
}

// Function to render entries to the screen
function renderEntries() {
    const entryList = document.getElementById('entryList');
    entryList.innerHTML = '';
    timeEntries.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Date: ${entry.date}, Hours: ${entry.hours}, Description: ${entry.description}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteEntry(index);
        listItem.appendChild(deleteButton);
        entryList.appendChild(listItem);
    });
    const totalHours = calculateTotalHours();
    document.getElementById('totalHours').textContent = `Total Hours: ${totalHours}`;
}

// Initial rendering
renderEntries();

// Example usage (to be replaced with actual UI interactions)
addEntry('2026-04-06', 8, 'Worked on project A');
