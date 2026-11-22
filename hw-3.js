/*let password = 'пароль';
let userPass = prompt('Введите пароль')

if (userPass === password) {
    alert('Пароль введен верно!')
} else {
    alert('Пароль введен неправильно!')
}

let c = 2 // 0, 10, -3

if (c > 0 && c < 10) {
    alert('Верно')
} else {
    alert('Неверно')
}

let d = 13 // Задание 3
let e = 100

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let a = '2'; // Задание 4
let b = '3';

alert(Number(a) + Number(b));*/

let monthNumber = 12; // Задание 5

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default: console.log('Некорректный номер месяца');
        break;
}