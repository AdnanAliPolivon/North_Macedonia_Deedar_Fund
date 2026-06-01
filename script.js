const deedarDate = new Date('2026-07-04T10:00:00+02:00');

function updateCountdown() {
  const now = new Date();
  const diff = Math.max(0, deedarDate - now);
  const secondsTotal = Math.floor(diff / 1000);
  const days = Math.floor(secondsTotal / 86400);
  const hours = Math.floor((secondsTotal % 86400) / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function euro(value) {
  return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
}

function readNumber(id) {
  const value = Number(document.getElementById(id).value);
  return Number.isFinite(value) && value >= 0 ? value : 0;
}

function updateCalculator() {
  const students = Math.max(1, readNumber('studentCount'));
  const min = readNumber('airMin') + readNumber('stayMin') + readNumber('otherMin');
  const max = readNumber('airMax') + readNumber('stayMax') + readNumber('otherMax');

  document.getElementById('perStudentResult').textContent = `${euro(min)}–${euro(max)}`;
  document.getElementById('totalResult').textContent = `${euro(min * students)}–${euro(max * students)}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', updateCalculator);
});
updateCalculator();
