// Объявление переменных
let name = 'John';
let age = 30;
const PI = 3.14159;

// Типы данных
let greeting = 'Hello, World!';
let number = 42;
let isAdmin = true;
let colors = ['red', 'green', 'blue'];
let person = {
  name: 'Jane',
  age: 25,
  isAdult: function() {
    return this.age >= 18;
  }
};

// Условные операторы
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  console.log("Yay, I love chocolate ice cream!");
} else {
  console.log("Awwww, but chocolate is my favorite…");
}

let day = 2;
switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  default:
    console.log("Другой день");
}

// Циклы
for (let i = 0; i < 5; i++) {
  console.log(`Итерация ${i + 1}`);
}

let j = 0;
while (j < 5) {
  console.log(`Итерация ${j + 1} (while)`);
  j++;
}

let fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
  console.log(fruit);
}

// Функции
function greet(name) {
  console.log(`Привет, ${name}`);
}

greet("Alice");

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

console.log(multiply(4, 7)); // Вывод: 28

// Комментарии и синтаксис
// Initializing a variable:
let pi = 3.14;

/* Defining multiple variables
For certain function */
let randomVar = Math.random();

const now = new Date();
console.log(now);

if (x === 1) {
  // execute code if true
} else {
  // execute code if false
}