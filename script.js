document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

});

});

window.addEventListener("scroll",()=>{

document.querySelector(".logo").style.textShadow=
`0 0 ${window.scrollY/8}px cyan`;

});
