import { addToCar } from "./addToCar.js";

const urlBase = "https://emily-store-api.herokuapp.com";
const getCategoriesById = async (id, endpoint) => {
  const response = await fetch(`${urlBase}/${endpoint}/${id}`);
  return response.json();
};

export const showModal = (id, container, endpoint) => {
  // Vertically centered modal
  
  getCategoriesById(id, endpoint).then((category) => {
    const priceFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "COP"
      }).format(category.price);  
    container.innerHTML = `
      <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${category.name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class='row g-0'>
      <div class='col-md-4'>
         <img class='w-100 my-5 ms-4' src="${category.image}" alt="${category.name}">
      </div>
      <div class='col-md-8'>
         <div class="modal-body my-3 mx-2">
             <h3>Precio: ${priceFormat}</h3>
            
             <p>${category.description}</p>
             <h5>Marca: ${category.Marca}</h5>
             <h5> Color: ${category.color}</h5>
             <label for="cantidad">Cantidad</label>
             <input id="cantidad" value="1" type="number" min="1">
             <center>
                 <button id="add" class='btn mt-5 btn-outline-primary carrito' data-bs-dismiss="modal">Agregar al carrito</button>
             </center>
         </div>
     </div>
  </div>
    `;
    const cantidad = document.getElementById("cantidad");
    const add = document.getElementById("add");

    add.addEventListener("click", () => {
      addToCar({
        ...category,
        category: endpoint,
        cantidad: Number(cantidad.value),
      });
    });
  });
};
