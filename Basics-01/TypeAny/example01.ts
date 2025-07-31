 let thing: any = "hello";

 thing = 1;

 thing = false;

//  thing();

//  thing.toUpperCase();

// So in "any" type when we declare a variable with this we can assing any value to it typescript will not give us any error notice if u compile above code using "tsc example01.ts" you wont get any error because we have told typescript that this can be any type but it can cause error in runtime when we do "node example01.js"


// Where do we use type annotations example;

let movies = ["Arrival","IronMan", "SpiderMan"];

// let foundMoive; // so here when we have not specifed type for this variable it will be implicitly set to the type "any" and can cause errors for example: foundMovie.upper() or foundMoive = 10; can be set any type of value 

let foundMoive:string;

for (let moive of movies){
    if(moive === "IronMan"){
        foundMoive = moive;
    }
}


//When we don’t specify a type for a variable (like let foundMovie;), TypeScript sets its type to any, which can lead to errors — for example, assigning a number or calling a method that doesn’t exist.
//To prevent this, we can use type annotations. For example: let foundMovie: string;
//This ensures that only string values can be assigned, and TypeScript will catch incorrect usage.

