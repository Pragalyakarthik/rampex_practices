                                      //  Day 1
                // var is globally scoped (undefined)
                //let is locally scoped  (error)
            // to print any error message then use console.error() instead of console.log()
//var a = 5;
//console.log(a);           ans: 5

/*function a(){
    if(true)
    {
        let a=5;
        console.log(a);
    }
    console.log(a);
}                               ans: 5 error because of let
a()*/

/*console.log(a)
var a=5;                      ans: undefined */

/*console.log(a)
let a=5;                      ans: error*/

/*let a = 5;
let a = 3;
console.log(a);            ans: error because of redeclaration */

/*let a = 5;
a = 3;
console.log(a);           ans: 3 reinitialize */

/*const a = 5;
a = 3;
console.log(a)              ans : error if const variable is try to reinitialize then error occur*/

/*if(true)
    {
        console.log("hi");
    }                             ans : hi */

  /*if(false)
        {
            console.log("hi");
        }                               ans : null (nothing will be print) */

/*if(30>5)
{
    console.log("hi");
}                                         ans: hi */

/*Number  - Int, float
Boolean  - true / false
string
BigInt   - long int
let is used instead of var
let a = "abc"    -  directly assumes a is string
let a = 123456899999n;  - if n is given then it assumes it is bigint otherwise it assumes as int 
let a = BigInt("12345");   - another way to declare bigint instead of using n
let a = true;  */

/*let student1 = {
    name : "Pragalya",
    age : 20,
    isStudent : true
}
console.log(student1)       ans : {name: 'Pragalya', age: 20, isStudent: true} */

 /* let student1 = {
    name : ["Pragalya", "Priya"],
    age : 20,
    isStudent : true,
    address : {
        state : "Tamilnadu",
        city : "salem"
    },
    hello : function() {
        console.log("Hi Students")
    }
}
console.log(student1);   ans : {name: Array(2), age: 20, isStudent: true, address: {…}, hello: ƒ}
student1.hello()           ans :  Hi Students
console.log(student1.name) ans : ['Pragalya', 'Priya'] 
console.log(student1.address) ans : {state: 'Tamilnadu', city: 'salem'} 
console.log(student1.address.state)  ans : Tamilnadu 
console.log(student1.name[1])  ans : Priya 
console.log(student1.name[0])    ans : Pragalya 
console.log(student1["name"])    ans  : ['Pragalya', 'Priya'] */

// javascript also support oops concept

 /* let student1 = new Object();
student1.name = "abi";
student1.age = 20;
student1.hi = function()
{
    console.log("Hi")
}
student1.hi()                     ans : Hi  */


/*unary - single operand -(++, --)
Binary - two operands
ternary - three operands - conditional operand

1. Binary :
   arithmetic operator - (+,-,*,/,%,**(exponential -power))
   logical operator
   bitwise operator

2. Comparison operator :
  == (5=="5") true
  strict equal ===  (5==="5") true
  strict not equal !==  (5!=="5") true
  greater than > (5>3) true
  less than or equal to <= (3<=1) false
  not equal != (5!="5") false

3. logical operators :
   && (true && false) false
   || (true || false) true
   ! (!true)  false  */

/* (&& and ||) are the short circuit operators because if first condition fails in && then second condition will not check 
let a =(30>11) || (30>112) 
console.log(a);  in this first condition is true then it will not check for second condition so short circuit */

 /*let a=5;
console.log(a++)    ans : 5 */

/*let a=5;
a++;
console.log(a);      ans : 6 */

/*let a=5;
let b= a++ + --a;
let c= ++b + b++;
a++;
console.log(a);
console.log(b);
console.log(c);        ans : 6 12 22 

/*let a= true;
!!!!!!a;
console.log(a);      ans : true  

/* let a= true;
!!!!!a;
console.log(a);    ans : true 

/* let a= true;
a=!!!!!a;             ans : false (because it is stored in a)
console.log(a); */

// ~ tild symbol (complement)


 