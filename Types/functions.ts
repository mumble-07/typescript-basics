function square(num: number) {
  // num.toUpperCase(); // no error from TS if you don't annotate or infer var num, it has an annotation of any
  return num * num;
}
// adding number will now get as TS error >> num: number
square(3);
// square(true); //Argument of type 'boolean' is not assignable to parameter of type 'number'.ts(2345)
// square('mumble'); //Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)


//can only pass a string
function greet(person: string) {
  // person * person; //The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.ts(2363)
  return 'Hi there, ${person}!'
}

// greet(true); //Argument of type 'boolean' is not assignable to parameter of type 'string'.ts(2345)

//ADDING MANY PARAMETERS

const doSomething = (person: string, age: number, isFunny: boolean) => { };

doSomething("You", 25, 123); //Argument of type 'number' is not assignable to parameter of type 'boolean'.ts(2345)
doSomething("You", 25); //Expected 3 arguments, but got 2.ts(2554)
doSomething("You", 25, true);

//WORKING WITH DEFAULT PARAMETERS

function greetings(person: string = 'stranger') {

  return 'Hi there, ${person}!'
}
// so be either a string or nothing
// Should add default value after the whole annotations
greetings();
greetings('Tommy');

// RETURN TYPE ANNOTATIONS
// A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.ts(2355)
// function cube(num: number):number {
function cube(num: number): number {
  num * num * num;
  return num * num * num;
}

cube(3);

// function random(num: number): string | number
function random(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

// ANONYMOUS FUNCTION CONTEXTUAL TYPINGS
// working with anonymous parameters, typescripts can infer the type of parameter due to context (in this case the color), it knows that it is a string since the context of color array.
const colors = ['red', 'orange', 'yellow'];
colors.map(color => {
  return color.toUpperCase();
})

//VOID
// this function is not to return anything, kaya merong void
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
  return ""; // Type 'string' is not assignable to type 'void'.ts(2322)
}

// NEVER
// void- void returns undefined or null, which is technically a type of value
// never - a function doesn't even finish executing

function makeError(msg: string): never {
  return undefined //Type 'undefined' is not assignable to type 'never'.ts(2322)
  throw new Error(msg)
}
function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING!");
  }
}

