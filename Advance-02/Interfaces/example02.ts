// Creating optional properties in interfaces

interface Person{
    readonly id: number; // Readonly property
    frstName: string;
    lastName: string;
    age?: number; // Optional property
}


// in this example age is an optional property.
const person1: Person = {
    id: 1,
    frstName: "John",
    lastName: "Doe",
    // age is not provided, which is valid since it's optional
};

const person2: Person = {
    id: 2,
    frstName: "Jane",
    lastName: "Doe",
    age: 30 // Optional property can be included
};
const person3: Person = {
    id: 3,
    frstName: "Jane",
    lastName: "Doe",
    age: 30 // Optional property can be included
};

person1.frstName = "Omkar"; // No error becaise age can be changed since its not readonly.
person1.id = 2; // This will cause an error because id is readonly and cannot be  changed

/*
 Summary:
  🔹 Optional Property (age?: number):
     - Can be omitted when creating the object.
     - When present, must match the declared type.
 
  🔹 Readonly Property (readonly id: number):
     - Must be set during object creation.
     - Cannot be modified afterward.
 
  💡 Use readonly for values like IDs or constants that must remain unchanged.
 */
