/*
    Function Currying :  Currying is a process in functional programing in which we transform a function with multiple arguments into a 
                         sequence of nesting functions that take one argument at a time.
*/
function sum(a,b,c) {
    return a + b+ c;
}
console.log(sum(3, 6, 9));

function curry(fn) {
    return function(a){
        return function(b){
            return function(c){
                return fn(a, b, c);
            }
        }
    }
}
const currySum = curry(sum);
console.log(currySum(3)(6)(9));

const add2 = currySum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5);