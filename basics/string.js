const name="kokila";
const repoCount=50;
// console.log(name+repoCpunt+" value");  outdated method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String('muppu'); 
//string object

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
//not change real value because store in stack copy of the variable not real value

console.log(gameName.charAt(2));
console.log(gameName.indexOf("u"));
const newString = gameName.substring(0,3);
console.log(newString);
const anotherString= gameName.slice(-4,3);
console.log(anotherString);

const newStringOne="     kokila     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://bookoearn.com/kokila%20muppu";
console.log(url.replace('%20','-')); //-


console.log(url.includes("kokila")); //if there in url returns true else false
const MyName=new String("Muppu kokila 01");
console.log(MyName.split(" "));
