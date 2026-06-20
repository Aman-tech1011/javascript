// 1.Arrow functions

// function greet(name,callback){
//     console.log("Hello" + name);
//     callback();
// }

// function sayBye(){
//     console.log("Good Bye");
// }

// greet("Aman", sayBye)

//------------------------------------------------------------------

// 2.Anonymous function

// setTimeout(function(){
//    console.log("exceuted after 2 second");
// },10000);

//--------------------------------------------------------------

  // 3.Arrow function

//   const add=(a,b)=>{
//          return a+b;
//   }

//   console.log(add(4,2));
  
//-----------------------------------------------------------------------

    // 4. Rest operater 

//   function sum(...numbers) {
//     let total = 0;

//     for(let num of numbers) {
//         total += num;
//     }

//     return total;
// }

// console.log(sum(1,2,3,4,5));

//-------------------------------------------------------------------

  // 5. Higher order functions
  
//   function operation(a,b,callback){
//     return callback(a,b);
//   }

//   function multiply(x,y){
//     return x*y;
//   }

//   console.log(operation(4,6,multiply));
  