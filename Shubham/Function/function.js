//function is block of code that we can use it for different parameters
//functions help us to reduce code redundancy 
//we can call function from 1 module to another 
//-if we create 2 funcn with same name and parameter it will always execute 
//-newly created function 

/*
function functionname(parameter){
code
}
functionName(parameterValue)

*/
//function without parameter

function greeting(){
    console.log("We are learning java script")
}
//call function
greeting()
greeting()

//function with parameter
function addition(num1,num2){
    console.log("addition of num1+num2= ",num1+num2)
}
//there are 2 ways to provide value to function 
//1.pass by value:while calling the funct we can provide values to func parameter directly 
addition(30,40)
//2.pass by reference : while calling function we can get different variable name and their reference to provide the value 
var x=400
var y=500
addition(x,y)

for(var y=5;y<=20;y+=5){
    addition(x,y)
}

//get even value
function evennumber(arr){
    for(var val of arr){
        if(val%2==0){
            console.log("even number is ",val)
        }
    }
}
evennumber([3,2,5,6,7,8,9,0])

//function with default parameter
function multiplication(v1,v2=30){
    console.log(`multplication of ${v1} X ${v2} : ${v1*v2}`)
}
//if we want to add or declare variable into string then use ${variable} but always use `` backtick
multiplication(5)
//update default value and override it 
multiplication(10,20)

//key value into fucntion
function userdetail(user){
     console.log(user)
     console.log(user.age)
}
userdetail({name:'shubham',age:28,'phone':9098909990})