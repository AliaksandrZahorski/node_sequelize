const BASE_URL = "http://localhost:3000/";

const renderLine = ({ id, title }) => {
  const p = document.createElement("p");
  p.innerHTML = `<p>id: ${id} title: ${title}</p>`;
  document.body.appendChild(p);
};

const render = (data) => {
  data.forEach(d => renderLine(d));
};

window.onload = () => {
  fetch(`${BASE_URL}tir`)
    .then(res => res.json())
    .then(res => render(res))
    .catch(err => console.log(err));
};
