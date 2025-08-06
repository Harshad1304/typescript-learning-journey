//Array using union Types


// Below u can see we have an array with type any which means we can put any types of values inside our array  
const items: any[] = [12,true,"asd",[12,23],{x:12,y:32}]; 


//  This means 'stuff' can either be a single number OR an array of strings
const stuff1: number | string[] = ["12",12,];
// Error: [12, "12", 13, "Harshad"] is neither a single number nor a string array.
// It's a mixed array, so this type is incorrect.

//  This means 'stuff' can either be an array of numbers OR an array of strings
const stuff2: number[] | string[] = [12, "12", 13, "Harshad"];
// Error: [12, "12", 13, "Harshad"] contains both numbers and strings
// TypeScript expects the entire array to be either all numbers or all strings — not both.

//  This means 'stuff' is an array where each element can be a number or a string
const stuff3: (number | string)[] = [12, "12", 13, "Harshad"];
// This is the correct way to define a mixed array of numbers and strings   

// Summary:
// - `any[]` allows anything inside the array, but removes type safety.
// - `number | string[]` = either a number OR an array of strings.
// - `number[] | string[]` = either all numbers OR all strings — NOT both.
// - `(number | string)[]` =  correct way to allow mixed-type elements in an array.