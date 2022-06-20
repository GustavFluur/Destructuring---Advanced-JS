
/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

//** <h1 Destructuring arrays h1>  **\\

let ages = [30, 26, 27];
//Without Destructuring - Arrays 
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];


// With Destructuring - Arrays
let [john, mary, joe] = ages; 
console.log(john, mary, joe);
//* -------------------------------------------------------------------------------------------------------------- *//


//** <h1 Destructuring objects h1> **\\

// Without Destructuring - Objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia); 
//* -------------------------------------------------------------------------------------------------------------- *//

//**<h1 Destructuring subsets h1> **\\ 

let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary); 

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let [, , ,joeNative, joeSecondary] = languages;
console.log(joeNative, joeSecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french", 
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

//**<h1 Using rest parameter syntax h1> **\\ 
let fruits = ["apple", "organge", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};

let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna); 
console.log(rest); 
 





// Without Destructuring - Objects

// let jobs = {
//     mike: "designer",
//     jill: "developer",
//     alicia: "accountant",
// };

// let mike = jobs.mike;
// let jill = jobs.jill;
// let alicia = jobs.alicia;

// With Destructuring - Objects

// let jobs = {
//     mike: "designer",
//     jill: "developer",
//     alicia: "accountant",
// };
// let { mike, jill, alicia } = jobs; 
