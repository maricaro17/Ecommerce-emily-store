import { showModal } from "./showModal.js";
import { cargarCarrito } from "./getCarrito.js";
cargarCarrito()
const category = localStorage.getItem("category");
const urlBase = "https://emily-store-api.herokuapp.com";
let endpoint = category;

const getCategories = async () => {
  const response = await fetch(`${urlBase}/${endpoint}`);
  return response.json();
};

const getCategoriesById = async (id) => {
  const response = await fetch(`${urlBase}/${endpoint}/${id}`);
  return response.json();
};

const rowCategory = document.getElementById("row-category");

const titleCategory = document.getElementById("title-category");
const contenedorModal = document.getElementById("contenedorModal");
getCategories().then((categories) => {
  categories.forEach((item) => {
    const id = item.id;
    const priceFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "COP"
      }).format(item.price);

    titleCategory.innerHTML = `<h1 id="title-category" class="text-white text-center py-2 text-uppercase">${category}</h1>`;
    rowCategory.innerHTML += `
    <div class="col col-md-3 my-4">
        <div class="card">
            <img src="${item.image}"
                class="card-img-top card-image" alt="${item.name}">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <h4 class="card-title">${priceFormat}</h4>
                <p class="card-text">${item.description}</p>
                <button id="${id}" class="btn btn-primary showModal" data-bs-toggle="modal" data-bs-target="#detalle-producto">Ver</button>
            </div>
        </div>
    </div>`;
  });
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("showModal")) {
    let id = e.target.id;
    showModal(id, contenedorModal, endpoint);
  }
});
