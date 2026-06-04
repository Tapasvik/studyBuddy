//alert("Welcome! This is a Pomodoro timer to help you stay focused. Click the buttons to start and double click to pause. Remember to take breaks and stay hydrated!");


//Managing the timer 
//const creates permanent variable storing the default values
const studyMinutes = 25;
const shortBreakMinutes = 5;
const longBreakMinutes = 15;
//using the let keyword to create variables that will be updated as the timer runs
let shortBreakSeconds = shortBreakMinutes * 60;
let longBreakSeconds = longBreakMinutes * 60;
let timerId = null;
//grabbing the timer element from the HTML to update it as the timer runs
const countdownElement = document.getElementById('timer');


// Group 1: Time Formatting Functions
// formatTime that accepts values like 300 or 1500 and converts them into a string format of "5:00" or "25:00" for display on the webpage
function formatTime(totalSeconds) {
    // Calculates the whole number of mintutes left
  const minutes = Math.floor(totalSeconds / 60);
    // Calculates the remaining seconds after accounting for the minutes
  const seconds = totalSeconds % 60;
  //checks if the seconds value is less than 10, and if so, adds a leading zero for proper time formatting (e.g., "5:05" instead of "5:5")
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// changes the text content of the countdownElement to show the formatted time string based on the total seconds remaining, allowing the timer display to update in real-time as the timer counts down
function updateDisplay(totalSeconds) {
  countdownElement.innerHTML = formatTime(totalSeconds);
}
// Group 1 end


function setShortBreak() {
    //Checks if a timer is already running and if so returns early to prevent multiple timers from running
  if (timerId !== null) {
    return;
  }
  //Basically sets up a timer that counts down every second and executes the function think of it like a while loop that runs every second, checking if the short break time has reached zero. If it has, it stops the timer and alerts the user that the break is over.
  timerId = setInterval(function() {
    if (shortBreakSeconds > 0) {
      shortBreakSeconds--;
      updateDisplay(shortBreakSeconds);
    } else {
      clearInterval(timerId);
      timerId = null;
      alert("Short break is over! Time to get back to work.");
    }
    // the 1000 at the end of setInterval means that the function will execute every 1000 milliseconds, or every second, allowing the timer to count down in real-time.
  }, 1000);
}


function setLongBreak() {
    if (timerId !== null) {
      return;
    }
    timerId = setInterval(function() {
      if (longBreakSeconds > 0) {
        longBreakSeconds--;
        updateDisplay(longBreakSeconds);
      } else {
        clearInterval(timerId);
        timerId = null;
        alert("Long break is over! Time to get back to work.");
      }
    }, 1000);
}


function stopTimer() {
    clearInterval(timerId);
    timerId = null;
}

function resetTimer() {
    stopTimer();
    shortBreakSeconds = shortBreakMinutes * 60;
    longBreakSeconds = longBreakMinutes * 60;
    updateDisplay(studyMinutes*60); // Reset to the initial short break time
}
function setPomodoro() {
    if (timerId !== null) {
      return;
    }
    let pomodoroSeconds = studyMinutes * 60;
    timerId = setInterval(function() {
      if (pomodoroSeconds > 0) {
        pomodoroSeconds--;
        updateDisplay(pomodoroSeconds);
      } else {
        clearInterval(timerId);
        timerId = null;
        alert("Pomodoro session is over! Time for a break.");
      }
    }, 1000);
}

// Modal 
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openBth");
const closeModalBtn = document.getElementById("closeBtn");

function openModal() {
    modal.classList.add("show");
}

function closeModal(){
    modal.classList.remove("show");
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);