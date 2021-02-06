const toggler = document.getElementById('toggler');
const nav = document.getElementById('menu');
const main = document.getElementById('main');

function menu(){
    if(toggler.checked){
        nav.style.width = "250px";
        main.style.opacity = "0.3";
        
    }else{
        nav.style.width = "0";
        main.style.opacity = "1";
    }
}