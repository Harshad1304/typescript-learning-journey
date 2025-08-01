//"Never" Type annotation  

// when we have a funtion which should never return anything for example

function makeError():void{ // 
    //return null // gives error "strictNullChecks": true // this is likely why you're getting the error but it is allow in lose mode mainly null  should not be there because voi represents the absence of a return value

    // return undefined
    throw new Error("please go away")
}

// If u check hover over the function name you can see that the function have infered type void mean it can be undefine or null(not advisable) like if you type return undefined it wont give an error but when we use never it does give error

function makeAnotherError():never{
    return undefined;

    throw new Error("please go away")
}

// You can see it is giving us error so use this smartly when you need "never" type annotation means function cannot return it is never going to return like a game loop 

function gameLoop():never{
    while(true){
        console.log("Never Stop keeppppp going ")
    }
}

/* 

Summary:

Use never when a function will never return — like one that always throws an error or runs forever.

Trying to return anything (even undefined) in a never-typed function will cause a TypeScript error.

Useful in cases like game loops, error crashers, or fallthroughs that must never finish normally.

IMP

The void return type means that a function doesn’t return anything meaningful.
In strict mode, returning null is not allowed because it's a distinct type from undefined.
However, in loose mode (strictNullChecks: false), returning either null or undefined is allowed — but using null is discouraged because it can lead to confusion or bugs.

*/
