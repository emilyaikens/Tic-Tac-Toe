let plO = []; //player O - always goes first
let plX = []; //player X
let playerID = "O";
const winCond = [
 //horizontal wins 
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
 //vertical wins
  ["a", "d", "g"],
  ["b", "e", "h"],
  ["c", "f", "i"],
 //diagonal wins
  ["a", "e", "i"],
  ["c", "e", "g"]
];

function playerSelect(clickedBox) {       //user input: when player clicks on box
   let clickResult = clickedBox.target.getAttribute("id");    // pulls id of clicked box (a,b,c etc) from doc
   if (clickedBox.target.innerHTML !== "X" && clickedBox.target.innerHTML !== "O") {
    clickedBox.target.innerHTML = playerID;                                                                    
    if (playerID === "X") { 
      plX.push(clickResult);           // adds id of clicked box to player array (data)
      playerID = "O";          // updates player ID (data)
      plTurn.innerHTML = "It's player O's turn";     // updates player ID on display     
    } else if (playerID === "O") {
      plO.push(clickResult);
      playerID = "X";     
      plTurn.innerHTML = "It's player X's turn";
    };
};  
  checkTie();
  checkWinner();
};  

function checkTie () {              // checks for tie
    if (plO.length === 5 && plX.length === 4) {    //tie conditions
       plTurn.innerHTML = "It's a tie";
    } 
};

function checkWinner () {        // checks for winner
  for (let i = 0; i < winCond.length; i++) {       //loop through winning conditions array
    let countO = 0;
    for (let o = 0; o < plO.length; o++) {         //loop through player O's array values
      if (winCond[i].includes(plO[o])) {           //if pl value matches a value in the wincond array, count 1
        countO += 1;} };  
    if (countO === 3) {                             //if 3 of pl values match a wincond array, they've won
      plTurn.innerHTML = "Player O wins!"; 
      winCond[i].forEach(value => 
        document.getElementById(value).style.backgroundColor = "#e57373");  //change the background color of box that has been picked
    };
    let countX = 0;
    for (let x = 0; x < plX.length; x++) {
      if (winCond[i].includes(plX[x])) {
        countX += 1;} };
    if (countX === 3) {
      plTurn.innerHTML = "Player X wins!"; 
      winCond[i].forEach(value => 
        document.getElementById(value).style.backgroundColor = "#e57373");
    };
  };
};

function reset () {         // user input: reset the game using the reset button
  playerID = "O";
  plTurn.innerHTML = "It's player O's turn";
  plO = [];
  plX = [];
  allBoxes.forEach(box => {        //remove X's and O's from the boxes
    box.innerHTML = "";            //reset background color of boxes
    box.style.backgroundColor = "#ef9a9a" 
  }); 
}; 

//DOM consts         
const allBoxes = document.querySelectorAll(".box");                       // selects all boxes
allBoxes.forEach(box => {box.addEventListener("click", playerSelect)});   //event listener for click on any class "box"      
let plTurn = document.getElementById("turn");                             //selects "It's player __'s turn"
document.querySelector("button").addEventListener("click", reset);        //event listener for reset button
