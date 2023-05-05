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