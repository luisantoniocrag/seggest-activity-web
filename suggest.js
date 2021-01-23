// Selector
const text = document.getElementById("text");
const screen = document.getElementsByTagName("canvas")[0];
const reloadButton = document.getElementById("reload");

//Desktop Reload button event
reloadButton.addEventListener("click", () => {
    text.innerHTML = "Learn a new Languaje";
});

//Desktop space bar event
body.addEventListener("keydown", (e) => {
    if(e.keyCode == 32){
        text.innerHTML = "Learn a new Languaje";
    }
});

//mobil tap event
screen.addEventListener("touchstart", handleStart);

function handleStart(evt) {
    evt.preventDefault();
    text.innerHTML = "Learn a new Languaje";
}