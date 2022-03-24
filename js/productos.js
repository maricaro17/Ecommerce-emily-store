import { cargarCarrito } from "./getCarrito.js";
cargarCarrito();
const urlBase = "https://emily-store-api.herokuapp.com";

const getFitnessCategories = async () => {
  const response = await fetch(`${urlBase}/fitness`);
  const fitness = response.json();
  return fitness;
};

const getBellezaCategories = async () => {
  const response = await fetch(`${urlBase}/belleza`);
  const belleza = response.json();
  return belleza;
};
const getCalzadosCategories = async () => {
  const response = await fetch(`${urlBase}/calzados`);
  const calzados = response.json();
  return calzados;
};
const getRopaCategories = async () => {
  const response = await fetch(`${urlBase}/ropa`);
  const ropa = response.json();
  return ropa;
};

const rowFitness = document.getElementById("row-fitness");
getFitnessCategories().then((fit) => {
  for (let i = 0; i < fit.length - 5; i++) {
    const element = fit[i];
    rowFitness.innerHTML += `
        <div class="col col-md-3 my-4">
            <div class="card ">
                <img src="${element.image}"
                    class="card-img-top card-image" alt="${element.name}">
            </div>
        </div>
        `;
  }

  rowFitness.innerHTML += `
  <div class="col col-md-3 my-4">
      <div class="card">
          <img id="action-fitness" src="../images/ver-todo.jpg"
              class="card-img-top card-image" alt="Ver todo">
      </div>
  </div>
  `;
  const verTodoFitness = document.getElementById("action-fitness");
  verTodoFitness.addEventListener("click", () => {
    localStorage.setItem("category", "fitness");
    window.location.href = "../pages/categorias.html";
  });
});

const rowBelleza = document.getElementById("row-belleza");
getBellezaCategories().then((belleza) => {
  for (let i = 0; i < belleza.length - 5; i++) {
    const element = belleza[i];
    rowBelleza.innerHTML += `
        <div class="col col-md-3 my-4">
            <div class="card ">
                <img src="${element.image}"
                    class="card-img-top card-image" alt="${element.name}">
            </div>
        </div>
        `;
  }

  rowBelleza.innerHTML += `
  <div class="col col-md-3 my-4">
      <div id="action-belleza" class="card ">
          <img id="action-" src="../images/ver-todo.jpg"
              class="card-img-top card-image" alt="Ver todo">
      </div>
  </div>
  `;
  const verTodoBelleza = document.getElementById("action-belleza");
  verTodoBelleza.addEventListener("click", () => {
    localStorage.setItem("category", "belleza");
    window.location.href = "../pages/categorias.html";
  });
});

const rowCalzados = document.getElementById("row-calzados");
getCalzadosCategories().then((calzados) => {
  for (let i = 0; i < calzados.length - 5; i++) {
    const element = calzados[i];
    rowCalzados.innerHTML += `
        <div class="col col-md-3 my-4">
            <div class="card ">
                <img src="${element.image}"
                    class="card-img-top card-image" alt="${element.name}">
            </div>
        </div>
        `;
  }

  rowCalzados.innerHTML += `
  <div class="col col-md-3 my-4">
      <div id="action-calzados" class="card ">
          <img src="../images/ver-todo.jpg"
              class="card-img-top card-image" alt="Ver todo">
      </div>
  </div>
  `;
  const verTodoCalzados = document.getElementById("action-calzados");
  verTodoCalzados.addEventListener("click", () => {
    localStorage.setItem("category", "calzados");
    window.location.href = "../pages/categorias.html";
  });
});
const rowRopa = document.getElementById("row-ropa");
getRopaCategories().then((ropa) => {
  for (let i = 0; i < ropa.length - 5; i++) {
    const element = ropa[i];
    rowRopa.innerHTML += `
        <div class="col col-md-3 my-4">
            <div class="card ">
                <img src="${element.image}"
                    class="card-img-top card-image" alt="${element.name}">
            </div>
        </div>
        `;
  }

  rowRopa.innerHTML += `
  <div class="col col-md-3 my-4">
      <div id="action-ropa" class="card ">
          <img src="../images/ver-todo.jpg"
              class="card-img-top card-image" alt="Ver todo">
      </div>
  </div>
  `;
  const verTodoRopa = document.getElementById("action-ropa");
  verTodoRopa.addEventListener("click", () => {
    localStorage.setItem("category", "ropa");
    window.location.href = "../pages/categorias.html";
  });
});
