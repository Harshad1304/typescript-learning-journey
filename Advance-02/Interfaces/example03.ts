// Interface Methods 

interface Person{
    readonly id: number;
    frstName: string;
    lastName: string;
    age?: number;
    sayHello:()=> string; // Defining a method using arrow function syntax
   sayBye():string; // method can be defined without arrow function syntax or function keyword
}
// Implementing the interface
// Here we define an object that conforms to the Person interface
// This object must have the properties id, frstName, lastName, and age (optional),
// and it must implement the sayHello and sayBye methods.
const person: Person = {
    id: 1,
    frstName: "John",
    lastName: "Doe",
    age: 25,
    sayHello: ()=>{
        return `Hello`;
    }
    ,
    sayBye:() => {
        return `Bye`;
    }
};

/*
 Summary:
  🔹 Interfaces can define method signatures in two ways:
     1. Using arrow function syntax: sayHello: () => string
     2. Using shorthand syntax: sayBye(): string
 
  🔹 Both approaches are valid — it's a matter of preference.
  🔹 Readonly properties (like id) cannot be changed after initialization.
  🔹 Optional properties (like age) can be omitted.
 
  💡 Interfaces describe the "shape" of an object, including its methods.
 */
