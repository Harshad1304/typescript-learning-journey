//Tuples 

// Tuples are a special type exclusive to typeScript (they dont exist in JavaScript)
// Tuples are arrays of fixed length and ordered with specific types - like  super rigid arrays 

const stuff:string[] = ['hello', 'world'];

const stuffTwo:(string|number)[] = ['hello', 'world',42];

//Tuples are different from arrays in that they have a fixed length and specific types for each index like in order u cannot change its Order 

//Below u can see that first index and second index are number and third index is string so we cannot change the order of the types it has to be in that order 
const color:[number,number,string] = [255, 0, 'red'];

// Below is an example of a tuple where we have all indexes as numbers and and u can see that third index element we are trying to assign a string which is not allowed this will throw an error
// This is because tuples are strict about the types and order of elements
// If you try to assign a value that doesn't match the type or order, TypeScript will throw an error

const colorTwo:[number,number,number] = [255, 0, 'red'];


// In below example we are trying to assign a fourth element to the tuple which is not allowed as when we annotate a tuple with a fixed length in this case we are passing [number, number, number] it means it can only have three elements of type number
// This will also throw an error

const colorThree:[number,number,number] = [255, 0, 255,233];

/* 
Summary:
- Tuples are fixed-length arrays with specific types for each index.
- They enforce strict type and order, unlike regular arrays.
- Attempting to change the order or type of elements in a tuple will result in a TypeScript error.
- Tuples can be useful for representing structured data with a known format.
- They are not available in JavaScript, only in TypeScript.
*/