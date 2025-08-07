// Enums assigning custom values


// Here is an example of how to assign custom values to enum members in TypeScript.
enum ServerStatus {
    ONLINE = 200,
    OFFLINE = 404,
    MAINTENANCE = 503,
     UNKNOWN = false, // You cannot add boolean values to an enum, it will throw an error ..You can only add string or number values to an enum
}


// This is a simple example of how to use enums in TypeScript with custom values.
// as u can see we annotating the type of variable with our enum name and also we are using the enum to assign a value to the variable this way variable cannot have any other value than the ones defined in the enum.
const currentStatus:ServerStatus = ServerStatus.ONLINE;



enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",

    // In this example we are mixing string and number values in an enum this is also allowed  we can mix string and number values in an enum
    ERROR= 404,
}

// This is a simple example of how to use enums in TypeScript with string values 
// Nothing great in this example but just to show you how we are using string enums are not different than number this are just constants with string values like const arrowLeft = "left"... but typescript give us the better way of doing that with enums.
const keyPressing = 'left';

if(keyPressing === ArrowKeys.LEFT) {
    console.log("You pressed the left arrow key");
}


/**
  Summary: Enums with Custom Values

 - Enums in TypeScript let us define a set of named constants.
 - Members can have custom values (numbers or strings).
 - Boolean(or any other values only strings and numbers are allowed) values are NOT allowed in enums.
 - `ServerStatus` uses numeric values like HTTP status codes.
 - `ArrowKeys` uses strings for clarity in UI logic.
 - Mixing strings and numbers is allowed but discouraged for consistency.

 🔹 Use enums to make code more readable and maintainable.
 🔹 Prefer string enums in UI code, and number enums for performance or system codes.

*/
