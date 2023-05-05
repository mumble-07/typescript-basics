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

