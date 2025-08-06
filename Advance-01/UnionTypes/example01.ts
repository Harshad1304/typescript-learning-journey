// Union type

// this is where we are annotating number type to "year" variable
let year:number=2001;


// in union type we can assign mutliple types to our variable it can be string or number or boolean like we are doing it in next example try changing 21 to string "21" and see you wil not see any error

let age:number|string=21;

age = 23;
age = "24"



// We can create a type alias and use it as union type and pass it to a function any variable it has following syntax
// Using Type alias 
type Point = {
    x:number;
    y:number;
}

type Loc = {
    lat:number;
    long:number;
}

let coordinates:Point|Loc = {y:1,x:2};

coordinates = {lat:1230.203, long:123210.423};


// Theres a problem when we do this in union type typescript gives us error because we dont know what is the type is going to be for our arg it can be cords or it can be Loc we need to do some conditional checks for that to work which we will see in next exampl02
function printCords(cords:Point|Loc):void{
    console.log(cords.x)
} 

// Summary:
// - Union types allow a variable to hold values of multiple types (`number | string`)
// - Created custom types `Point` and `Loc`
// - Assigned a variable with a union of those two types
// - Union types need **type narrowing** (like conditional checks) before accessing specific properties