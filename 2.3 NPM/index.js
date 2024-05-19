//function name that generates our requirement then package name
// var generateStupidName = require("sillyname");
// var Sillyname = generateStupidName();
// console.log(`${Sillyname}`);

//alternate way to import file from another module
//do this in json file
//"type": "module",
// import generateStupidName from "sillyname";
// var Sillyname = generateStupidName();
// console.log(`${Sillyname}`);

//task install superheroes
//print as shown

import superheroes from "superheroes";
var Superhero = superheroes.random();
console.log(`I am ${Superhero}`);