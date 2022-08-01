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
        Player O, assigned an empty array
        Player X, assigned an empty array
    The winner:
        Define what counts as a "win"
            horizontal lines, vertical lines, and diagonal lines. 8 possible.
    A tie
        Define what counts as a tie
Game Play Functions:
    Prompt player O or X to make a choice
    Player selects cell
        listen for that choice using addEventListener, "click"
        log the choice in an array assigned to that particular player
        display choice on board
        switch players
        determine if there is a winner
            contents of either player array matches one of designated win arrays
    Repeat this function until there is a winner or a tie

The end: 
    If either player gets a winning combination,
        Display who the winner is
        Highlight or otherwise change CSS of the cells of the winning combination
        all functions should no longer be running
    If there is a tie
        tie conditions: player O array contains five values and player X array contains four values
        display "it's a tie"
        End all loops and reset
Reset:
    set winner to null
    wipe board
    remove all stored data from the players

