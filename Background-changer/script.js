const button = document.querySelector("button");
const body = document.querySelector("body");

button.onclick = function() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    let c = `rgb(${r},${g},${b})`;
    body.style.backgroundColor = c;
}