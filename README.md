# Tic-Tac-Toe
First GA Project

The start:
    User sees:
        empty board
        prompt: whose turn is it, which variable they are using (x or o)
        reset button
Constants and variables: 
    The board:
        3x3 table, nine cells
    The players:
        Player one
        Player two
    The winner:
        Define what counts as a "win"
Game Play Functions:
    Prompt player 1 or 2 to make a choice
    Player selects cell
        listen for that choice using addEventListener, "click"
        log the choice in an array assigned to that particular player
        display choice on board
        determine if there is a winner
    Repeat this function until there is a winner

The end: 
    If either player gets a winning combination,
        Display who the winner is
        Highlight or otherwise change CSS of the cells of the winning combination
        End all loops
Reset:
    set winner to null
    wipe board
    remove all stored data from the players

1) Define required constants

2) Define required variables used to track the state of the game

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

4) Upon loading the app should:
	4.1) Initialize the board array to represent empty squares
        State who's turn it is
        No current winner
	4.2) Render those values to the page
	4.3) Wait for the user to click a square

5) Handle a player clicking a square

6) Handle a player clicking the replay button
