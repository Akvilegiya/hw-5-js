
let drink = prompt("Оберіть напійт Кава, Чай або Сік");

switch (drink) {
    case "Кава":
        console.log("Ви обрали каву");
        alert("Ви обрали каву"); 
        break;
    case "Чай":
        console.log("Ви обрали чай");
        alert("Ви обрали чай");
        break;
    case "Сік":
        console.log("Ви обрали сік");
        alert("Ви обрали сік");
        break;
    default:
        console.log("Такого напою немає в списку");
        alert("Такого напою немає в списку");
}



let day = prompt("Напишіть день неділі"); 

if (day === "Субота" || day === "Неділя") {
    console.log("Це вихідний день");
} else {
    console.log("Це робочий день");
}


let month = Number(prompt("Введіть номер місяця (від 1 до 12):"));

if (month === 12 || month === 1 || month === 2) {
    alert("Зима");
    console.log("Зима");
} else if (month >= 3 && month <= 5) {
    alert("Весна");
    console.log("Весна");
} else if (month >= 6 && month <= 8) {
    alert("Літо");
    console.log("Літо");
} else if (month >= 9 && month <= 11) {
    alert("Осінь");
    console.log("Осінь");
} else {
    alert("Невірний номер місяця! Введіть число від 1 до 12.");
    console.log("Невірний номер місяця");
}



let num1 = Number(prompt("Введіть перше число:"));
let operator = prompt("Введіть оператор (+, -, *, /):");
let num2 = Number(prompt("Введіть друге число:"));

let result;

if (isNaN(num1) || isNaN(num2)) {
    alert("Помилка: Ви ввели не число!");
    console.log("Помилка введення числа");
} else {
    switch (operator) {
        case "+":
            result = num1 + num2;
            alert("Результат: " + result);
            console.log("Результат: " + result);
            break;
            
        case "-":
            result = num1 - num2;
            alert("Результат: " + result);
            console.log("Результат: " + result);
            break;
            
        case "*":
            result = num1 * num2;
            alert("Результат: " + result);
            console.log("Результат: " + result);
            break;
            
        case "/":
            if (num2 === 0) {
                alert("Попередження: Ділення на нуль неможливе!");
                console.log("Попередження: Ділення на нуль!");
            } else {
                result = num1 / num2;
                alert("Результат: " + result);
                console.log("Результат: " + result);
            }
            break;
            
        default:
            alert("Невідомий оператор! Використовуйте +, -, *, /");
            console.log("Невідомий оператор");
    }
}