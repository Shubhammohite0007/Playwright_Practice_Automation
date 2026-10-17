//of operatior can be use in array and string 

// var dataa = [2,3,4,5]
// var op={}
// for(var d of dataa){
//     op[d]=op**2
// }
// console.log(op)

//find max from object 

var obb={'a':12,'b':14,'c':16,'d':2}
var max=0;
for(var k in obb){
    console.log(k,obb[k])
    if(obb[k]>max){
        max=obb[k]
    }
}console.log(max)


//calc total bill and fruit purchase by customer 

// var fruitprice={apple:50,banana:30,paaple:40}
// var fruitpurchased={apple:5,banana:3}

// for(var fruit in fruitpurchased){
//    // console.log(fruit)
//     var fruitname=fruit
//     var fruitprice=fruitprice[fruit]
//     var fruitqty=fruitpurchased[fruit]
//     var bill=fruitprice*fruitqty
//     console.log(fruitname,fruitprice,fruitqty,bill)
//     var totalbill=totalbill+bill
// }
// console.log(totalbill)

var fruitprice = { apple: 50, banana: 30, paaple: 40 };
var fruitpurchased = { apple: 5, banana: 3 };
var fruitInventory= { apple: 150, banana: 130, paaple: 140 };
var totalbill = 0;

for (var fruit in fruitpurchased) {
    var fruitname = fruit;
    var price = fruitprice[fruit];
    var fruitqty = fruitpurchased[fruit];
    var bill = price * fruitqty;
    fruitInventory[fruit]=fruitInventory[fruit]-fruitqty
    console.log(fruitname, price, fruitqty, bill);
    totalbill =totalbill+ bill;
     
}
console.log("Total bill:", totalbill);
console.log("remaining Inventory:",fruitInventory)


//calcualte total electricity bill as per the number of unit comsume
//if totl unit <=100 then per unit charge is 25 rps
//>100 <300 50 rps 
//>300 100 rps 
//cust detail obj 
console.log("####################################")
var user ={
    shub:120,
    rohan:90,
    sameer:210,
    amit:320
}
  for(var bill in user){
      if(user[bill]<100){
          console.log("less then 100: ",bill,user[bill])
      }else if (user[bill]>100 && user[bill]<200){
        console.log("between 100 < 200 :",bill,user[bill])
      }else if(user[bill]>200){
        console.log("greater then 200 :",bill,user[bill])
        
      }
  }



