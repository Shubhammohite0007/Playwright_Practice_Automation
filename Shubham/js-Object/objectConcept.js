//object data types
//object data store value in key and value pair 
//obj does not allow duplicate key values are allowed ----> it will but it will update the value like age below last in 1st out lipo concept
//obj can contain any type of data 
//obj does not follow any indexing
//obj is mutable data type , that we can modify any point of time 
//only 1 null key allowed 
//if we specify any duplicate key then it will only consider latest defined value 

var object={
    name:"shubham",
    age:28,
    number:808013,
    email:"shub002@gmail.com",
    hobbies:{game:"fcb",music:"rocking"},
    cities:["pune","mumbai","jath"],
    age:32

}
//get value from object using key  2 ways [] or . 
console.log(object['age'])
console.log(object.age)
console.log(object.hobbies['game']) 
console.log(object.cities[0])

console.log("###########################################")
var obj={a:123,b:234,c:455}
//add new key 
obj.d=555
obj.e=666
console.log(obj)
console.log("###########################################")
//delete entry from object 
var result={p:12,q:13,r:14}
delete result.p
console.log(result)
//object methods
console.log(Object.keys(result))
console.log(Object.values(result))
console.log(Object.entries(result)) //it will return array of array where each key value store in child array or it will convert obj to array 
console.log("###########################################")
 
//apply loop on object 

for(var data of Object.entries(result)){
    console.log(data)
}

// apply loop with keys 
//in will give us key value 
var v={a:12,b:13,c:14,d:15}
for(var v1 in v){
    console.log(v1,v[v1])
}

//Assign methid - combine all objects and create new object

var ob1={a:12,b:13}
var ob2={c:14,d:15}
var ob3={e:16,f:17}
var output= Object.assign(ob1,ob2,ob3)
console.log(output)

//freeze method - this method does not allow to modify the object values 
 //entire obj we can freeze not the specific property
var details={name:'adam',age:34,email:'shub@gmail.com'}
console.log(details)
Object.freeze(details)
//details.address="pune"
console.log(details)

//seal method : This method does not allow to add or delete any property from object 
//user can updated existing property

const empDetails={name:"shub",age:29,email:"shub@gmail"}
 Object.seal(empDetails)
 empDetails.email="mohite@gmail.com"
 console.log(empDetails)

console.log("###########################################")
//hasOwn method - this method will return true if certain key is available in the obj or not 
var a={name:"shub",age:29,email:"shub@gmail"}
console.log(Object.hasOwn(a,'email'))

//ow to create object from array
//fromEntries()
var fruit=[
    ['apple',100],['banana',200],['mango',300]
]
console.log(Object.fromEntries(fruit))