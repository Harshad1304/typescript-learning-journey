// More syntax

//This is just a syntax for array type annotation

// This is an example of array type annotation using generic syntax
const bools: Array<boolean> = [];

// This is equvalent to example below 

const boolsOne:boolean[]= []; 

// Creating custom types for array 

type Cords = {
    x:number;
    y:number;
} // we created a custom type alias

const countryCords:Cords[]= []; // We used our custom type alias so this array can only contain objects with following properties we have assigned in our type alias

countryCords.push({x:10,y:20}) // this working fine because it fulfills all the required properties

countryCords.push({x:10,y:"20"}) // this gives us error because we are assinging string value to our "y" property 

countryCords.push({y:20}) // This throws an error because it does not fullfil our all requrired properties its missing "x" so we are seeing error


/* 
Summary:
- Arrays can be typed using either `Type[]` or `Array<Type>` syntax.
- Custom object types (e.g., `type Cords`) can be used in arrays for structure validation.
- TypeScript ensures that all required properties exist and have correct types when pushing into typed arrays.
- Errors will appear if any required field is missing or of the wrong type.

*/
