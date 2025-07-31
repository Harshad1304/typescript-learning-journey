let tvShow = "How i met your mother"; 

tvShow = "Friends";  //You can reassign it to another string ✅

// tvShow = 1; //But you cannot reassign it to a number, boolean, or any other type ❌... This will give us error because typescript automatically sets the type of our variable to string when we declared it with some value if we declare it with a number throught out the entire code the type for value of that coe will be number it cannot be cahnged typescript inferes it ....TypeScript automatically infers the type of tvShow as string because the initial value is a string.


// In simple words 

//TypeScript automatically sets the type of a variable based on the initial value. If you assign a string when declaring a variable, its type becomes string, and you can't change it to a different type like number later. This is called type inference. 