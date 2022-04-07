const toggler = document.getElementById('toggler');
const nav = document.getElementById('menu');
const main = document.getElementById('main');
const timeline = document.getElementById('timeline');

function menu(){
    if(toggler.checked){
        nav.style.width = "250px";
        main.style.opacity = "0.3";
        
    }else{
        nav.style.width = "0";
        main.style.opacity = "1";
    }
}

function timelineToggler() {
    if(timeline.style.display !== "block"){
        timeline.style.display = "block";
    }else{
        timeline.style.display = "none";
    }
}