//  if(condn){
//     block
//       }

var n=11
if(n%2==0){
    console.log("even",n)
}else{
    console.log("odd",n)
}

//num is divisible by 3 and 5

var num3=15
if(num3%3==0 && num3%5 ==0 ){
    console.log("num is divisble by 3 and 5 ",num3)
}else{
     console.log("num is Not  by 3 and 5 ",num3)
}

console.log("#####################3")

//else if 

var x=20
var y=30 
var z=20

if(x>y && x>z){
    console.log("X is greater")
}else if(y>x && y>z){
     console.log("y is greater")
}else if(z>x && z>y){
     console.log("z is greater")
}else{
    console.log("no one is greater")
}
console.log("############################")
//Nested if else

    var round1="pass"
    var round2="pass"
    var round3="fail"

    if(round1=="pass"){
        console.log("first round clear")
        if(round2=="pass"){
            console.log("2nd round clear ") 
        }else{
            console.log("failed in 2nd round ,try next time ")
        }
    }else{
        console.log("first round fail")
    }

    console.log("############################")
    //ternary operator ?

    var num=11
    var result = num%2==0 ? "even" : "odd"
     console.log(result)

     console.log("############################")
     //apply loop on string datatype we will use for of loop

     var s="hello js"
     for(var var1 of s){
        console.log(var1)
     }
     
     var arr=[1,2,4,3,6,7]
     for(var a of arr){
        console.log(a)
     }

     var numm=12345
     for(var n of numm){
        console.log(n)
     }




     