import { cargarCarrito } from "./js/getCarrito.js";
cargarCarrito()
const btnVerMasRopa = document.getElementById("vm-ropa");
const btnVerMasFit = document.getElementById("vm-fitness");
const btnVerMasCalzado = document.getElementById("vm-calzado");
const btnVerMasBelleza = document.getElementById("vm-belleza");

btnVerMasRopa.onclick = () => {
  localStorage.setItem("category", "ropa");
  window.location.href = "./pages/categorias.html";
};

btnVerMasFit.onclick = () => {
  localStorage.setItem("category", "fitness");
  window.location.href = "./pages/categorias.html";
};

btnVerMasCalzado.onclick = () => {
  localStorage.setItem("category", "calzados");
  window.location.href = "./pages/categorias.html";
};

btnVerMasBelleza.onclick = () => {
  localStorage.setItem("category", "belleza");
  window.location.href = "./pages/categorias.html";
};
