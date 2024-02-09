const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var crsr = document.querySelector(".cursor")
var mainevent = document.querySelector(".main")

document.addEventListener("mousemove",function(dets){

    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"

})