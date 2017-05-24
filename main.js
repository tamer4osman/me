var currrentleft= 0;
var minleft = -200;
var maxleft = 0;
var slider= document.getElementById('slider');

function nextslide(){
  if (currrentleft > minleft){
    currrentleft -= 100;
    slider.style.left = currrentleft + '%';
  }
}
function prevslide(){
  if (currrentleft < maxleft){
    currrentleft += 100;
    slider.style.left = currrentleft + '%';
  }
}
document.getElementById('next').onclick = nextslide;
document.getElementById('prev').onclick = prevslide;