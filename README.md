# Tic-Tac-Toe
First GA Project

Initialize:
    User sees:
        empty board
        prompt: whose turn is it, which variable they are using (x or o)
        reset button
Constants and variables: 
    The board:
        3x3 table, nine cells
    The players:
        Player one, assigned an empty array
        Player two, assigned an empty array
    The winner:
        Define what counts as a "win"
            horizontal lines, vertical lines, and diagonal lines. 8 possible.
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

