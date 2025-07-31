function square (num){
    // num.toUpperCase() // in this example if u see we dont pass type to our parameter it implecitly sets the type any to our parameter and if we dont define type it will cause errors to us so here is how we can fix it in next example
    return num * num
}

function square2 (num:number):number{
    return num*num
};