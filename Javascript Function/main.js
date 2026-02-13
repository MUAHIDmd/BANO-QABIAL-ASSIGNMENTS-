function sayHello() {
  console.log("Hello JavaScript");
}

sayHello();



function add(a, b) {
  console.log(a + b);
}

add(5, 10);




function multiply(x, y) {
  return x * y;
}

let result = multiply(4, 3);
console.log(result);



function calculator(a, b, operator) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") return a / b;
}

console.log(calculator(10, 5, "/"));

