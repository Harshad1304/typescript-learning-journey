
// inteface method parameter

// This is an example of interface where we define a method with a parameter and assinged a type to that parameter

interface Products {
    name: string;
    price: number;
    applyDiscount(dsiscount: number): number;
}

const shoes: Products = {
    name: "Running Shoes",
    price: 100,
    applyDiscount(amount:number): number {  // inside function parameter amount:number is not needed if we have already defined it in the interface , but it's good practice to keep it for clarity typescript will infer the type from the interface.
        return this.price - amount;
    }
}  

// Here we are calling the applyDiscount method with a string argument which is not allowed becasue we are expecting a number as per the interface definitation.
shoes.applyDiscount("some string"); // This will cause an error because the argument must be a number.

shoes.applyDiscount(20) // this will work fine becasue we are passing  a number as per the interface definition

/*
Summary:
  🔹 Interfaces can define method parameters and their types.
  🔹 TypeScript will enforce these types whenever the method is called.
  🔹 Re-declaring parameter types inside the method implementation is optional
     but improves readability.
  🔹 Passing a value of the wrong type will cause a compile-time error.
 */
