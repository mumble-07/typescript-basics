//TYPE ANNOTATIONS
var movieTitle = 'Amadeus';
movieTitle = 'Arrival';
// movieTitle = 9; // error: Type 'number' is not assignable to type 'string'.ts(2322)
// movieTitle.upper() //Property 'upper' does not exist on type 'string'.ts(2339)
movieTitle.toUpperCase();
// NUMBERS
var numCatLives = 9;
numCatLives += 1;
// numCatLives = 'zero'; //Property 'upper' does not exist on type 'string'.ts(2339)
// BOOLEAN
var gameOver = false;
gameOver = true;
// gameOver = "true"; //Type 'string' is not assignable to type 'boolean'.ts(2322)
