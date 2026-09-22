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
