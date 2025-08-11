// Extending Interfaces


// This a simple interface for a Vehicle 
interface Vehicle{
    make: string;
    model: string;
    year: number;
    hornSound(sound:string): string;
}

// This is where we are creating a new interface Car that extends the Vehicle interface

interface Car extends Vehicle{

    carType: "Sedan" | "SUV" | "Truck"; // This is a union type for carType property

}

// Here we are using the above extended Interface Car to create an object

// here u can see that we are using the Car interface which has all the properties of vehicle interface and also has its own property carType. Its easy for us to create a new interface that extends the existing interface and add new properties to that instead of creating a new interface with all the properties of the existing interface and adding new properties to that interface.

const bmwM1:Car ={
    carType: "SUV",
    hornSound(sound:string){
        return `The car horn sounds like: ${sound}`;
    },
    make: "BMW",
    model: "M1",
    year: 2023,
}


/*
Summary:
 🔹 `extends` allows an interface to inherit properties/methods from another interface.
 🔹 The extended interface has all the properties of the parent + any new ones defined.
 🔹 This helps avoid repeating code when creating similar interfaces.
 🔹 Works with multiple levels of extension as well (e.g., Truck extends Car extends Vehicle) will see this example in next example07.
 */
