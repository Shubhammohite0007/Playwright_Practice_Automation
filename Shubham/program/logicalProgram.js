//prime number check
var num=12
var prime=true
for(var i=2;i<num;i++){
    if(num%i==0){
        prime=false
        break
    }
}
//if we dont mention prime==true like if(prime){} then internally it will conside it as true 
if(prime==true){
    console.log("prime number",num)
}else{
    console.log("Not prime number",num)
}

//prime number from 1 to 100

for(var i=1;i<=100;i++){
   var prime=true
    for(var j=2;j<100;j++){
          if(i%j==0){
            prime=false
            break
          }
           if(prime){
        console.log(i)
        break
    }
          
    }
   
}
console.log("#####################")
var arr=[1,2,3,4,5,66,43,67]

for(var n of arr){
    var prime=true
    for(var k=2;k<n;k++){
        if(n%k==0){
        prime=false
        break
        }
    }
    if(prime==true){
        console.log(n)
    }
}

//while loop
//when num of occurences is not fixed ,then we should use whi;e loop
//for loop : when num of occurences is fixed , then we can use for loop 
console.log("#####################")
n1=0;
while(n1<=10){
    console.log(n1)
    n1 += 1
}
console.log("#####################")
//do while 
var n2=0
do{
    console.log(n2)
    n2 +=1
}while(n2<20){

}