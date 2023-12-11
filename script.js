let board = ["", "", "", "", "", "", "", "", ""];

let currentPlayer ="X";

//get allthe cell onthe game board
let cell =document.querySelectorAll(".cell");

//get the reset button and meassge
let resetButton =document.querySelector('#reset');

let meassgeElement =document.querySelector('#message');

//Add event listner to each cell

cell.forEach((cell, index) =>{
    cell.addEventListener("click" , () => {

        //check cel if cell is all redy ocuppied or game is over
        if (board[index] === ""&&
        !isGameOver()){
            board[index] = currentPlayer;
            cell.classList.add
            (currentPlayer.toLowerCase());
            cell.innerHTML =currentPlayer;

            //check if the game is over after current move

            if(isGameOver()){
                meassgeElement.innerHTML = 
                currentPlayer + "wins!";
                cell.forEach((cell) => cell.
                removeEventListener("click",
                handleCellClick));
            }else if(!board.includes("")){
                //update the meassage if the game is draw
                meassgeElement.innerHTML=
                "It's a draw!";
            }else{
                currentPlayer = 
                currentPlayer == "X" ?
                "o" : "X";
                meassgeElement.innerHTML =
                currentPlayer +" 's turn"

            }
        }

    });
});

resetButton.addEventListener("click",() => {
    board = ["", "", "", "", "", "", "", "", ""];

    currentPlayer ="X";
    cell.forEach((cell) => {
        cell.classList.remove("x" , "o" );
        cell.innerHTML ="";
    });

    meassgeElement.innerHTML ="X'x turn";
    cell.forEach((cell) => cell.addEventListener("click",
    handleCellClick));

 })



//check the game status and winner posiable 

function isGameOver (){

    //define the posiable wining combimation 
    
    const winningCombo = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ];

    return winningCombo.some((combo) => {
        return(
            board[combo[0]] !== ""&&
            board[combo[0]] === board
            [combo[1]]&&
            board[combo[1]]  === board
            [combo[2]]
        );
    });
}

function handleCellClick(){
    console.log("cell clicked");
}
