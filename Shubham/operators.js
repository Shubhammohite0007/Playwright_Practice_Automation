//operators in Js
// + , - , * , / , % - modulus means remender
//  , ** - exponential operator -means 5*5*5 like this 

var x1=5
var x2=3
console.log("value of x1+2 " , x1+x2)
console.log("value of  " , x2/x1)
console.log("value of modulus " , x1%x2)
console.log("value of exponential " , x1**x2)

//assignment operator 
//= :assign value 
// += add and assign operator 
var x=50
var y=10
x += 10
console.log("+ ",x)
//-= subrtact
x -= 10
console.log("- ",x)
// *= multi 
x *= 10
console.log("* ",x)
//%= modulus
y %= 20
console.log("% ",y)
// **=exponential
x **= 
console.log("** ",x)
console.log("###############################")
//comparision operator
//== equal(data only not datatype)
var a=10
var b="10"
var c=20
console.log(a==b)
//=== strict equal (check data and data type)
console.log(a===b)
//!= not equal 
console.log(a!=b)
// !== not equal with data type check
console.log(a!==b)
// > , < , >= , <= 

console.log("###############################")
//logical operators
// and condition 
//codn1 && cond2
var m=100
var n=200
var o=300
//1 false && false :false
console.log(m>n && n>o)
//2 true && false :false
console.log(m<n && n>o)
//3 true && true
console.log(m<n && n<o)
console.log("###############################")
//or condition 
//2 true && false :false
console.log(m<n || n>o)
//condn1||condn2
