
for(var i=0;i<=10;i++){
  console.log(i)
}
//reverse
for(var i=10;i>=0;i--){
    console.log(i)
}
//table
for(var i=1;i<=10;i++){
    var num=2
    console.log(i,"*",num," =",i*num)
}
//factorial
var fact=1
for(var i=1;i<=5;i++){
    fact *=i
}
console.log(fact)

//now run time we need to change value then we will use prompt -sync 
// for this first we need to install prompt -sync package 
//with help of this we can read values from user 
// it will always take values in string , so if we need to enter any number value use Number(num)

const prompt =require('prompt-sync')();
const num1=prompt("Enter your number ")
var factt=1
for(var i=Number(num1);i<=num1;i++){
    factt=fact*i
}
console.log(factt)


