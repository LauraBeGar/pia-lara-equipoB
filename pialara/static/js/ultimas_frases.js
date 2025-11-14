// Seleccionamos todas las frases y el textarea
const frases = document.querySelectorAll(".ult_frases");
const textarea = document.getElementById("syllabus-text");

// Cuando se hace clic en una frase, se copia en el textarea
frases.forEach(frase => {
    frase.addEventListener("click", () => {
        textarea.value = frase.textContent;
    });
});