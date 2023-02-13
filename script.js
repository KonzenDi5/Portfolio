
let isHidden = true;

function revealMe(){
var container = document.querySelector(".eu");

if(isHidden) {
container.style.height = "700px";
isHidden = false;
} else {
container.style.height = 0
isHidden = true;
}
}
