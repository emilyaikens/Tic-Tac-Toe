# Tic-Tac-Toe
First GA Project

Initialize:
        
    1) User sees: 

        *** note: while you should mostly start with js, you will need to code the html and css basics of the board and messaging so that you can test out dom manipulations in js. Basically, you're going to want to "see" the board and instructions.
                
        1.1) empty board

            1.1a) in HTML, 3x3 table, nine cells. Decide whether to use grid or table.

            1.1b) each box, regardless of html type, will need an id "a"-"i"
                
        1.2) prompt: whose turn is it, which variable they are using (x or o). Ex: "It's player X's turn"

        1.3) directions. Ex: "click on a box above to make your selection"
                
        1.3) reset button

Constants and variables: 
    
    2) Current player

         2.1) variable that keeps track of current player, start with playerO

    3) Player data:
        
        3.1) variable to keep track of player O decisions: Player O click log, clicks taken from event listener assigned an empty array plO
        
        3.2) variable to keep track of player X decisions: Player X click log, clicks taken from event listener assigned an empty array plX
    
    4) The winner:

        4.1) Define what counts as a "win" with a constant variable
            
            4.1a) horizontal lines, vertical lines, and diagonal lines. 8 possible combos.

            4.2b) each winning combination will be an array within an object. Use html ids a-i.
    
    5) A tie
        
        5.1) define what counts as a tie

            5.1a) EITHER all squares have been assigned an O or an X

            5.1b) OR, player O has gone 4 times (array length is 4) and player X has gone 3 times (array length is 3). We know this because O is always going to go first. 

Game Play Functions:

    6) Player selects cell 

        6.1) listen for the selection using addEventListener, "click"
        
        6.2) log the choice in an array assigned to the current player
        
        6.3) display choice on board. Player X will be marked with and X, O with an O
        
        6.4) determine if there is a winner
            
            6.4a) contents of either player array matches one of designated win arrays. for loop to "scroll" through arrays. If three of values in the player array are in a winning array, that player has won.
        
        6.5) determine if there is a tie. A separate function, or have it be a constant (section 5)

        6.6) if no win or tie DOM to update message to user, who's turn it is

        6.7)   if no win or tie, switch players (see item 6) and continue until winning or tie conditions have been met.

The end: 
    
    7) If either player gets a winning combination,
        
        7.1) use DOM, change the "it's player x/o's turn" to display who the winner is
    
    8) If there is a tie
        
        8.1) use Dom, change the "" to "it's a tie". Could be outside of a function, see section 5.
        
Reset:

    9) create function for reset button (event listener)
    
        9.1) reset current player to O
    
        9.2) wipe board of X's and O's (DOM return html contents to "")
    
        9.3) remove all stored data from the players arrays

        9.4) return messaging to original "player O turn"

Style

    10) hover selectors (in CSS)

        10.1) change color value of button with hover action

        10.2) change color value of hovered box of table or grid

    11) show winning combo (in JS)

        11.3) within the function that determines winner...

            11.3a) once a winner has been returned, dom change the colors of the cells that contain winning combo. 
            
    12) make it pretty
