//TYPE ANNOTATIONS

let movieTitle: string = 'Amadeus';
movieTitle = 'Arrival';
// movieTitle = 9; // error: Type 'number' is not assignable to type 'string'.ts(2322)
// movieTitle.upper() //Property 'upper' does not exist on type 'string'.ts(2339)
movieTitle.toUpperCase();

// NUMBERS

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = 'zero'; //Property 'upper' does not exist on type 'string'.ts(2339)

// BOOLEAN

let gameOver: boolean = false;
gameOver = true;
// gameOver = "true"; //Type 'string' is not assignable to type 'boolean'.ts(2322)


// TYPE INTERFERENCE
// Typescript can infer the type without adding annotations

let tvShow = 'Doctow Who?'; //typescript knows it's a string >> let tvShow: string
tvShow = 'The 100';
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = 1; // Type 'number' is not assignable to type 'boolean'.ts(2322)

//THE ANY TYPE
// the any type, use it sparingly
// any type disregards the use of annotation and types and interference

// let thing: any = 'hello';
// thing = 1;
// thing = false;
// thing();
// thing.toUpperCase()

let thing = "hello";
thing(); //This expression is not callable. Type 'String' has no call signatures.ts(2349)

//DELAYED INITIALIZATION & IMPLICIT ANY
const movies = ['Hour', 'The Thing', 'Amadeus']
let foundMovie: string;

for (let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = 'Amadeus';
  }
}
