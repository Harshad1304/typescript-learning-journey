// Extra Properties other than the types we pass in an objects

function printFullName(person:{firstName:string,lastName:string}):void{
    console.log(person.firstName,person.lastName);
}
//This is a normal function with return type void and params is a object with following types we have passed like for firstName:string and so on 

printFullName({firstName:'Harshad',lastName:'Bhoir',age:25}) //Error when passing an inline object because typescript wont allow 

//We can see both examples coder one and above printFullName where we are passing inline properties with an object we can see an error that age property does not exist in type but in coder example we are passing the obeject inside our function below u can see it is not giving us any erorr because typescript checks that the object we passsed has requried properties if thoese properties are not there it will give u error type removing firstName in our coder variable 

const coder = {firstName:'Harshad',lastName:'Bhoir',age:25};

printFullName(coder); // doesnt give us error because typescript will first check that it has all properties we have passed like name and last name so it will ignore all other extra properties Its confusing but just ignore it just like the TypeScript creators did 😄 


/* 

Summary:

- TypeScript performs *strict checks* on inline object literals and will throw an error if you include extra properties.
- But if you assign the object to a variable first, TypeScript allows extra properties as long as required fields are present.
- This is due to how TS distinguishes between "fresh" (inline) and "stale" (variable) objects.
- It ensures stronger safety when writing objects directly but allows flexibility when working with reusable variables.

In short: 
  - Inline objects → strict checks ✅
  - Predefined objects → looser checks ✅
*/