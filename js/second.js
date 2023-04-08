
/* Segunda portada */
// Creamos un array con los datos de las tarjetas
const tarjetas = [
    {
      imagen: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61T142XhUeL._AC_UL1500_.jpg",
      descripcion: "Zapatillas",
      boton: "Ver más"
    },
    {
      imagen: "https://m.media-amazon.com/images/I/71A26MVNQKL._AC_UL1000_.jpg",
      descripcion: "Camisetas",
      boton: "Ver más"
    },
    {
      imagen: "https://http2.mlstatic.com/D_NQ_NP_628301-MLA51526218700_092022-O.webp",
      descripcion: "Pantalones",
      boton: "Ver más"
    },
    {
      imagen: "https://http2.mlstatic.com/D_NQ_NP_683615-MLA54714234861_032023-O.webp",
      descripcion: "Accesorios",
      boton: "Ver más"
    }
  ];
  
  // Recorremos el array y creamos una tarjeta por cada elemento
  tarjetas.forEach(tarjeta => {
    // Creamos un elemento div para la tarjeta
    const card = document.createElement("div");
    card.classList.add("card");
  
    // Creamos un elemento imagen y la agregamos a la tarjeta
    const img = document.createElement("img");
    img.src = tarjeta.imagen;
    img.alt = "Imagen de la tarjeta";
    img.classList.add("card-img-top");
    card.appendChild(img);
  
    // Creamos un elemento div para el cuerpo de la tarjeta
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    // Creamos un elemento descripción y lo agregamos al cuerpo de la tarjeta
    const descripcion = document.createElement("p");
    descripcion.classList.add("card-text");
    descripcion.textContent = tarjeta.descripcion;
    cardBody.appendChild(descripcion);
  
    // Creamos un botón y lo agregamos al cuerpo de la tarjeta
    const btn = document.createElement("a");
    btn.href = "#";
    btn.classList.add("btn", "btn-primary");
    btn.textContent = tarjeta.boton;
    cardBody.appendChild(btn);
  
    // Agregamos el cuerpo de la tarjeta a la tarjeta y la tarjeta al elemento con el ID "segunda_portada"
    card.appendChild(cardBody);
    document.getElementById("segunda_portada").appendChild(card);
  });
  

  /* zoom in */
  // Agregamos el evento "mouseenter" a cada tarjeta
card1.addEventListener("mouseenter", () => {
  card1.classList.add("zoom-in");
});

// Agregamos el evento "mouseleave" a cada tarjeta
card1.addEventListener("mouseleave", () => {
  card1.classList.remove("zoom-in");
});

// Creamos una clase "zoom-in" con la propiedad "transform: scale(1.1);"

