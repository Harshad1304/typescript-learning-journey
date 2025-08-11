//Interfaces 

//Interfaces are simiar to type aliases.

// For e.g
type Point = {
    x: number;
    y: number;
}

const pt: Point = {
    x: 10,
    y: 20
}

// interfaces allow us to define the shape of an object only object.

// Here is an example of an interface:

// We can use interfaces to define the shape of an object.
// This is the interface syntax.
interface PointInterface {
    x: number;
    y: number;
}

// We can create an object that conforms to this interface.
// This object must have the properties x and y, both of type number.
const ptInterface : PointInterface ={
    x: 10,
    y: 20
};


/*
  Summary:
  
  🔹 Type Alias:
    - Can describe objects, primitives, unions, intersections, etc.
    - More flexible in defining different kinds of types.
 
  🔹 Interface:
    - Can only describe the shape of an object.
 
  💡 Both can be used to define objects.
  - Prefer `interface` for object shapes.
  - Prefer `type` for unions, primitives, or when flexibility is needed.
 */
