//Anonymous Functions type

const colors = ["red","Orange","yellow"];

// const colors = ["red","Orange","yellow",2]; // Try commenting out this code and see the error and dont forget to comment upper color 

colors.map((color)=>{
    return color.toUpperCase();
}
)

// So basically here what is happening we have map function on our colors and you can hover and see typescript has automatically infers the function param a string type 

colors.map((color:string)=>{
    return color.toUpperCase();
}
)

// But you can always avoid errors by anoting the type to params errors like if there is an array with mixed values like string number boolean there we can annotate type fucntion param 



colors.map((color)=>{

    return color.toFixed(2);
}

)

//In the above example we can see there is an error because colors is a array of strings which is type infered by the typescript so the param is also has type infered string and it is giving us error that this property does not exist on type string 

const mixedData = ["hello", 42, true, null]; // hover and see it has inferd the type like this (string | number | boolean | null)[]; we can explecitly give the type like this see in the below example 

const randomData:(string | number | boolean | null)[] = ["hello", 42, true]; 

// Now map callback inherits the union type automatically

//Using map with a type guard to safely handle different type
mixedData.map(item => {
    // We need to return and type guard them like for string need so extract it to uppercase or lowercase 
    if (item && typeof item === "string") {
        return item.toLowerCase(); // Safe
    }
    return item;
});

//In above example you can see that union type is inferd by the type script and we have handled the returns so there is no errors,TypeScript automatically infers the union type: (string | number | boolean | null)[]
//Inside the .map() callback, we use a type guard (typeof item === "string") to safely manipulate string values.
//Other types are returned without modification.
//This approach ensures type safety and avoids runtime errors.


/*

Summary:

TypeScript can automatically infer the type of parameters in anonymous functions like map() — especially when the array contains uniform types.

You can manually annotate parameter types (e.g., color: string) to make your code more predictable and prevent type mismatches.

If you try to use a method (like .toFixed()) that doesn’t exist on the inferred type (e.g., string), TypeScript will throw an error early.

If the array contains mixed types (e.g., strings and numbers), TypeScript infers a union type (e.g., string | number) and you’ll need to handle both types explicitly in your function retrn like if else syntax .

*/