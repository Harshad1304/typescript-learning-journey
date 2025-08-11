//Interface with Multiple Inheritance.


// We are creating an interface called personFour that has a single property name of type string
interface PersonFour {
name: string;
}


// We are creating an interface called employee that has a single property id of type number
interface Employee {
    readonly id: number;
}


// This is an example of an interface that extends multiple interfaces and also includes its own properties.
interface Manager extends PersonFour, Employee {
    department: string;
    level:string;
    languages: string[];
}

// This is  an example of an interface that extends multiple interfaces without having its own properties.
interface HOD extends Employee, PersonFour{}


// Here we are creating an object of the manager type which includes all the prope rties from the PersonFour and Employee interfaces, as well as its own properties.
const omkar: Manager ={
    department: "Engineering",
    level: "Senior",
    languages: ["JavaScript", "TypeScript"],
    name: "Omkar",
    id: 1,
}

/*
summary:
  🔹 Interfaces can extend multiple other interfaces.
  🔹 The resulting interface contains all properties from the inherited interfaces.
  🔹 Multiple inheritance avoids duplication and keeps code organized.
  🔹 Properties can still be readonly or optional as defined in the base interfaces.
 */
