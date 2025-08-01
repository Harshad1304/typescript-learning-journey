 let thing: any = "hello";

 thing = 1;

 thing = false;

//  thing();

//  thing.toUpperCase();

// So in "any" type when we declare a variable with this we can assing any value to it. typescript will not give us any error notice if u compile above code using "tsc example01.ts" you wont get any error because we have told typescript that this can be any type but it can cause error in runtime when we do "node example01.js"





//Summary:

//The any type disables type checking for a variable. It allows you to assign any value and call any method without error — but this can lead to runtime bugs.
//Avoid using any unless absolutely necessary. Prefer unknown or proper type annotations for safer code.
