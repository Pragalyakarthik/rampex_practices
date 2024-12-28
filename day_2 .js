                                       //day 2
/* 1.conditional statements 
     if
     else if                                          break cannot be given in if, else 
     else
     nested if 
     switch works with case */

/*let choice ="hello";
switch(choice)
{
    case "hi":
        console.log("hi");
        break;
    case "hello":                           //      ( strings, characters can also be given in cases )
        console.log("hello");               //  but array of numbers cannot be given in cases                           
        break;
    default:                               if break is not given in first case then upcoming cases also execute even 
        console.log("error");                   default is also execute and does not check for the cases.
        break; 
}          */

/*let a=10;                                       let a=6;
if(a%3==0 && a%5==0)                              if(a%3==0) 
{                                                 {
    console.log("hi hello")                            console.log("hi")
}                                                 }
else if(a%3==0)                                   if(a%5==0)
{                                                  {
    console.log("hi")                                   console.log("hello")
}                                                   }
else if(a%5==0)
{
    console.log("hello")
}  */


/*2.Loops:
   for   (nested for)
   while
   do while

for:
for(initialization; Condition; incre/decre)
{
    statements;
} */

/*for(let a=1;a<=10;a++)
{
    console.log(a);           
} */

/*for(;;)
{
    console.log("hi");            if initialization and condition not given then it assumes as true 
} */                               // ans : infinite hi

/*let a=1;
for(console.log("a");a<=3;console.log('b'))       ans : a c b c b c b
{
    console.log("c");
    a++;
}
    first initialization print a then condition then statement then incr/decre then condition
    then statements so a will be print first then c then b then again condition true so print c 
    then b then c then increment so print b then condition fails and exit   */

   /* let a=1;
    for(a=1;a<100;a++);
    console.log("hi")                     ans : hi 100 (because for is terminated by ;
    console.log(a);                           so prints only once and then a is incremented by 100) 

    for(let a=1;a<100;a++)
    console.log("hi")                    ans: 99 times hi, error (because let is locally scoped so error)
    console.log(a); 

    for(var a=1;a<100;a++)
    console.log("hi")                     ans: 99 times hi, 100 because var is gobally scoped
    console.log(a); */

   /* while () condition is necessary otherwise error will be print - check condition and execute 
                so entry check loop and for also entry check loop
   do while - once execute the statement and then check the condition so it is exit check loop */

3. /*Function:
   parameterized
   non parameterized
   with ,without return type 
   Arrow function
                           function function_name{
                               statements;
                           } */

   /*non parameterized + without return:
   function apple()
   {
     console.log("apple");
   }
   apple(); */

   /*non parameterized + with return: 
   function mango()
   {
     let a="mango";
     return a;
   }
   let b=mango();
   console.log(b); */

/* parameterized + without return:
function apple(colour,no)
{
    console.log(colour,no);
}
apple("Red",3); */

/*parameterized + with return:
function apple(colour,no)
{
    return(colour + no)
}
let b=apple("Red",2);
console.log(b) */

/*Arrow function
       let function_name = () => 
       {
             statements;
       }
       function_name();

let apple = () => console.log("hello")
apple() */

/*let orange =()  =>"orange"     ans : orange
console.log(orange()) */

/*let banana =() =>
{
    console.log("hi")             ans : hi,6
    return 3+3;
}
console.log(banana()); */

/*arrow function with parameter without return
let apple=(colour,no)=>
{
    console.log(colour,no)
}
apple("red",2) */

/*arrow function with parameter with return
let apple=(colour,no)=>
{
    return colour;
}                                        return function return only one value 
let b=apple("red",3)
console.log(b) */

/* spread operator (...)
       is used to concatenate two array and used in arrays 
           let a=[1,2,3,4]
           let b= a
           b[2]=10                 ans : [1,2,10,4] for both a,b
           console.log(a)
        spread operator 
          let a=[1,2,3,4]
           let b= [...a]
           b[2]=10                 ans : a= [1,2,3,4]
           console.log(a)                b= [1,2,10,4]

        spread in concat
           let a=[1,2,3]
           let b=[4,5,6]                 ans: [1,2,3,4,5,6]
           let x=[...a+...b]
           console.log(x)
        
 /*   rest operator (...)  combine the values into an array or object
        function spreadExample(...values)
        {
          console.log(values);
        }                                       ans : [1,2,3,4,5]
    spreadExample(1,2,3,4,5) 
     
    function spreadExample(x,y,...values)
        {
          console.log(values);
        }                                       //ans : values= [3,4,5], x=a, y=2
    spreadExample(1,2,3,4,5) 
     
    function spreadExample(values)
        {
          console.log(values);
        }                                       //ans : values= 1
    spreadExample(1,2,3,4,5) */
 
