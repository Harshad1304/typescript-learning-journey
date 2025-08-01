const doSomething = (person: string, age: number, isFunny: boolean) => {
    return `${person} ${age} ${isFunny}`
}

doSomething("Shantaram", 23, false);
 // it is not giving any error because all three arguments we passed are in correct sequance and type 
doSomething("Shantaram", false);
// if you notice we have one argument missing here so typescript is giving us error that expected 3 arguments but got 2 and also it will tell us that which argument is missing 
doSomething("Shantaram", 23, 'hehe');
//Here we can see we are passing all three arguments but the last argument which expects boolean value but we are passing a string and type script is giving us an error 


//Summary: 

/*
When you define parameter types in TypeScript, the compiler checks that:

All required arguments are passed

The arguments are in the correct order

Each one is the correct type

This helps prevent runtime bugs and makes functions much safer to use

*/