// const cursd=document.querySelector('#cursor-dot');
// const curso=document.querySelector('#cursor-outline');
document.querySelector('.cross').style.display='none';
document.querySelector('.ham').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo')
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.bar').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }else{
        document.querySelector('.cross').style.display='inline';
        document.querySelector('.bar').style.display='none                                                                                  ';
    }
})    
var main=document.querySelector('#home')
var crsr=document.querySelector('.cursor-dot');
main.addEventListener("mousemove",
function(e){
    crsr.style.left=e.x+"px"
    crsr.style.top=e.y+"px"
})
