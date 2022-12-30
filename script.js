const MILIS_TO_DAYS = 86400000;
const COUNT_DOWN_MS = 1759269600000;

function updateDays() {
  let dateNow = new Date();
  let currentMS = dateNow.getTime();

  daysLeft = Math.ceil((COUNT_DOWN_MS - currentMS)/MILIS_TO_DAYS);
  let showString = `${daysLeft} dni`;
  
  document.getElementById("days").innerHTML = showString;
  document.title = showString;
}

window.setInterval(() => {
  updateDays();
}, 10000);