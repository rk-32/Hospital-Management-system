document.querySelector('.form-main').addEventListener('submit', e => {
  e.preventDefault();
  const list = document.getElementById("appointmentList");
  list.innerHTML += "<li>Booked (demo only)</li>";
});