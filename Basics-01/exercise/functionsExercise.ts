// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

function twoFer(person:string= "you"):string {
    return `One for ${person} One for me`;
}

let harshad = twoFer();
console.log(harshad)
console.log(twoFer())

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo


// const isLeapYear = (year:number):boolean{
//     if(year % 4 === 0 && year % 100 !== 0){
//         return true
//     }else if(year % 400 === 0){
//         return true;
//     }
//     return false;
// }



const isLeapYear = (year:number):boolean{
    return(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
}

// compile and test 

console.log(isLeapYear(2012))
console.log(isLeapYear(2013))

