const MILIS_IN_DAYS = 86400000;
const MILIS_IN_WEEKS = 604800000;
const COUNT_DOWN_MS = 1759269600000;

function assignWeek(number) {
  let showWeeks;
  
  if (number <= 1) {
    showWeeks = `${number} tydzień`;
  }
  else if (number <= 4) {
    showWeeks = `${number} tygodnie`;
  }
  else if (number >= 20 && (number % 10 >= 2 && number % 10 <= 4)) {
    showWeeks = `${number} tygodnie`;
  }
  else {
    showWeeks = `${number} tygodni`;
  }
  return showWeeks;
}

function updateDays() {
  let showDays;
  let dateNow = new Date();
  let currentMS = dateNow.getTime();

  daysLeft = Math.ceil((COUNT_DOWN_MS - currentMS)/MILIS_IN_DAYS);
  weeksLeft = Math.ceil((COUNT_DOWN_MS - currentMS)/MILIS_IN_WEEKS);

  if (daysLeft <= MILIS_IN_DAYS) {
    showDays = `${daysLeft} dni`;
  }
  else {
    showDays = `${daysLeft} dzień`;    
  }
  
  document.getElementById("days").innerHTML = showDays;
  document.title = showDays;
  document.getElementById("weeks").innerHTML = assignWeek(weeksLeft);
}

window.setInterval(() => {
  updateDays();
}, 10000);