/*spread operator in object
    let student1 = 
    {
        name : ["abc","cdv","vfg"],
        age :20,
        place :"salem"               if any changes in b then a will not change
    }
    let b ={...a};
    console.log(b)  

//Destructuring operator
    let a=[1,2,3,4,5];                  ans :1,2,3,[4,5]
    let [x,b,c,...d]=a;              here rest operator is used because it combines the remaining 4,5 
    console.log(x,b,c,d) 

let student1 =
{
    name : ["abc","cdv","vfg"],
    age :20,
    place :"salem"              needed obj should be provided with that same name others which are wish to
}                                  add should be given with any character so name is given and others are 
let {name,...a}=student1           given with ...a
console.log(name,a) */

       ///function is passed asa parameter to another function is called call back
    /*function dog(callback)
    {
        setTimeout(()=>
        {
            console.log("JACK the dog");
            callback();
        },2000);
    }
    function cat()
    {
        console.log("ROSE the cat");
    }
    dog(cat) */

   /* function attendance(lunch)
    {
        console.log("Present");
        lunch();
    }
    function lunch(callback)
    {
        console.log("sambar");
        callback();
    }
    function goinghome()
    {
        console.log("went");
        console.log("Day completed successfully")
    }

    // call back hell                               
    attendance(()=>{                             
        lunch(()=>{                              
            goinghome()                              
        })
    })  */
  
        //Promise :    instead of call back it is used
    /*function attendance()
    {
        return new Promise((resolve,reject)=>
        {
            let att = false;
            if(att)
                resolve("present")
            else 
                reject("absent")
        })
    }
    function lunch()
    {
        return new Promise((resolve,reject)=>
            {
                let lun = false;
                if(lun)
                    resolve("had lunch")
                else 
                    reject("did not have lunch")
            })
    }
    function go()
    {
        return new Promise((resolve,reject)=>
            {
                let going = true;
                if(going)
                    resolve("went")
                else 
                    reject("hostel")
            })
    }
    attendance().then((value)=>{console.log(value);return lunch()})
                 .then((value)=>{console.log(value);return go()})
                 .then((value)=>{console.log(value);})
                 .catch((err)=> console.error(err)) */

    //if any reject occurs then another function cannot execute it stops with that reject only.

      //  Asynchronous(async) / await (in parallel to promise) to avoid then conditions in promise it is used
      // await is used to hold for some time to take all required details
      // synchronous - all function should wait and executes one after other
      // asynchronous - all function work simultaneously if one function does not depend on other function

     /* function attendance()
      {
          return new Promise((resolve,reject)=>
          {
              let att = true;
              if(att)
                  resolve("present")
              else 
                  reject("absent")
          })
      }
      function lunch()
      {
          return new Promise((resolve,reject)=>
              {
                  let lun = false;
                  if(lun)
                      resolve("had lunch")
                  else 
                      reject("did not have lunch")
              })
      }
      function go()
      {
          return new Promise((resolve,reject)=>
              {
                  let going = true;
                  if(going)
                      resolve("went")
                  else 
                      reject("hostel")
              })
      } 
    async function fullday()
    {
        try
        {
            let atten = await attendance();
            console.log(atten)
            let lunc = await lunch()
            console.log(lunc)
            let home = await go()
            console.log(home)
        }
        catch(error)
        {
            console.error(error)
        }
    }
    fullday()  */

   // example for call back

  /* function fileA(callback,f)
   {
    console.log(`file ${f} is being processed`)       ans: file abc is being processed
    setTimeout(()=>{                                       file abc got download
       console.log(`file ${f} got download`);               download completed
       callback();                                 
    },2000)
   }
   function fileB()
   {
    console.log("download completed")
   }
   fileA(fileB,"abc") */