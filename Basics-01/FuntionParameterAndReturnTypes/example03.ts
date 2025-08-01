
// Providing an default value 

function asd (num=10){
    return num
}

//Providing Default value with passing type 

function greet (person:string = "Stranger"){
    return `hi there, ${person}! `
}

function sayBye (person = "Stranger"){
    return `Bye tata , ${person}! `
}

sayBye(1) // In this case the type is infered from the default value we set that is a string type so this is giving us an error

/* 
Summary :
Default parameters let you assign a fallback value in case the caller doesn't provide one.
You can let TypeScript infer the type from the default, or explicitly declare it using type annotations.
This improves code flexibility while maintaining type safety.
*/

