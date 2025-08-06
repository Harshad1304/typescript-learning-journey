// Literal Types
//Literal types are those which allow us to specify the exact value a variable can hold not like normal types we pass 'string' , 'number' etc...


let mood: "Happy" | "Sad"; // we delacred a variable with our special type values "Happy" and "Sad"  

mood = "Happy"; // No error because we are passing expected type value 
mood = "Sad"; // No error because we are passing expected type value 
mood = "bad"; // Error here because we are passing bad as value and type only expecting "Happy" or "Sad" 

// Another example using type aliases

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

let today:DayOfWeek = "Monday";

today = "wed" // this will give us error because we are passing wrong type value;


// Summary:
// - Literal types restrict a variable to a specific value or set of values.
// - Great for cases like mood states, day names, roles, statuses, etc.
// - You can combine literal types with type aliases for cleaner code.
