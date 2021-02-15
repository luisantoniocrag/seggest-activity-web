// Selector
const main = document.getElementsByTagName("main")[0];
const text = document.getElementById("text");
const reloadButton = document.getElementById("reload");
const loader = document.getElementById('loader');

//Desktop Reload button event
reloadButton.addEventListener("click", () => {
    fetch(`${SERVER}/user/random-activity`)
    .then(res => res.json())
    .then(data => {
        text.innerHTML = "";
        const title = document.createElement('h3');
        title.innerText =  data.title;

        const description = document.createElement('p');
        description.innerText = data.description;
        
        text.appendChild(title);
        text.appendChild(description);
    });
});

//Desktop space bar event
body.addEventListener("keydown", (e) => {
    if(e.keyCode == 32) {
        fetch(`${SERVER}/user/random-activity`)
        .then(res => res.json())
        .then(data => {
            loader.classList.remove('active');
            text.innerHTML = "";
            const title = document.createElement('h3');
            title.innerText =  data.title;
    
            const description = document.createElement('p');
            description.innerText = data.description;
            
            text.appendChild(title);
            text.appendChild(description);
        });
    }
});

//mobil tap event
if (themeSwitchMobil) {
    main.addEventListener("touchend",(e) => {
        e.preventDefault();
        
        fetch(`${SERVER}/user/random-activity`)
        .then(res => res.json())
        .then(data => {
            text.innerHTML = "";
            const title = document.createElement('h3');
            title.innerText =  data.title;
    
            const description = document.createElement('p');
            description.innerText = data.description;
            
            text.appendChild(title);
            text.appendChild(description);
        });
    });
}