const frases = [
  "No importa lo que pase, seguiré adelante. — Cloud",
  "El planeta está gritando. — Barret",
  "Hay palabras que no pueden decirse, pero pueden sentirse. — Aerith",
  "Si no luchas, no puedes ganar. — Tifa",
  "Incluso las flores más frágiles pueden florecer en la oscuridad. — Aerith"
];

document.getElementById("boton-frase").addEventListener("click", () => {
  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
  const contenedorFrase = document.getElementById("frase");
  contenedorFrase.style.opacity = 0;
  setTimeout(() => {
    contenedorFrase.textContent = fraseAleatoria;
    contenedorFrase.style.opacity = 1;
  }, 400);
});

const elementosRevelar = document.querySelectorAll(".revelar");

window.addEventListener("scroll", () => {
  const puntoActivacion = window.innerHeight * 0.85;
  elementosRevelar.forEach(el => {
    const posicion = el.getBoundingClientRect().top;
    if (posicion < puntoActivacion) el.classList.add("visible");
  });
});
