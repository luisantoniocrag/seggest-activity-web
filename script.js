// Selectores de Elementos
const body = document.getElementsByTagName("BODY")[0];

// si existe el key en localStorage va a retornar su value
// si no existe el key retornará null
function getLocalStorage(key) {
    return localStorage.getItem(key)
}

// Si no existe themSuggestActivity en local storage o es igual a 0 entonces colocar tema light
// En caso contrario colocar el tema dark
if (!getLocalStorage("themeSuggestActivity") || getLocalStorage("themeSuggestActivity") == 0) {
    body.style.backgroundColor = "white";
} else {
    body.style.backgroundColor = "black"
}
