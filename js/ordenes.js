import { cargarCarrito } from "./getCarrito.js";

const urlBase = "https://emily-store-api.herokuapp.com";
const itemListCar = document.getElementById("item-list-car");
const form = document.getElementById("form-envio");
const limpiarCarrito = (item) => {
  localStorage.removeItem(item);
  itemListCar.innerHTML = ""
};
const submit = async (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    const {
      name,
      lastName,
      address,
      address2,
      email,
      phone,
      departament,
      city,
      paymentMethod,
    } = e.target;

    const data = {
      name: name.value,
      lastName: lastName.value,
      address: address.value,
      address2: address2.value,
      email: email.value,
      phone: phone.value,
      departament: departament.value,
      city: city.value,
      paymentMethod: paymentMethod.value,
    };
    try {
      const response = await fetch(`${urlBase}/ordenes`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      limpiarCarrito("car");

      alert(`
             Su orden ha sido procesada exitosamente.
             numero de orden: ${result.id}
          `);
      form.classList.remove("was-validated");

      form.reset();
      cargarCarrito();
    } catch (error) {
      console.error(error);
      alert(`Ha ocurrido un error!`);
    }
  } else {
    form.classList.add("was-validated");
  }
};

form.addEventListener("submit", (e) => submit(e), false);
