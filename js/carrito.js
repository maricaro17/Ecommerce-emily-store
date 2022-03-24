import { cargarCarrito } from "./getCarrito.js";

const itemListCar = document.getElementById("item-list-car");
const car = cargarCarrito();
if (car.length > 0) {
  const results = [];
  car.forEach((element) => {
    results.push(element.price * element.cantidad);
    const priceFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "COP",
    }).format(element.price * element.cantidad);
    itemListCar.innerHTML += `
        <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
                <h6 class="my-0">${element.name}</h6>
                <small class="text-muted">Precio Unidad: ${element.price}</small><br>
                <small class="text-muted">Descripcion: ${element.description}</small><br>
                <small class="text-muted">Cantidad: ${element.cantidad}</small><br>
            </div>
            <span class="text-muted">${priceFormat}</span>
        </li>
       `;
  });
  const resultFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "COP",
  }).format(results.reduce((a, b) => a + b));
  itemListCar.innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
            <span>Total: </span>
            <strong>${resultFormat}</strong>
        </li>`;
}
