// Creamos un elemento div para la tarjeta
const card = document.createElement("div");
card.classList.add("card", "w-60");

// Creamos un elemento imagen y la agregamos a la tarjeta
const img = document.createElement("img");
img.src = "/img/zapatillas_jordan.jpg"
img.alt = "Imagen de zapatillas";
img.classList.add("card-img-top");
card.appendChild(img);

// Creamos un elemento div para el cuerpo de la tarjeta
const cardBody = document.createElement("div");
cardBody.classList.add("card-body");

// Creamos un elemento título y lo agregamos al cuerpo de la tarjeta
const title = document.createElement("h5");
title.classList.add("card-title");
title.textContent = "MEN";
cardBody.appendChild(title);

// Creamos un botón y lo agregamos al cuerpo de la tarjeta
const btn = document.createElement("a");
btn.href = "#";
btn.classList.add("btn", "btn-primary");
btn.textContent = "Ver más";
cardBody.appendChild(btn);

// Agregamos el cuerpo de la tarjeta a la tarjeta y la tarjeta al elemento con el ID "zapas_portada"
card.appendChild(cardBody);
document.getElementById("zapas_portada").appendChild(card);

// Creamos un elemento contenedor para las tarjetas y le agregamos la clase "d-flex"
const cardsContainer = document.createElement("div");
cardsContainer.classList.add("d-flex");

// Creamos la primera tarjeta y le agregamos la clase "card" y "w-40"
const card1 = document.createElement("div");
card1.classList.add("card", "w-40");

// Creamos la segunda tarjeta y le agregamos la clase "card" y "w-40"
const card2 = document.createElement("div");
card2.classList.add("card", "w-40");

// Agregamos las dos tarjetas al contenedor de tarjetas
cardsContainer.appendChild(card1);
cardsContainer.appendChild(card2);

// Agregamos el contenedor de tarjetas al elemento con el ID "zapas_portada"
document.getElementById("zapas_portada").appendChild(cardsContainer);
// Agregamos la imagen y el botón a la primera tarjeta
const img1 = document.createElement("img");
img1.src = "img/woman_play_basquet.jpg"
img1.alt = "WOMAN";
img1.classList.add("card-img-top");
card1.appendChild(img1);

const cardBody1 = document.createElement("div");
cardBody1.classList.add("card-body");

const title1 = document.createElement("h5");
title1.classList.add("card-title");
title1.textContent = "WOMEN";
cardBody1.appendChild(title1);

const btn1 = document.createElement("a");
btn1.href = "#";
btn1.classList.add("btn", "btn-primary");
btn1.textContent = "Ver más";
cardBody1.appendChild(btn1);

card1.appendChild(cardBody1);

// Agregamos la imagen y el botón a la segunda tarjeta
const img2 = document.createElement("img");
img2.src = "img/kid_play_basquet.jpg"
img2.alt = "Imagen de zapatillas 2";
img2.classList.add("card-img-top");
card2.appendChild(img2);

const cardBody2 = document.createElement("div");
cardBody2.classList.add("card-body");

const title2 = document.createElement("h5");
title2.classList.add("card-title");
title2.textContent = "KIDS";
cardBody2.appendChild(title2);

const btn2 = document.createElement("a");
btn2.href = "#";
btn2.classList.add("btn", "btn-primary");
btn2.textContent = "Ver más";
cardBody2.appendChild(btn2);

card2.appendChild(cardBody2);
// Agregamos las dos tarjetas al contenedor de tarjetas
cardsContainer.appendChild(card1);
cardsContainer.appendChild(card2);

// Agregamos el contenedor de tarjetas al elemento con el ID "zapas_portada"
document.getElementById("zapas_portada").appendChild(cardsContainer);


