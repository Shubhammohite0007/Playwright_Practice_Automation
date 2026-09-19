// premetive datatype --->datatype only hold only 1 value at a time and it is immutable in nature 
//immutable menas if we cnage the value then the old value will go away 
//1.number 
var n1=0
var n2=2.9
var n3= 292929
var n4=-29
console.log(n1, typeof(n1)) ; console.log(n2,typeof(n2)) ; console.log(n3,typeof(n3)) ; console.log(n4,typeof(n4))
//2.string
var s="h"
var s2="10"
var s3=""
console.log(s, typeof(s)),console.log(s2, typeof(s2)), console.log(s3, typeof(s3))

var s4="shubham"
console.log("index of 2 : ",s4[2])


//3.boolean 

//4.undefiend - when we declare va
var k
console.log(k , typeof(k))

//5.null intentionally want to keep blank value 
var h1=null
console.log(h1, typeof(h1))

//non premetive data type
//1.array ; array can store all type of values in sqaure bracket 
//each value in array has its own index position like string \
var arr=[2,4.3,'javascript',[3,4,5],{a:12,b:13},true]
console.log(arr)
console.log(arr[3])
//console.log("child value from object",arr[3]['a'])  //form particular object value fetch
arr.push(100)  //--> add value in  string 
console.log(arr)

//2.object -store value in key value format in curly braces
//it only store unique keys 
//their is no restriction on value 
var person ={name:"shub",number:12345,age:28}
console.log(person)
person.address="dehugaon"  //->add field in object
console.log(person)
//delete from object 
delete person.age
console.log(person)
//get user details with key
console.log(person['number'])
person['name']="max"
console.log(person)


//3.function
//block of code which we can reuse n number of time or it reduce duplicasy of code 

function add(n1,n2){
    //inisilize
    console.log(add,n1+n2)
}
//call of function
add(10,10)
console.log(add)
add(15,10)
add(15," hello")
//add(15,hello)

