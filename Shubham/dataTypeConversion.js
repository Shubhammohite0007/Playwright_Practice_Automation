// 1. Implicit datatype conversion
//2. explicit datatype conversion


//implicit datatype conversion
//convert string into number 
var a=10 

//convert number into string 
console.log(a + "Hello") //output is string 

//convert string into number 
var b=20
console.log(b-"5")

//Explicit datatype conversion
//srting into number 
var s1="12345"
var s2=Number(s1)
console.log(s2,typeof(s2))

//number into string 
var n1=10
var n2=String(n1)
console.log(n2,typeof(n2))
