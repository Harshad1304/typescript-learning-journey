// More on tuples mixed type  

// Here we define a tuple type for an HTTP response
type HTTPResponse = [number, string];

// This tuple will always have a  number as first element and string as second element

const goodRes:HTTPResponse = [200,"OK"];


goodRes[0] = "201"; // We are trying to assign a string to a number type, which will cause an error 
goodRes.push("newProp"); // but as we know that the above tuple is fixed in size and we are trying to push a new property, this should also cause an error but its not giving us an error this is how typescript works with tuples;
// also u can see that we are removing the elements from the tuple using pop method, which is also not giving us an error, this is how typescript works with tuples
goodRes.pop();
goodRes.pop();
goodRes.pop();
goodRes.pop();
goodRes.pop();

// Despite removing all elements above, the variable is still considered valid.

// However, if you try to directly assign an empty array to a tuple-typed variable,typescript will throw an error.

// This should demontrate that after popping all elements, the tuple is still considered valid but as we can see when we annotate the type HTTPResponse to our new variable below we can see that it is empty and giving us an error while we are using goodRes.pop() method and removing all elements from the tuple is not. 
const badRes:HTTPResponse = []

/*
 Summary: Tuples with Mixed Types
 
 - Tuples allow strict control over the number and types of elements in a fixed order.
 - TypeScript enforces types during assignment (e.g., [number, string]).
 - However, mutation methods like `.push()` and `.pop()` still work at runtime.
 - This can lead to confusing scenarios where tuples behave like normal arrays.
 - Direct assignment of an empty array to a tuple will throw a compile-time error.
 
 */
