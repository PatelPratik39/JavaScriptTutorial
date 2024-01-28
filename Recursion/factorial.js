let num = 179;

function factotial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factotial(n-1);
  }
}
let result = factotial(num);
console.log(result);
