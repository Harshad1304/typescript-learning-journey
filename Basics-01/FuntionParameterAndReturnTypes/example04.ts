
//Return Type Annotations 

function goodBye (person = "Stranger"){
    return `Bye tata , ${person}! `
}
// As you can see in above function goodbye we have not annotated any return type but if you hover over the function you can see its returning a value which has type of string type script is smart enough to do that implecitly. lets move to our next example ...


function welcome (person:string = "Stranger"):string{
    // return `Welcome, ${person}! `
    return 123
}

//As you can see after the params we have declared a return annotation for our function which is string what if you return a number it will throw you error right away try commenting and uncommenting our code this will solve the issue its currently saying number is not aasignable to type string lets move to our next example...

// Why is it important and good practice to annotate the return type even though typescript is smart enough to do that for you

function sum(a:number,b:number){
    a+b;
}

// In this function we are not getting any error but if you hover over it you can see it is infering it the type "void" which simply means "nothing" 

const multiply=(x:number,y:number):number => {
    x*y;
}

//As you can see now there is an underline below return type anotation "number" , we are getting error "A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value." means the function which is delcared should return a type any, undefined, or void and because of this return type annotation we can avoid such errors in our code. 

// What if a function is returning a string or number or boolean type ?

function driver(age: number){
    if (age < 18) {
        return age.toString();
    } else {
        return true;
    }
}

//if you hover over this function you can see there are multiple type can be expected and typescript implecitly assign them to the return annotation , Like this "fn :string | boolean" TypeScript infers the return type as string | boolean this is union type annotation we will study this in our upcoming days :-) 


/*
Summary: 

TypeScript can infer return types, but it’s good practice to write them explicitly — especially for complex or shared functions.
 
If you declare a return type and don’t return anything (or return the wrong type), TypeScript catches it early.

If a function can return different types, TypeScript will infer a union type (like string | boolean) — we’ll learn more about that soon!
*/