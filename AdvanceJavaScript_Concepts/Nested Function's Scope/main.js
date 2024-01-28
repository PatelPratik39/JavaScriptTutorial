/*

    1) Blocked Scope  :  variables declared inside a pair of curly braces can not be accessed from outside the block
    2) Function Scope :  variables declared inside a function cannot be accessed from ouside of the function
    3) Global Scope   :  globally scoped variables can be accessed inside a block or Function

*/

// nested function

let a = 10;

function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();
