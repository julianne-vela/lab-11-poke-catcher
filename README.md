### Poke Catcher

## HTML Setup
    1. Three clickable images for each pokemon
    3. Results page
        a. Generate a table with # of captures and # of encounters for each pokemon. 


## JS Setup Plan
    1. Load game with three random and unique pokemon.
        a. Generate three random pokemon
        b. Verify they are unique
        c. If not...generate three more until true. 
    2. Increment the 'Encountered' property of each pokemon shown.
        a. On page load. 
        b. For each of the three pokemon
            1. If they've seen the pokemon before, grab it from the DB and increment its 'encountered' property.
            2. If they haven't seen this pokemon yet, initialize a new object for it with 'encountered: 1' and 'captured: 0'.
        c. On-click...
            1. Increment the 'captured' property of the pokemon the user clicks on.
            2. Check how many times they've done this, if less than ten, repeat. 
            3. Once they reach 10 rounds, redirect to results page to review their PokeHaul!




