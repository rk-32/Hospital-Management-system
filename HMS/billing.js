document.querySelector('.form-main').addEventListener('submit', e => {
  e.preventDefault();
  const c = +e.target[1].value;
  const l = +e.target[2].value;
  const x = +e.target[3].value;
  document.getElementById("billTotal").innerText = "£" + (c + l + x);
});