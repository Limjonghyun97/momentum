const images = ["0.jpg",]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");

body.style.background = `url(img/${chosenImage})`;

document.body.appendChild(bgImage);
