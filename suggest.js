// Selector
const text = document.getElementById("text");
const screen = document.getElementsByTagName("canvas")[0];

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