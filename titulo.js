let text =document.getElementById("titulo-js");
let str = text.innerHTML;

text.innerHTML = "";

let speed = 200;
let i = 0;


function typeWriter(){
    if(i < str.length){
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

setTimeout(typeWriter, speed);