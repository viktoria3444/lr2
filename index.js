// 1️⃣ Привітання
function helloUser() {
  alert("Привіт! Натисни ОК, щоб побачити привітання 😊");
  document.getElementById("task1").innerHTML = "<strong>Hello, Зваричович Вікторія!</strong>";
}

// 2️⃣ Перевірка натиснутої кнопки
function checkButton() {
  let result = confirm("Натисни 'ОК' або 'Відміна'");
  let message = result ? "Ви натиснули ОК!" : "Ви натиснули Відміна!";
  document.getElementById("task2").textContent = message;
}

// 3️⃣ Таблиця множення
function multiplicationTable() {
  let num = 7; // остання цифра номера у журналі
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += `${num} × ${i} = ${num * i}<br>`;
  }
  document.getElementById("task3").innerHTML = output;
}

// 4️⃣ Перевірка парності
function checkEvenOdd() {
  let number = 7; // номер у журналі
  let p = document.getElementById("evenOdd");
  if (number % 2 === 0) {
    p.innerHTML = `${number} — <b style="color:green">парне число</b>`;
  } else {
    p.innerHTML = `${number} — <b style="color:red">непарне число</b>`;
  }
}

// 5️⃣ Генератор пароля
function generatePassword() {
  let name = "Вікторія";
  let number = 7;
  let password = name.slice(0, 3) + (number * 2);
  document.getElementById("password").innerHTML = "Ваш пароль: <b>" + password + "</b>";
}

// 6️⃣ Середнє з трьох оцінок
function averageGrade() {
  let a = +prompt("Введіть першу оцінку:");
  let b = +prompt("Введіть другу оцінку:");
  let c = +prompt("Введіть третю оцінку:");
  let avg = ((a + b + c) / 3).toFixed(2);
  document.getElementById("avg").innerHTML = "Середня оцінка: <b>" + avg + "</b>";
}

// 7️⃣ Введення студентів
function enterStudents() {
  let n = +prompt("Введіть кількість студентів:");
  let result = "";
  for (let i = 1; i <= n; i++) {
    let name = prompt(`Введіть ПІБ студента №${i}:`);
    result += `${i}. ${name}<br>`;
  }
  document.getElementById("students").innerHTML = result;
}

// 8️⃣ Список літер імені
function createNameList() {
  const name = "Вікторія";
  const ul = document.getElementById("nameList");
  ul.innerHTML = "";
  for (let letter of name) {
    let li = document.createElement("li");
    li.textContent = letter;
    li.onmouseover = () => alert("Це літера: " + letter);
    ul.appendChild(li);
  }
}

// 9️⃣ Введення студентів до «Відміна»
function enterStudentsUntilCancel() {
  let result = "";
  while (true) {
    let fullName = prompt("Введіть ПІБ (або натисніть Відміна)");
    if (fullName === null) break;
    result += fullName + "<br>";
    document.getElementById("students2").innerHTML = result;
  }
}

// 🔟 Блоки з літерами прізвища
function showBlocks() {
  const container = document.getElementById("letters");
  const surname = "Зваричович";
  if (container.children.length > 0) {
    container.innerHTML = ""; // очищає при повторному натисканні
    return;
  }
  for (let letter of surname) {
    let div = document.createElement("div");
    div.textContent = letter;
    div.onmouseover = () => alert("Це літера: " + letter);
    container.appendChild(div);
  }
}
