"use strict";
//1. Объясните почему код даёт именно такие результаты?
let a = 1, b = 1, c, d;
console.log(a, b, c, d);
/* первым двум переменным присваивается номер 1, 
c и d обозначаются как переменные без значение (undefined)
*/

c = ++a;
// alert(c); 2
/* 
префикс ++ или -- , означают инкримент и дикримент соответственно. 
Увеличивают или уменьшают на 1 переменную стоящию за ними('а') 
и присваивают это значение переменной ('с')

*/

d = b++;
/* постфикс идет после переменной(b) и тоже увеличивает/уменьщает ее , 
однако в d передается оригинальное значение b (до увеличения/уменьшения)
*/

c = 2 + ++a;
/* с будет 2 + (а+1) . 
поскольку а уже увеличивалось на 1 выше, то будет 2+(2+1)=5
*/


d = 2 + b++;

/* изначально b было один , потом его один раз увеличили, стало 2. 
сейчас его тоже увеличили на 1,
но уже после того как сложили 2 +b(2) и передали значение d(4). 
после чего b увеличивается на 1 (++). b=3
*/

console.log(a, b);


/*	
2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло 
(описать последовательность действий).
    */
//let a = 2; уже есть переменная а, задам другое имя 's'
let s = 2;
let x = 1 + (s *= 2);
/*
*= 2 Умножает значение S на 2 и присваеивает результат обратно этой же переменной (s = 4)
x = 1 + 4 = 5
*/

console.log(s, x);
/*
3 Объявить две переменные a и b и задать им целочисленные произвольные начальные
значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным
числом);
- если а и b отрицательные, вывести их произведение;
- если а и b разных знаков, вывести их сумму;
*/

/**
 * Функция getRndIntege генерирует псевдо случайное число 
 * @returns случайнок число в промежутке между min и max 
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
a = getRndInteger(-10, 10);
b = getRndInteger(-10, 10);
console.log(a, b);
/**
 * Функция getRndIntege генерирует псевдо случайное число от 10 до +10.
 * @a случайно целое число
 * @b случайно целое число
 * @returns см. условия задачи
 */
function myResult(a, b) {
    if (a >= 0 && b >= 0) {
        return a - b;
    } else if (a < 0 && b < 0) {
        return a * b;
    } else if (Math.sign(a) !== Math.sign(b)) {
        return a + b;
    }
}
console.log(myResult(a, b));

/*
4 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами.
Обязательно использовать оператор return.
*/
/**
 * первое число.
 * @var {int}
 */
let number1 = 2;
/**
 * вторрое число.
 * @var {int}
 */
let number2 = 2;
/**
 * Функция  сложения двух чисел
 */
function addition(number1, number2) {
    return number1 + number2;
}
/**
 * Функция  вычитания двух чисел
 */
function subtraction(number1, number2) {
    return number1 - number2;
}
/**
 * Функция  умножения двух чисел
 */
function multiplication(number1, number2) {
    return number1 * number2;
}
/**
 * Функция  деления двух чисел
 */
function division(number1, number2) {
    return number1 / number2;
}

/*
5 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости
от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

/**
 * Функция  четырех математических операций
 */
function mathOperations(number1, number2, myOperation) {
    switch (myOperation) {
        case 'сложение':
            return addition(number1, number2);
        case "вычетание":
            return subtraction(number1, number2);
        case "умножение":
            return multiplication(number1, number2);
        case "деление":
            return division(number1, number2);
        default:
            console.log('ошибка в названии операции');
    }
}

console.log(mathOperations(number1, number2, 'сложение'));
console.log(mathOperations(number1, number2, 'вычетание'));
console.log(mathOperations(number1, number2, 'умножение'));
console.log(mathOperations(number1, number2, 'деление'));
console.log(mathOperations(number1, number2, 'саввпваиваиваи'));

/*
6**. Программа должна спросить у пользователя количество денег, которое он хочет положить
в банк. Пользователь должен ввести целое число, а программа должна выдать
соответствующее сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
Если пользователь введет любое другое целое число, программа также должна выдать
соответствующее сообщение, в котором будет отображено это число, а также поставить
верное окончание в слове "рубль". Для получения верного склонения слова (любого слова с
числом) вам необходимо создать функцию.
*/

// извините не успеваю все закоментировать и сдаю так поздно... 
let customNumber = prompt('Целое число');
let intlastCustomerNumber;
if (!isNaN(+customNumber)) {
    let lastDigit = customNumber.split('')[customNumber.length - 1];
    let lastDigit2;
    console.log(customNumber.length);
    if (customNumber.length > 1) {
        lastDigit2 = customNumber.split('')[customNumber.length - 2];
    } else {
        lastDigit2 = 'x';
    }
    console.log(lastDigit2)
    lastDigit = parseInt(lastDigit);

    if (lastDigit == 1 && (lastDigit2 === '0' || lastDigit2 === 'x')) {
        console.log(`Ваша сумма в ${customNumber} рубль успешно зачислена.`);
    } else if ((lastDigit >= 2 && lastDigit <= 4) && (lastDigit2 === '0' || lastDigit2 === 'x')) {
        console.log(`Ваша сумма в ${customNumber} рубля успешно зачислена.`);
    }
    else {
        console.log(`Ваша сумма в ${customNumber} рублей успешно зачислена.`);
    }

}