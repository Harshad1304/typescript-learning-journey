// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages:number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard:string[][]=[]

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
    name:string;
    price:number;
}

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

const products:Product[] = [
    {name:"iphone12",price:1200},
    {name:"mixer",price:200}
]

function sumOfProducts(products:Product[]):number{
    return products.reduce((total, product) => total + product.price, 0);
}

console.log(sumOfProducts(products));



/* Summary:

- `number[]` for arrays of numbers
- `string[][]` for 2D arrays of strings (like game boards)
- Custom type `Product` with `name` and `price`
- Used `reduce` to calculate total price from an array of products
- TypeScript enforces structure and correctness across all parts

*/
