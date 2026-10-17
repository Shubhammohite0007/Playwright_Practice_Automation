//array fundamentals  
//array can contains any type of data 
//array is mutuable data type , we can update values at any poi t of time 
//array follows indexing as form of string 
//it can contain hetrogenius data 

var a =[1,"shub",[4,5],{a:12,b:99,a:33,a:44}]
console.log(a)
console.log(a[2][1])
console.log(a[3]['a'])

//using loop and get indexing of each va;ue in array
var a=[1,4,3,5,6,7]

for(var i of a){
    console.log(i)
}
console.log("########################")

var a=[1,4,3,5,6,7]

for(var i in a){
  console.log(i,a[i])
}
console.log("########################")
//array methods 
//push method -help to push data at the end of the array 
var a=[3,4,5,6,7,1]
a.push(2)
console.log(a)

console.log("########################")
//add value at begenning of array 
//unshift :help to add value at begeinnig  of array 
var a=[2,3,5,6,7]
a.unshift(9)
console.log(a)
console.log("########################")
//remove data from begeinning of array 
//pop : remove value from end of array and return it 
var a=[1,2,3,4,5]
a.pop()
console.log(a)
console.log("########################")
//remove valude from beginning of array
//shift :will remove data from begeinning of array 
var a=[1,2,3,4,5]
 var removedValue=a.shift()
  console.log(removedValue)
 console.log(a)
 console.log("########################")
 //remove as well as add method 
 //splice : required 3 parameter ,1 -index valude 2 delete count ,new values to add
 var a=[2,3,4,5,6]
 
