// Annotating return type void 

function printTwice (msg:string){
     console.log(msg)
    console.log(msg)
}

// If you hover over the function u see there typescript has infered the type void to this function becasue it is not returning anything but when it is usefull ?

//Here is another example where we are annotating the type void for a function which is not returning anything 

function printOnce (msg:string):void{
    // return msg
    console.log(msg)
}

// if u uncomment return statement you will see an error that this function Type 'string' is not assignable to type 'void' because we have annotated the type void so we cannot return anything this avoids causing errors where u accidently return something becasue of your habbit of write code this avoids bugs 

/* 
Summary:

Use void when a function doesn’t return anything.

TypeScript infers void by default if there’s no return, but annotating it can prevent accidental bugs.

Returning a value from a void-annotated function will throw a type error.

*/