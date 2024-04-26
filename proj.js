var main=document.querySelector('#home')
var crsr=document.querySelector('.cursor-dot');
main.addEventListener("mousemove",
function(e){
    crsr.style.left=e.x+"px"
    crsr.style.top=e.y+"px"
})
