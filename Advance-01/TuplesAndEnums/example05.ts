
// Here we define a enum and there is another enum we have defined using const keyword OldOrder u can see our complied code in files "example05.js" what is the difference between these two enums the one which is defined without const keyword has a lot of code generated after compilation but the one which is defined with const keyword has no code generated after compilation this is the main difference between these two enums 

enum NewOrder {
    PENDING,
    APPROVED,
    REJECTED,
    DELIVERED,
}

// Const Enum - Does NOT generate code after compilation
// This will not generate any code in the compiled JavaScript file
const enum OldOrder {
    PENDING,
    APPROVED,
    REJECTED,
    DELIVERED,
}


// This is a example where we used our enum here u can see in complied code that this uses object.value..  compiled JavaScript will reference NewOrder object
const order1 = {
    id: new Date().getTime(),
    status: NewOrder.PENDING,
}


// This is a example where we used our enum here u can see in complied code that this uses direct value of the enum.. compiled JavaScript will inline the value directly
const ordertwo = {
    id: new Date().getTime() + 1,
    status: OldOrder.REJECTED,
}



/*
 Summary: `enum` vs `const enum`
    `enum NewOrder`:
 - Compiles into a full JavaScript object.
 - Generates more code.
 - Useful when you need reverse mapping (e.g., `NewOrder[0] => "PENDING"`).
  `const enum OldOrder`:
 - Compiles into inline values only.
 - Does NOT generate extra code.
 - Reduces bundle size.
 - Cannot use reverse mapping (e.g., `OldOrder[0]` won't work).
 
  Use `const enum` when:
   You only need the values and don’t need the enum object at runtime.
   You want smaller, faster code with no runtime overhead.
 */