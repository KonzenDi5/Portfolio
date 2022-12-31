var btn = document.querySelector('.sobre');
var container = document.querySelector('.eu');
btn.addEventListener('click', function() {
    
  if(container.style.height === "0") {
      container.style.height = "100%";
  } else {
      container.style.height = "0";
  }
})
