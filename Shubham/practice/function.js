
// function add(num1,num2){
//     console.log(num1+num2)
// }
// add(10,10)

// function table(num1){
    
//     for(var i=1;i<=10;i++){
//          console.log(num1*i)
//     }
// }
// table(9)

function returntable(num1){
    for(var i=1;i<=10;i++){
        var num=num1*i
    }
    return num
}
console.log(returntable(5))

function test(user){
      
    for(const use in user){
          console.log(use,user[use])
    }
}
test({name:"shubham" , age:"28"})

function arraytest(arr){

    for(var a of arr){
        console.log(a)
    }
}
arraytest([3,2,1,6,5,44])

console.log("#########################")
//arrow fucntion is nothing but anonymus fucn that we can define anywhere without providing name of fucntion

var sumResult = (num) => {
    var sum=0;
    for(var i=1;i<=num;i++){
        sum +=i
    }
    return sum
}
var sumvalue=sumResult(10)
console.log(sumvalue) 

console.log("#########################")
//callback function , when we pass function as parameter to another function , then it is called callback function

function repeateStep(n,func){
    for(var i=1;i<=n;i++){
        func()
    }
}
function callfunct(){
    console.log("hello")
}
//provide function as parameters
repeateStep(5,callfunct)

//provide arrow function as paramter
repeateStep(7,()=>{console.log("arrow function")})

//return sting split
var output = (strInput)=>{
    return strInput.split(" ")
}
var orioutput =output("my name is shub")
console.log(orioutput)

//write a arrow funct program to check prime number or not 
//write arrow function to remove duplicate numbers from string 
//to sum all even number 1 to 30
//create calculate add, mltiply,subtraction , division
//find sum of all value are dicisible 3 and 5 betn 1 to 100

var primenumbercheck =(num)=>{

      for(var i=1;i<=num;i++){
            var prime=true
        for(var j=2;j<i;j++){
             if(i%j==0){
              prime=false
             }
        }
        if(prime){
            console.log(i)
        }
      }
}
primenumbercheck(100)

//sumall even number 1 to 30


