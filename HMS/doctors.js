const doctors = [
  {name: "Dr. Smith", spec: "Cardiology", phone: "0712345678"},
  {name: "Dr. Lee", spec: "Dermatology", phone: "0798765432"},
];
const list = document.getElementById("doctorsList");
doctors.forEach(d => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${d.name}</td><td>${d.spec}</td><td>${d.phone}</td>`;
  list.appendChild(tr);
});