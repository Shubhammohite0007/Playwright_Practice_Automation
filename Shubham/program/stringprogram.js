//remove duplicate character from string and print the string 
var string1="my name is shubham"
var s2=""
for(var v1 of string1){
    
    if(s2.includes(v1)){
        continue
    }else{
        s2 +=v1
    }
}
console.log(s2)
console.log("#####################")
//vowel in string
var v1="my name is shubham"
 var count=0
var vowel="aeiou"
 for(var s of v1){
    if(vowel.includes(s)){
        count=count+1
    }
 }
 console.log(count)

 //write a program to repeat of first character of each word twice 
 var v="my name is shubham"
 //op = mmy nname iis sshubham
 var v1=v.split(" ")
 var op =[]
 for(var v2 of v1){
    op.push(v2.charAt(0)+v2)
 }
  console.log(op)

  //option 2 
   var v="my name is shubham"
   var output=""
 //op = mmy nname iis sshubham
 var v1=v.split(" ")
 for(v2 of v1){
    var firstchar=v2[0]
    var newword=`${firstchar}${v2}`
    output=output+" "+newword
 }
 console.log(output)

//  //first and last character of each word 
  var v="india freedom"
//  //op = ia fm 
var v1=v.split(" ")
  var op=[]
  for(var v2 of v1){
    op.push(v2.charAt(0) + v2.charAt(v2.length-1))
  }
  console.log(op)


