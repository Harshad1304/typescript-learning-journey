// The readonly keyword

// While defing our type we used 'readonly' before our property which is basically what its name is we cannot change that properties value if typescript will give us an error

type User = {
    readonly id : number; // Here readonly is used 
    username: string;
}

const user:User = {
    id:123,
    username:"Harshad"
}

user.id = 123; // Here we are trying to reasign a new value to id property and it is giving us this error "Cannot assign to 'id' because it is a read-only property." 

user.username = "Omkar"; // but our username doenst have a readonly modifer used so we can change it and reasign a new value to that 


/*

Summary:

- The `readonly` modifier makes a property immutable after it's been assigned.
- This helps prevent accidental changes to values that should remain constant throughout the lifetime of the object.
- In our example, `id` is marked as `readonly`, so reassigning a value to it throws an error.
- On the other hand, `username` can be changed because it's not read-only.

🎯 Pro Tip: Use `readonly` for properties like `id`, timestamps, or any values that should never change once assigned.
*/
