<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>Лабораторна робота №2 — Змінні та оператори в JavaScript</title>
  <style>
    body {
      font-family: "Segoe UI", sans-serif;
      background-color: #f7faff;
      color: #222;
      margin: 40px;
      line-height: 1.6;
    }

    h1 {
      text-align: center;
      color: #1a73e8;
    }

    h2 {
      color: #333;
      margin-top: 30px;
    }

    button {
      display: block;
      margin: 15px auto;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 10px;
      border: none;
      background-color: #1a73e8;
      color: white;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background-color: #155bb5;
    }

    .level {
      border: 1px solid #ddd;
      padding: 15px;
      border-radius: 10px;
      margin-bottom: 25px;
      background-color: #ffffff;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <h1>Лабораторна робота №2</h1>
  <p><strong>Тема:</strong> Змінні та оператори в JavaScript</p>

  <div class="level">
    <h2>Рівень 4–6 балів</h2>
    <button onclick="level4_6()">Запустити</button>
  </div>

  <div class="level">
    <h2>Рівень 7–9 балів</h2>
    <button onclick="level7_9()">Запустити</button>
  </div>

  <div class="level">
    <h2>Рівень 10–12 балів</h2>
    <button onclick="level10_12()">Запустити</button>
  </div>

  <script>
    // ======== РІВЕНЬ 4–6 ========
    function level4_6() {
      // 1) Привітання з користувачем
      let userName = prompt("Enter your name:");
      alert(`Hello, ${userName}! Welcome to JavaScript`);

      // 2) Обчислення року народження
      let age = prompt("Enter your age:");
      let currentYear = new Date().getFullYear();
      let birthYear = currentYear - age;
      alert(`You were born in ${birthYear}`);

      // 3) Повне ім’я
      let firstName = prompt("Enter your first name:");
      let lastName = prompt("Enter your last name:");
      console.log("Your full name is " + firstName + " " + lastName);
      console.log(`Your full name is ${firstName} ${lastName}`);
    }

    // ======== РІВЕНЬ 7–9 ========
    function level7_9() {
      // 1) Область видимості змінних
      let userName = "Victoria";
      if (true) {
        let userName = prompt("Enter another name:");
        console.log("Змінна всередині if:", userName);
      }
      console.log("Глобальна змінна:", userName);
      // Пояснення: змінна всередині if існує лише у блоку (let — блочна область видимості)

      // 2) Взаємодія з користувачем через confirm
      let name = prompt("Enter your name:");
      let age = prompt("Enter your age:");
      let confirmMessage = confirm(`Hello, ${name}! Your age is ${age}. Continue?`);
      if (confirmMessage) {
        alert("Welcome!");
      } else {
        alert("Goodbye!");
      }

      // 3) Перевірка парності числа
      let number = prompt("Enter a number:");
      if (number % 2 === 0) {
        alert("Number is even");
      } else {
        alert("Number is odd");
      }
    }

    // ======== РІВЕНЬ 10–12 ========
    function level10_12() {
      // 1) Демонстрація блочної області видимості
      function calculate() {
        let result = 10;
        if (true) {
          let result = 20;
          console.log("Результат всередині if:", result);
        }
        console.log("Результат поза if:", result);
      }
      calculate();

      // 2) Перевірка секретного числа
      const secretNumber = 7 % 10; // приклад, де 7 — це номер у журналі
      let guess = prompt("Enter a number from 0 to 9:");
      if (Number(guess) === secretNumber) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }

      // 3) Сума двох чисел
      let userName = prompt("Enter your name:");
      let num1 = Number(prompt("Enter first number:"));
      let num2 = Number(prompt("Enter second number:"));
      let sum = num1 + num2;
      console.log("Hello, " + userName + "! The sum of " + num1 + " and " + num2 + " is " + sum);
    }
  </script>
</body>
</html>
