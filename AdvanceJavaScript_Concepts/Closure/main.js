/*
    Closure : 
*/

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
//   inner();
  return inner;
}

// outer();
// outer();
// outer();
const fn = outer();
fn()
fn()
