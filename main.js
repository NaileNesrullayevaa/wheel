let whell=document.querySelector(".whell");
let spinBtn=document.querySelector(".spinBtn");
let value=Math.ceil(Math.random() * 3600);
spinBtn.onclick=function(){
    whell.style.transform="rotate(" + value + "deg)";
    value+=Math.ceil(Math.random() * 3600);
}