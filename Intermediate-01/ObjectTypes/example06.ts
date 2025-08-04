// Optional Properties 

// In below example we have used "?" optional syntax after "z" so it will become a option property you dont have to pass it always
// Here, `z` is marked as optional using `?`.
type Cords = {
    x:number;
    y:number;
    z?:number;
}


// This is the example where we dont have any optional properties in our Type Aliases

type CordsTwo = {
    x:number;
    y:number;
    z:number;
}


const myPoint:Cords = {x:12,y:12}; // This is not giving us any error because it has only x and y properties expected to be passed and "z" is optional

const myPointTwo:CordsTwo = {x:12,y:12} // This is giving us error because this needs 'z' to be there is object thats why we are getting error we can simply add a question mark before "z" and this error go away try it  yourself try adding qustion mark after "z" in CordsTwo type alias

/*

Summary:

- We used the `?` symbol in our type alias to define an optional property.
- In `Cords`, the `z` property is optional, so we can omit it when creating an object.
- In `CordsTwo`, all properties are required, so leaving out `z` will result in a TypeScript error.
- Optional properties are useful when certain data may or may not be present and you want to avoid forcing the user to always provide them.

🎯 Pro Tip: Use optional properties to make your object types more flexible and user-friendly.
*/
