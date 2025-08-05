// Multidimensional Arrays


// This is example where we have a array which contains arrays of strings so this is not how we annotate the type for that we need to add another extra array bracket for this 
const board: string [] = [
["x","o","x"],
["x","o","x"],
["x","o","x"],
]


// This is the same example as above but this contains an extra array bracket which is correct way to annotate type for our 2 dimensional array
const boardTwo: string[][] = [
["x","o","x"],
["x","o","x"],
["x","o","x"],

]

/*
Summary:
- Multidimensional arrays (like 2D arrays) require nested type annotations.
- `string[]` is for a one-dimensional array of strings.
- `string[][]` is for a two-dimensional array, where each element is an array of strings.
- TypeScript helps ensure your array structure matches your annotations.

*/
