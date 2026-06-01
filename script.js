const students = [
  { name: 'Adnan Ali Polivon', nationality: 'Pakistani', program: "Master's" },
  { name: 'Ali Ahmed Jan', nationality: 'Pakistani', program: "Master's" },
  { name: 'Alishan', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Alivena', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Anila', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Ayan Ali', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Azhar', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Azeem', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Aziza', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Burhan', nationality: 'Pakistani', program: "Master's" },
  { name: 'Faisal', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Farhan', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Fayaz', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Ghazanfar', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Hina', nationality: 'Pakistani', program: "Master's" },
  { name: 'Hussina', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Istiaq', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Jabeen', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Janzaib', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Javed', nationality: 'Pakistani', program: "Master's" },
  { name: 'Kaleem Sultan', nationality: 'Pakistani', program: "Master's" },
  { name: 'Kiran', nationality: 'Pakistani', program: "Master's" },
  { name: 'Komal', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Malayika', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Mehwish', nationality: 'Pakistani', program: "Master's" },
  { name: 'Moiz', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Muzahir', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Rashid Khalil', nationality: 'Pakistani', program: "Master's" },
  { name: 'Reena', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Rimsha', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Rohail', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Safia', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Sajid Karim', nationality: 'Pakistani', program: "Master's" },
  { name: 'Saqlain', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Shahzaib Haider', nationality: 'Pakistani', program: "Master's" },
  { name: 'Tariq Wazir', nationality: 'Pakistani', program: "Master's" },
  { name: 'Urooj', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Zeeshan', nationality: 'Pakistani', program: "Bachelor's" },
  { name: 'Zulfiqar Essa', nationality: 'Pakistani', program: "Master's" }
];

const rows = document.getElementById('studentRows');
students.forEach((student, index) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${index + 1}</td><td>${student.name}</td><td>${student.nationality}</td><td>${student.program}</td>`;
  rows.appendChild(tr);
});

const slides = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('.dot')];
let activeSlide = 0;
function showSlide(index) {
  activeSlide = index;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}
dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
setInterval(() => showSlide((activeSlide + 1) % slides.length), 3000);

const deedarDate = new Date('2026-07-05T10:00:00+02:00').getTime();
function updateCountdown() {
  const now = Date.now();
  const distance = Math.max(0, deedarDate - now);
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const minCost = 580;
const maxCost = 720;
const studentCount = document.getElementById('studentCount');
const totalCost = document.getElementById('totalCost');
function formatEuro(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
}
function updateCost() {
  let count = Number.parseInt(studentCount.value, 10);
  if (Number.isNaN(count)) count = 1;
  count = Math.max(1, Math.min(39, count));
  totalCost.textContent = `${formatEuro(count * minCost)} – ${formatEuro(count * maxCost)}`;
}
studentCount.addEventListener('input', updateCost);
studentCount.addEventListener('change', () => {
  let count = Number.parseInt(studentCount.value, 10);
  if (Number.isNaN(count) || count < 1) count = 1;
  if (count > 39) count = 39;
  studentCount.value = count;
  updateCost();
});
updateCost();
