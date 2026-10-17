//import specific function from other file
import{addition,multiply} from '../program/firstProgram.js'

//import all function 
import * as module1 from "../program/firstProgram.js"


//if we have to import 1 file into another add type as module in package.json file 

// Two ways to call 

console.log(addition(2,2))
console.log(module1.multiply(2,3))