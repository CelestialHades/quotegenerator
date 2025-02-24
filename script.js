// 1. Get DOM element
const timeDisplay = document.getElementById('time');

// 2. Initialize variables
let time = 0; // Time in tenths of a second
let intervalId = null;

// 3. Function to update the display
function updateDisplay() {
  const minutes = Math.floor(time / 600); // 600 tenths = 1 minute
  const seconds = Math.floor((time % 600) / 10); // Remaining seconds
  const tenths = time % 10; // Tenths of a second
  timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${tenths}`;
}

// 4. Function to start the stopwatch
function startStopwatch() {
  if (intervalId === null) { // Only start if not already running
    intervalId = setInterval(() => {
      time++;
      updateDisplay();
    }, 100); // Update every 100ms (0.1s)
  }
}

// 5. Function to stop the stopwatch
function stopStopwatch() {
  clearInterval(intervalId);
  intervalId = null; // Reset so it can start again
}

// 6. Function to reset the stopwatch
function resetStopwatch() {
  stopStopwatch(); // Stop if running
  time = 0;
  updateDisplay();
}