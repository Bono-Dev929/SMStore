document.addEventListener("DOMContentLoaded", () => {
  fetch("./data/productos.json")
    .then(res => res.json())
    .then(productos => {
      const contenedor = document.querySelector("#catalogo");
      productos.forEach(prod => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="./Imgs/${prod.imagen}" alt="${prod.nombre}" />
          <h3>${prod.nombre}</h3>
          <h3>${prod.descripcion}</h3>
          <p>$${prod.precio}</p>
        `;
        contenedor.appendChild(card);
      });


    })
    .catch(err => console.error("Error cargando productos:", err));
});


