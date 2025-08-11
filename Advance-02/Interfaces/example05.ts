// Reopning an interface   

// Here we are defning an interface called Dog with some properties.
interface Dog {
    name:string;
    age:number;
}

// Here we are reopening the Dog interface to add more properties and methods
// This allows us to extend the existing interface without modifying the original definition.
// Doing this will not cause any errors or conflicts u can add new properties or methods to same interfaces in other files or as well instead of creating a new interface with same properties and adding new properties in that interface
interface Dog{
    breed:string;
    bark(sound:string):string;
}

interface Dog{
      name:number; // this will cause an error becasue we are trying to change the type of name property from string to number this is not allowed in typescript although we can declare the same name property with same type in the reopened interface it won't cause any error.
}

interface Dog{
      name:string; // this will not cause any error as we are delcareing same name property with same type in the reopened interface.
}


// Eaxmple of Using the reopened interface this is required all properties to be there in the object becasue we are using our Dog interface which has all the properties defined.
// If we don't provide all the properties then it will cause an error.
const lucy:Dog = {
    name: "Lucy",
    age:10,
    breed:"Labrador",
    bark(sound){
        return `Woof! ${sound}.`;
    }
}


// We are getting error because we are not using the bark method which is defined in the Dog interface. 
const max:Dog = {
    name: "Max",
    age: 5,
    breed: "Beagle",

}

// Example of using the reopened interface
console.log(lucy.bark("Oweeee"))


/*
Summary:
  🔹 TypeScript allows "reopening" interfaces — defining the same interface multiple times.
  🔹 Properties/methods from all definitions are merged together.
  🔹 You can add new properties/methods without modifying the original definition.
  🔹 You cannot change the type of an existing property when reopening — doing so causes an error.
  🔹 Reopening works across different files as well.
 */