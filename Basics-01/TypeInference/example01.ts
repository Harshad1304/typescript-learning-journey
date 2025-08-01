let tvShow = "How i met your mother"; 

tvShow = "Friends";  //You can reassign it to another string ✅

// tvShow = 1; //But you cannot reassign it to a number, boolean, or any other type ❌... This will give us error because typescript automatically sets the type of our variable to string when we declared it with some value if we declare it with a number throught out the entire code the type for value of that variable will be number it cannot be cahnged typescript inferes it ....TypeScript automatically infers the type of tvShow as string because the initial value is a string.


// In simple words 

//TypeScript automatically sets the type of a variable based on the initial value. If you assign a string when declaring a variable, its type becomes string, and you can't change it to a different type like number later. This is called type inference. 


//-------------------------------------------

// But it is not neccesery to give types always to a variable but in some cases you have to give type to a variable so it doenst cause any error for example 

// Where do we use type annotations example;

let movies = ["Arrival","IronMan", "SpiderMan"];

// let foundMoive; // so here when we have not specifed type for this variable it will be implicitly set to the type "any" and can cause errors for example: foundMovie.upper() or foundMoive = 10;  we can set anytype of value to it will not get any error 

let foundMoive:string;

for (let moive of movies){
    if(moive === "IronMan"){
        foundMoive = moive;
    }
}


//When we don’t specify a type for a variable (like let foundMovie;), TypeScript sets its type to any, which can lead to errors — for example, assigning a number or calling a method that doesn’t exist.
//To prevent this, we can use type annotations. For example: let foundMovie: string;
//This ensures that only string values can be assigned, and TypeScript will catch incorrect usage.


//Summary:

// You don’t always need to add type annotations — TypeScript can infer types in many cases.
//But when a variable is declared without a value, it’s safest to provide a type. Otherwise, TypeScript sets it to any, and we lose type checking.
//Use annotations like let foundMovie: string to keep your code safe and avoid unexpected bugs.