//enums

// Note: Enums are a TypeScript feature — they do not exist in JavaScript by default.


// They are a TypeScript feature that compiles down to JavaScript objects.

// This is the tradionational way of defining constants in JavaScript
const PENDING = 100;
const APPROVED = 200;
const REJECTED = 300;

const stats = 100;

if(stats === PENDING) {
    console.log("Pending");
}else if(stats === APPROVED) {
    console.log("Approved");
}

// This appoach works, but it can be hard to manage as the number of constants grows. also this doesnt give us any type checking or autocompletion in editors.


//Enums provide a way to define named constants, making code more readable and maintainable.

// Typescript Enums provide us a safer and cleaner alternative they allow us to define named constants improving code readability and maintainability.

// Here we define an enum for order statuses
enum OrderStatus {
    DELIVERED, // 0 default value starts from 0 and increments by 1 we can also assign custom values if needed we will see that in next example04
    PENDING,   // 1
    APPROVED,  // 2
    REJECTED   // 3
}   
   

// By default, enum members are assigned numeric values starting from 0
// You can also manually assign custom values if needed.

const myStatus = OrderStatus.DELIVERED

function isDelivered(status:OrderStatus):boolean{
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.DELIVERED); // true
isDelivered(OrderStatus.PENDING); // false



/**
 Summary: Enums in TypeScript

- Enums let you define a set of named constants.
- They improve code readability and reduce the need for magic numbers.
- By default, values start from 0 and increment by 1.
- You can also assign custom values: e.g., `DELIVERED = 100`.
- Enums support type checking and IntelliSense in editors.

 */