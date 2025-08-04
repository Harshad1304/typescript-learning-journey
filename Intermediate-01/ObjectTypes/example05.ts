//Nested Objects

// This is where we are first creating a type aliases for our functions which includes a nested object where we are passing type for nested properties as well this is the best practice when we have to pass a complicated object inside a function as argument if we type all this inside function parameter first it gets so messy and creates confusion to understand and its not a good practice  we always create type aliases for objects 
type Song = {
    id:string;
    title: string;
    numberOfPlays: number;
    artist:{name:string; genre:string; country:string};
 }


// This is a object we are going to pass inside our function we can add type here also if we want 
const spotifySong:Song = { // :Song is how we can pass the type 
  id: "song_001",
  title: "Blinding Lights",
  numberOfPlays: 10200,
  artist: {
    name: "The Weeknd",
    genre: "Synth-pop",
    country: "Canada"
  }
}

// Without type Aliases

/* function calculatePayout(song:{id:string,title:string,numberOfPlays:number,artist:{name:string,genre:string,country:string}}):number{

 return Number(Math.floor(song.numberOfPlays * 0.344).toFixed(2))
}

 */
//Above function is the example where we are annoting all the types inside our function parameter and as you can see its already very hard to read even for such small object imaging you have to pass more proerties it gets messier also its not going to be reusable , when we create type aliases we can resuse that type aliases anywher in our code.

// With type Aliases

function calculatePayout(song:Song):number{

 return Number(Math.floor(song.numberOfPlays * 0.344).toFixed(2))
}

// The above function is the same function we have commented our where we are annotating types inside our function params



function printSong(song:Song):string {
 return `Song ID: ${song.id}
Title: ${song.titly}
NumberOfPlays: ${song.numberOfPlays}
Artist: ${song.artist.name}
Genre: ${song.artist.genre}
Country: ${song.artist.country}`;
}

/* As you can see in above example there is an error that 
- "Property 'titly' does not exist on type 'Song'. Did you mean 'title'?ts(2551)
example05.ts(6, 5): 'title' is declared here."
- "Property titly does not exist on type . Did you mean title"

this just for you to understand that using types like this help us to identify whats wrong in our code if you do this in javascript youll not get any error at all if you complie and run this code in JS enviroment youll not see any error this will print Title:undefined but this small spelling mistakes typescripts give rightaway and saves our time 

 */
 
console.log(printSong(spotifySong))

/*

Summary:

- We used `type` to define a nested object structure for a Song, including details like artist name, genre, and country.
- This approach keeps our code clean, especially in function parameters, where writing inline types for nested objects can get messy.
- Reusing the `Song` type in multiple functions makes our code more readable and maintainable.
- TypeScript also catches errors like property name typos (`titly` vs. `title`) during development — a big advantage over plain JavaScript.

🎯 Pro Tip: Always use type aliases for complex objects instead of inline typing in functions. It improves code clarity and reduces bugs.
*/