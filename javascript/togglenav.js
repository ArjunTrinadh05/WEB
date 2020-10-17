
    let numAnimation=function(id){
    let element=document.getElementById(id);
    let value=element.innerHTML;
    let temp=parseInt(value);
    let index=0;
    let interval=setInterval(function(){
        index=index+parseInt(temp/50);
        if(temp<=index){
            if(temp!=NaN){
            element.innerHTML=temp;}
            clearInterval(interval);
        }
        else{
        element.innerHTML=index;
        }
   },100);
}
document.addEventListener("DOMContentLoaded",function(){
let toggleNav=function(){
   const nav=document.querySelector(".nav");
        nav.classList.toggle("collapse");
}
const toggleCollapse=document.querySelector('.toggle-collapse');
toggleCollapse.addEventListener('click',toggleNav);

});
let test=setInterval(function() {
    let element=document.getElementById('deaths');
    let value=element.innerHTML;
    let temp=parseInt(value);
    if(temp!=NaN){
        numAnimation('deaths');
        numAnimation('positivecases');
        numAnimation('discharged');
        clearInterval(test);
    }

},400);
