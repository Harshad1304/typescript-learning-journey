// Intersection Types


// Regular type alias
type Circle = {
    radius:number;
}

// Regular type alias
type Colorful = {
    color:string;
}

// Below we are using '&' To intersect our two types so its taking both type Aliases properties from our circle and colorful and creating a new type alias name ColorFulCircle
type ColorfulCircle = Circle & Colorful; 


const happyFace:ColorfulCircle = {
    radius:10,
    color:"red"
} // This is the example where we are using the colorfulCirlce type alias 


// Regular type alias
type Cat  = {
    numLives: number;
}

// Regular type alias
type Dog = {
    breed:string;
}

// In this below example we are intersection 2 Cat and dog type as well as we are adding additional inline type age using '&' syntex {age:number} passing it in curly braces like we define noramlly 
type CatDog = Cat & Dog & {
    age:number; 
}

const mixCatDog:CatDog = {
    age:12,
    breed:'Lab',
    numLives:9,
} // In this example we are using those properties and u can see the error next example where we are missing the age property 

const lucyMixed:CatDog = {
    breed:'Lab',
    numLives:9,
}// You can see there is an age property missing in this example we have defined it in our type aliases 

/*
Summary:

- Intersection types allow you to combine multiple type aliases using `&`.
- The new type must satisfy **all** combined types — every required property from each must be present.
- Useful when you want to enforce that an object has multiple characteristics or belongs to multiple categories.
- Example: `type CatDog = Cat & Dog & { age: number }` requires properties from both Cat and Dog, plus an `age`.

🎯 Pro Tip: Use intersection types when merging shape definitions (like mixing behaviors or properties of different objects).
*/