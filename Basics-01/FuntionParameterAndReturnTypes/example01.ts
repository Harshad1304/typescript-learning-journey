function square (num){
    // num.toUpperCase() // in this example if u see we dont pass type to our parameter it implecitly sets the type any to our parameter and if we dont define type it will cause errors to us so here is how we can fix it in next example
    return num * num
}

function square2 (num:number):number{
    return num*num
};

// num: number tells TypeScript that the parameter must be a number.

// : number after the function parentheses tells TypeScript the return type is also a number.

// Now, if you try to pass a string or call string methods on num, TypeScript will show an error.

// You can hover over the underline see that our first square function has Parameter 'num' implicitly has an 'any' type, but a better type may be inferred from usage error

//Summary: 
//When you define a function without specifying parameter types, TypeScript infers them as any, which removes type safety.
//Adding type annotations like num: number and return types like : number helps prevent bugs and ensures your function behaves as expected.