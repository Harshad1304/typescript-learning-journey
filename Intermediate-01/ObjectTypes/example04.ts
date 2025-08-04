// Type Alias 

type CoordinatePoint = {
    x:number,
    y:number,
}

// In above u can see i have create a object using "type" which is basically we are create a type Alias which can help us avoid redudent code and writing to confusing functing passing to much inline types we can simple replace that with a type alias like this 


// Without type alias

/* let coordinate:{x:number,y:number}= {
    x:10,
    y:10
} */

    // We have replaced our inline type annotation with type alias in below and above Commented example u can see how its done

    // With type alias

let cityCoordinate:CoordinatePoint= { 
    x:10,
    y:10
}

// Without type alias

/* function randomCoordinate():{x:number,y:number}{
    return{x:Math.random(),y:Math.random()};
} */

    
    // We have replaced our inline type annotation with type alias in below and above Commented example u can see how its done

    // With type alias

function randomCoordinate():CoordinatePoint{
    return{x:Math.random(),y:Math.random()};
}

// Without type alias

/* function doublePoint(point:{x:number,y:number}):{x:number,y:number}{

    return{x:point.x,y:point.y}

} */

    
    // We have replaced our inline type annotation with type alias in below and above Commented example u can see how its done

    // With type alias

function doublePoint(point:CoordinatePoint):CoordinatePoint{

    return{x:point.x,y:point.y}

}

// Type aliases can be created for variable as well like this 

type age = number;
//We created a type alias for variable above 

const myAge:age = 25;
// We are using age type which is number type just like we did it in above examples


/*

Summary:

- Type Aliases allow you to define a reusable type structure using the `type` keyword.
- This helps keep your code DRY and easier to read, especially when working with complex objects.
- Instead of repeating `{x: number, y: number}` multiple times, we define a `type CoordinatePoint` and use it everywhere.
- It improves clarity in functions, variables, and return types.

Use Type Aliases to:
   - Avoid redundant inline object annotations
   - Keep function signatures clean and readable
   - Improve maintainability across your project
*/