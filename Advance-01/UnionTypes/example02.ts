// Union Types Using functions 


// We are using type in our function param we can pass union type in our function param aswell see example below
function printAge (age:number|string):void{
    console.log(`You are ${age} Years old`);
}

printAge(24); // using  number 
printAge("25"); // using string



// Type narrowing 

// What is type narrowing ?
// - Type narrowing is the process TypeScript uses to refine a broad or union type (like string | number) down to a more specific type based on runtime checks.

/* function calculateTax(price:number|string, tax:number):number{
    return price * tax
};
 */

function calculateTax(price:number|string, tax:number){
    // Here we are checking that is our typeof price is string if its string we are replacing our $ doller sign and reassigning to our variable and then returing it with added tax this is a samll example of how type narrowing works.
    if(typeof price === "string"){
    price = parseFloat(price.replace("$",""))
    }

    return price * tax
};

console.log(calculateTax("$125",0.18));
console.log(calculateTax(12,0.18));


// Summary:
// - Union types can be passed to functions as parameters.
// - Used `number | string` to allow flexibility in input.
// - Introduced **type narrowing** to safely handle different types at runtime.
// - Used `typeof` to check and convert string price into number inside the `calculateTax` function.
