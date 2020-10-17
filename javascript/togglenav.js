
  
document.addEventListener("DOMContentLoaded",function(){
let toggleNav=function(){
   const nav=document.querySelector(".nav");
        nav.classList.toggle("collapse");
}
const toggleCollapse=document.querySelector('.toggle-collapse');
toggleCollapse.addEventListener('click',toggleNav);

});

