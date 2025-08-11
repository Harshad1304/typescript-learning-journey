// Type Aliases vs Interfaces.

// Wit Interface we cannot define a type for single value like string, number, boolean, etc.
// But with type alias we can define a type for single value like string, number, boolean, etc.
type Color = "red" | "green" | "blue";

// With type alias we cannot reopen the type alise to add more properties or methods like we can do with interfaces for e.g

type Color = "red" | "green" | "blue"; // This will cause an error because we cannot reopen the type alias to add more properties or methods but with interfaces we can do that 

// Example of reopening an interface and adding more properties and methods
interface Game {
    name: string;
}

interface Game {
    price: number;
}

// Also Interfaces can only decribes objects and its properties type
// But type aliases can describe objects, arrays, functions, and even primitive types.

// In interfaces we can use extends to inherit properties from other interfaces for e.g

interface Mario extends Game {
    platform: "Nintendo" | "PC" | "Mobile";
}

// But with type aliases we can use intersection types to achieve the same thing for e.g

type GTA = Game & {
    ageRating: "E" | "T" | "M";
}

const guesstheTheGame: GTA = {
    ageRating: "M",
    name: "GTA V",
    price: 59.99,
}


/*
Summary:
  🔹 Type Alias:
     - Can represent primitives, objects, unions, intersections, functions, etc.
     - Cannot be reopened once defined.
 
  🔹 Interface:
     - Describes the shape of objects.
     - Can be reopened and extended.
     - Supports 'extends' for inheritance.
 
  🔹 Intersection Types (type alias) ≈ 'extends' (interface)
 */



/*
 RULE OF THUMB
 ✅ Use INTERFACE when:
 - You are defining the shape of an object or class
 - You want declaration merging or library augmentation
 - The type will be extended often

 ✅ Use TYPE when:
 - You need union types, primitives, or intersections
 - You want to combine many types (objects, arrays, functions)
 - You want to use mapped or conditional types

 */