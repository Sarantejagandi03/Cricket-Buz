document.getElementById("user-form").addEventListener('submit',function(event){
    event.preventDefault();
    const userInput=document.getElementById("user-inp").value;
    const battingOrderSpace=document.getElementById("batting-order");
    

    battingOrderSpace.innerHTML=""; //clearing prev input
    let batArray=[]; //arrat of mumns
    for(let i=0;i<userInput;i++){
        batArray.push(i+1);
    }

    // randomizing elements in array
    function getRandomElement(){
        randomNum=batArray[Math.floor(Math.random()*batArray.length)];
        let indexToPop=batArray.indexOf(randomNum);
        if(indexToPop !== -1){
            batArray.splice(indexToPop,1);
        }
        return randomNum;
    }

    // creating and giving order to batting gruids
    let orderNo;
    let text;
    for(let i=1;i<=userInput;i++){
        const batGrid=document.createElement('div');
        const textEle=document.createElement('p');
        textEle.classList.add("hide-text");
        batGrid.id=`bat${i}`;
        batGrid.classList.add("bat-grid");
        orderNo=getRandomElement();
        text=`${orderNo}`;
        textEle.innerText=text;
        batGrid.appendChild(textEle);
        battingOrderSpace.appendChild(batGrid);

    }

    const grids=document.querySelectorAll(".bat-grid");
    grids.forEach(grid=>{
        grid.addEventListener('click',function(){
            grid.classList.add("bat-grid-selected");
            const para=this.querySelector("p");
            para.classList.remove("hide-text");
        })
    })


});



