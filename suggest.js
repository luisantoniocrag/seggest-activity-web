// Selector
const main = document.getElementsByTagName("main")[0];
const text = document.getElementById("text");
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
if (themeSwitchMobil) {
    main.addEventListener("touchend",(e) => {
        console.log(e)
        e.preventDefault();
        text.innerHTML = "Learn a new Languaje";
    });
}
