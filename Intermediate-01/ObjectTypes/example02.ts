// Return types in Object 

let coordinate:{x:number,y:number} = {
    x:10,
    y:20,
}

// In above example we are annotating our object what its types should be its like a structor we are telling typescript that our object expects this properties and types in keyvalue pair so if we try declaring or returning any different properties it will throw us error 

let coordinateTwo:{x:number,y:number} = {
    name:"kalyan",
    x:10,
    y:10,
}

//Above example you can see we are annoting our variable with x and y properties only but when we are assinging a object we are adding name property in that and it gives us error that Object literal may only specify known properties, and name does not exist in type


let coordinateThree:{x:number,y:number} = {
    x:10,
    y:"ten",
}

// In above example we are asigning a string "ten" to a number type y so we can see the error and use case lets see how it works in a function so we get a clearer idea.

function randomCoordinate():{x:number,y:number}{
    return {x:Math.random(),y:Math.random()}
}

// See now this is function cannot return other than x and y and its type should always be number so this wont cause us any errors and helps us to write better functions 

/* 

Summary:

- Object type annotations allow us to define the exact structure and types of properties an object must have.
- TypeScript enforces that only the specified properties can exist (e.g., x and y), and that their values must match the defined types.
- This helps prevent accidental misuse of object shapes and ensures consistent return types from functions.

Using these patterns makes your code safer, more predictable, and easier to maintain.
*/
