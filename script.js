// Get the current year
var currentYear = new Date().getFullYear();

// Set the countdowndate (assuming the date is on August 16th)
var countDate = new Date(currentYear, 7, 14);

// If the date has already occurred this year, set it for the next year
if (countDate < new Date()) {
  countDate.setFullYear(currentYear + 1);
}

// Set the countdown date to the next date
var countDownDate = countDate.getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  //var day = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the new message elements
  document.getElementById("day").innerHTML = getDayName(countDate);
  //document.getElementById("countdays").innerHTML = day + "D";
  document.getElementById("hours").innerHTML = hours + "h";
  document.getElementById("seconds").innerHTML = seconds + "s";
  document.getElementById("minutes").innerHTML = minutes + "m";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function getDayName(date) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = date.getDay();
    return dayNames[dayOfWeek];
  }

//Code to change the format of the counter between 12-hours and 24-hours
const toggleButton = document.getElementById('toggle-btn');
let is24HourFormat = false;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (!is24HourFormat) {
        const session = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        document.getElementById('hours').textContent = addLeadingZero(hours);
        document.getElementById('minutes').textContent = addLeadingZero(minutes);
        document.getElementById('seconds').textContent = addLeadingZero(seconds);
        document.getElementById('session').textContent = session;
    } else {
        document.getElementById('hours').textContent = addLeadingZero(hours);
        document.getElementById('minutes').textContent = addLeadingZero(minutes);
        document.getElementById('seconds').textContent = addLeadingZero(seconds);
        document.getElementById('session').textContent = '';
    }
}

function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
}

function toggleTimeFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock();
    toggleButton.textContent = is24HourFormat ? '12-hr' : '24-hr';
}

updateClock();
setInterval(updateClock, 1000);

toggleButton.addEventListener('click', toggleTimeFormat);