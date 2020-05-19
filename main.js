const toggler = document.getElementById('toggler');
const nav = document.getElementById('menu');
const main = document.getElementById('main');
const menuItem = document.getElementById('menu-items');
function menu(){
    if(toggler.checked){
        main.style.marginLeft = "250px";
        nav.style.width = "250px";
        main.style.opacity = "0.3";
    }else{
        main.style.marginLeft = "0";
        nav.style.width = "0";
        main.style.opacity = "1";
    }
}