const dog={
    name:"Lucy",
    breed:"Lab",
    age: 2,
}
// Above we have a simple object named dog and we are not passing any type annotation to it but u can see typescript has infered its type to the values type we have assinged in key value pair 

dog.age = "12"// Here is an simple example we are trying to reassign the age 12 in string to a number typed key so we are getting eror 


function printName(person:{first:string,last:string}):void{
    console.log(person.first,person.last)
}

// Above is the example when we are passing types inside a function which is taking an object as a parameter 


function printNameTow({firstName,lastName,age}:{firstName:string,lastName:string,age:number}):void{
    console.log(firstName,lastName ,age)
}

// Above is the example when we are passing types inside a function which is taking an object as a parameter but the difference here is in this function we are destructing the object just for ourself to understand it better   


printName({first:'Harshad',}) // Here is the example when we have annotated the types inside our function parameter we get the error that there are some missing values inside that object there are some cases where we dont need all the values to be passed inside a funtion but more on to that we will learn letter for now just search optional type in google u will find the example dont look to much into that just try adding question mark before our type annoting in lastName like this "lastName?:string"

printName({first:'Harshad',last:'Bhoir'})

printNameTow({age:12,lastName:"Babar",firstName:"Omakr"}) // Example for the destructed type function 

/* 
Summary:

- TypeScript can infer object property types automatically based on assigned values.
- We can explicitly annotate object types in function parameters for better control.
- Object destructuring in function parameters can also be annotated with specific types.
- Optional properties can be defined using `?`, allowing flexibility when passing objects.

These patterns help catch bugs early and make the codebase more predictable and readable.
*/