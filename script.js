//Get User Input In ButtonS
let boxes = document.querySelectorAll(".box");
let audioTurn = new Audio("sound.mp3")
let X = true;
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(X){
            box.innerText = "X";
            msg.innerText = "Turn for Player 2";
            audioTurn.play();
            X = false;
        }else{
            box.innerText = "O";
            msg.innerText = "Turn for Player 1";
            audioTurn.play();
            X = true;
        }
        //disable button once Clicked 
        box.disabled = true;
        //check for Winner
        checkWinner();
    });
});


//check winner function

//.....winning Pattern
const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

//.....check conditions
const checkWinner = () =>{

    for(let pattern of winningPattern){
        let condition1 = boxes[pattern[0]].innerText;
        let condition2 = boxes[pattern[1]].innerText;
        let condition3 = boxes[pattern[2]].innerText;


        if(condition1 === condition2 && condition2 === condition3 && condition1 != ''){
            displayWinner(condition1);
        }
    }
};

//...display winning Message
let msg = document.getElementById("msg");
const displayWinner = (value)=>{

    if(value === 'X'){
        msg.innerText = "CONGRATULATION \n Player 1 is winner";
    }else{
        msg.innerText = "CONGRATULATION \n Player 2 is winner";
    }
    //....disable button from screen
    disabledAllBtn();
};

//...function for disable Button
const disabledAllBtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};


// Reset function
let reset = document.getElementById("reset");

reset.onclick = () =>{
    boxes.forEach((box) =>{
        msg.innerText = "Turn for Player 1";
        box.innerText = "";
        box.disabled = false;
    });
    X = true;
};