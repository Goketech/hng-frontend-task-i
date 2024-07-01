// index.js

// Function to get the current date and time
function updateDateTime() {
    const now = new Date();
    
    // Format the current time
    const currentTime = now.toUTCString();
    const timeOnly = currentTime.split(' ')[4];

    // Get the current day of the week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[now.getUTCDay()];

    // Insert current time into the element with data-testid="currentTimeUTC"
    const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    if (timeElement) {
        timeElement.textContent = `Current Time: ${timeOnly}`;
    }

    // Insert current day of the week into the element with data-testid="currentDay"
    const dayElement = document.querySelector('[data-testid="currentDay"]');
    if (dayElement) {
        dayElement.textContent = `Current Day of the week: ${currentDay}`;
    }
}

// Call the function to update the date and time when the page loads
window.onload = updateDateTime;
