// //1 find max value from array 
//  var v1=[2,3,4,5,1,11,21,21,31]
// var max=0
//  for(var v of v1){
//       if(v>max){
//         max=v
//       }else{
//         continue
//       }
//  }
//  console.log(max)

//  //2shift all positive left side and negative right side 
//  var v1 = [1,2,3,-2,-3,-1,6,7,8,77,55,44,33]
//  var vv=[]
//  for(var v of v1){
//     if(v>0){
//         vv.unshift(v) //it will add begenning if array
//     }else{
//         vv.push(v)  //at the end of array 
//     }
//  }
//  console.log(vv)

//  //3 2nd max value
//  var v1=[1,2,3,4,55,44,33,25]
//  var max=0
//  var secondMax=0
//   v1.sort((a,b)=>b-a) //sort in descending order
//   secondMax=v1[1]
//   console.log(secondMax)

  //or
console.log("##############")
  var v2=[2,3,4,5,66,55,44,77]
  var max=0;
  var secondmax=0;
  for(var v1 of v2){
    if(v1>max){
        secondmax=max
        max=v1
    }else if(v1>secondmax && v1<max){
        secondmax=v1
    }
  }
  console.log(secondmax)
  //prime number 
  console.log("##############")
  var ar=[1,2,3,4,5,6,7,8]
  
  for(var a of ar){
   var prime=true
    for(var i=2;i<a;i++){
       if(a%i==0){
        prime=false
       }
    }if(prime){
      console.log(a)
    }
  }
  console.log("##############")
  //to get combination of two values who sum is 10
  var arr=[1,2,3,4,5,6,7,8]
  
  for(var i=0;i<arr.length;i++){
     for(var j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]==10){
        console.log(arr[i],arr[j])
      }
     }
  }
   console.log("##############")
  //square of even number and cube of odd values 
  var arr=[1,2,3,4,5,6,7,8]

  for(var a of arr){
    if(a%2==0){
      console.log(a*a)
    }else{
      console.log(a*a*a)
    }
  }
console.log("##############")
  //remove duplicate from array 
  var v=[1,2,3,4,1,2,2]
  var unique=[]
  for(var i=0;i<=v.length;i++){
    var dup=false
    for(var j=i+1;j<=v.length;j++){
      if(v[i]==v[j]){
           dup=true
      }
    }if(dup && !unique.includes(v[i])){
       unique.push(v[i])
    }
  }
  
  console.log(unique)
    console.log("###############################")
   //remove duplicate from array and print remaining words 
   var arr=[4,0,1,2,4,5,6,1,2,1]
   var uni=[]
   for(var i=0;i<arr.length;i++){
         var dupli=false
    for(var j=i+1;j<arr.length;j++){
         if(i != j && arr[i] == arr[j]){
          dupli=true
         }
    }if(!dupli){
      uni.push(arr[i])
    }
   }console.log(uni)