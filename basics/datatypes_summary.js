// #Primitive 

//  7 types :String,Number,Boolearn,null,undefined,Symbol,BigInt

// dynically language
// typescript 
// const score:number =100; type safety

// const score=100 number
// const scoreValue=100.3; number
// const isLoggedIn=false; boolean
// const outsideTemp=null; null
// const userEmail;  undefined
const id= Symbol('123');
const anotherId=Symbol('123');
// console.log(id===anotherId);  false not same
// const bigNumber=347657589n;

// non Primitive (or)Reference

// Array,Objects,Functions
const heros=["shaktiman","naagraj","doga"]
const myObj={
    name:"kokila",
    age:21,
};
const myFunction=function(){
    console.log("hello world");
}

//https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++=++++++++++++
// Stack(Primitive),Heap(Non-Primitive)

let myName="kokila";
let anotherName=myName;
anotherName="muppu";   //store as stack
console.log(myName);
console.log(anotherName);

let userOne={
    email:"user@google.com",
    upi:"user@ybt"
};

let userTwo=userOne;
userTwo.email="kokila@google.com";
console.log(userOne);
console.log(userTwo);
