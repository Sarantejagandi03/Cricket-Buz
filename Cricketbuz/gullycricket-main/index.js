
const features=document.querySelectorAll(".feature");
const colors=["#77BEF0","#EA5B6F","#FFCB61"]
let index=0;
features.forEach(feature=>{
    feature.style.backgroundColor=colors[index];
    index=(index+1)%colors.length;

});



// toss page redirect
document.getElementById("toss").addEventListener('click',function(){
    window.location.href="toss.html";
})

document.getElementById("batting-order").addEventListener('click',function(){
    window.location.href="batting.html";
})