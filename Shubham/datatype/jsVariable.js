//variable decleration and types 
// var , let ,const 
//var -> varaible can be redeclare and re-assign
//it has functio scope
//we can re-use n number of time 
// we can declare variable without initializing it 

//declare a variable with name a and assign value 20
var a = 20 
console.log( a)
//re declare  
var a=50
console.log(a) 
//reassign
a=100
console.log(a)

//let variable 
//let variable cannot redeclare
//user can reassign value 
//it has block scope

//declare value p and assign value 100
let p=100;
console.log(p)

let q=300;
console.log(q)

//reassign 
q=400
console.log(q)

//re dclare  not allowed
//let q=600
//console.log(q)

//block scope
if(true){
    var x=100
    let y=200
    console.log(x)
    console.log(y)
}
var r
console.log(r)
console.log(x)
 //console.log(y)  ------> not allowed  bcz let variable

 //const 
 // cannot redclare , cannot reassign 
 //it has block scope 
 //have to initialize variable 
 const m=100
 console.log(m) 
 //m=200  ------->error
 console.log(m)

 //Rules to declare variable name 
 // variable name should not start with number
 //variable name should not contain special character except $ and _
 //variable name should not be reserved keyword
 //variable name should not contain space   
 //variable name should be meaningful and readable
 //variable name should be camel case
 //variable name should be case sensitive

 