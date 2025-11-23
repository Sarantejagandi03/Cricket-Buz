
let currentRotation=0;

function flipCoin(){

    const coin=document.getElementById("coin-sec");
    let tossResult=document.getElementById("toss-result");
    tossResult.innerText="";

    let spins=Math.floor(Math.random()*10)+15;
    currentRotation+=spins*180;

    coin.style.transform=`rotateY(${currentRotation}deg)`;

    let normalized=currentRotation%360;
    let result=(normalized === 0)?"Heads" :"Tails";

    setTimeout(()=>{
        tossResult.innerText=result;
    },3500);
}

document.getElementById("coin-sec").addEventListener("click",flipCoin);
