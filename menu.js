const ham = document.querySelector ('#menu-hamburguesa');
const enlaces = document.querySelector ('.menu-navegacion');

ham.addEventListener ('click',() =>{
    enlaces.classList.toggle ('activado');
});




