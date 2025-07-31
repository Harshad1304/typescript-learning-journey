var movieTitle = "Amadeus";
movieTitle = "Arrival";
movieTitle = "hello";
// if we assign a any other type value for example number like this 
// moiveTitle = 9 // This will give us error and tell us that we are trying to add type number to string although even after compiling this code will give us error in CLI but it will still run using node file.js because typescript only gives us error pre runtime like in code editor it shows without compiling the code 
movieTitle.upper(); // If we do this then youll also see an error that this property doesnot exist on string typescript knows what properties are there 
