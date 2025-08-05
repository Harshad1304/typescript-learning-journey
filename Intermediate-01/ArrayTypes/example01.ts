// Array types

const activeUsers:[] = []
// Here is a simple syntax we are definig our types for the array but if u notice we have only annotated [] brackets but we have to specify the type like its a string or a number etc if we dont pass any type for our array typescript is going to consider that array should be empty with no values u cannot add any value in that array when we annotate with a empty array [] this tells typescript array can never have any elements — it’s a tuple of length 0.

activeUsers.push('Harshad') // We can see we are getting an error when we are trying to push a value inside a array which type is set to be an empty

const oldUsers = [] // Here we have annotated nothing to our array but typescript will infer its type to never (it depends if we have strictnull checks on in our ts config ) so this is going to be same as annoting a empty [] array brackets as type this will not have any elements and it going to be length of 0 by default but this array can accept values which has type of "never" so but there are no sucn values which can be a type of never so it behaves similer to "const oldUsers:[] = []"

oldUsers.push('Harshad') // When we adding any value in this array we are getting this error but if we do "const oldUsers:any[] = []" pass an any type like this the error will be gone then u can add any type of value inside this array 

const inactiveUsers: string[] = ["Omkar"]; // This is where we are annotating it with a type of array which can contain only  string values it cannot accept any other type values

inactiveUsers.push("Pratik")
inactiveUsers.push(12); // Adding a number or any other value inside our array will give us result that Argument of type is not assignable to parameter of type string.
 
//------------------------------------------------------------------

//there is difference bettween next two examples "deletedUsers" and "newUsers"

//------------------------------------------------------------------

const deletedUsers:number|string[] = []; // This means `deletedUsers` can either be:
// - a number 
// - OR an array of strings (e.g., ["Alice", "Bob"])
// Since we are assigning an empty array ([]), TypeScript infers it as string[]
// So now it thinks deletedUsers is a string[] and restricts it accordingly

deletedUsers.push("Hiren");
deletedUsers.push(1); 



const newUsers:(number|string)[] = []; // in this example we are using brackets so it means the newUsers array can be type of number or string it cannot take any other values than number or string so we can see there is no error in our push methods 

newUsers.push("Hiren");
newUsers.push(1);
// So it's allowed to mix both numbers and strings inside the same array



/*
Summary:

- `const x: [] = []` defines an empty tuple — it can never have any elements.
- `const x = []` is inferred as `never[]` (with strict mode) — still disallows pushing values.
- Use `any[]` if you want to allow all types (not recommended for strict code).
- `string[]` means an array of only strings.
- `(number | string)[]` means an array of numbers and/or strings.
- `number | string[]` means the variable is either a number OR an array of strings — not both.

Always prefer explicitly defining your array's element type using `type[]` or `(type1 | type2)[]` for clarity and safety.
*/