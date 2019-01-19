"use strict";

/** 
 * 1 С помощью цикла do…while написать алгоритм для вывода чисел от 0 до 10
включительно
*/
function myDoWhileFunction() {
    let i = 0;
    do {
        if (i === 0) {
            console.log(`это ноль ${i}`);
        } else {
            if (i % 2 === 0) {
                console.log(`четное число  ${i}`);
            } else {
                console.log(`нечетное число  ${i}`);
            }
        }
        i++;
    }
    while (i <= 10);

}
myDoWhileFunction();
/** 
Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть
выглядеть должно вот так:
*/
function myForFunction() {
    let i;
    for (i = 0; i < 10; console.log(i), i++) {

    }
}
myForFunction();

/**
 * Нарисовать горку с помощью console.log (используя цикл for), как показано на
рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
 */
function xHill() {
    let i;
    let x;
    for (i = 0, x = 'x'; i < 20; i++) {
        console.log(i, x);
        x = x + 'xx';

    }
}
xHill();

/**
 * 4*. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
(можно без оптимизаций). Моя имплементация алгоритма "Решето Сундарама"
https://en.wikipedia.org/wiki/Sieve_of_Sundaram
 */

function sieveOfSundaram() {
    let n = parseInt(prompt('введите число в пределах которого нужно найти все простые числа '));
    /**
     *  naturalNumArr массив с номерами 1-100. 
     */
    //В питоне проще запись.. (в js не нашел аналогов) 
    let naturalNumArr = (function (a, b) { while (a--) b[a] = a + 1; return b })(n, []);
    /** 
     * Массив undroppedNumbers для исключений из ряда натуральных чисел от 1 до n. Всех чисел вида: i+j+2ij
     */
    let undroppedNumbers = Array.from(naturalNumArr);
    // Перебор неподходящих чисел и удаление их из undroppedNumbers
    for (const i of naturalNumArr) {
        for (const j of naturalNumArr) {
            const toDrop = i + j + (2 * i * j);
            if (toDrop > n) {
                break;
            } else {
                var index = undroppedNumbers.indexOf(toDrop);
                if (index > -1) {
                    undroppedNumbers.splice(index, 1);
                }
            }
        }
    }
    /** 
     * Массив простых чисел.
     * Применяем к каждому (m) из undroppedNumbers (2m+1)
     */
    let primeNumbers = [1, 2,];
    for (const m of undroppedNumbers) {
        let primeNum = 2 * m + 1;
        if (primeNum <= n) {
            primeNumbers.push(2 * m + 1);
        } else {
            break;
        }
    }
    return primeNumbers;
}
console.log(sieveOfSundaram());
/*
5*. Дан массив (создать такой же, с такими же значениями):

const arr = [
[2, 4, 6],
[1, 5, 10],
[7, 4, 1],
];
*/

function buildNumArr(num, sign, step, len) {
    let firstNum = parseInt(num);
    let thisArr = [];
    let i;
    for (i = 0; i < len; i++) {
        thisArr[i] = num;
        if (sign === '-') {
            num -= step;
        } else {
            num += step;
        }

    }
    return thisArr
}

let mainArr = [];
mainArr.push(buildNumArr(2, '+', 2, 3));
mainArr.push([1, 5, 10]); // ??? тут я не понял ... 
mainArr.push(buildNumArr(7, '-', 3, 3));
console.log(mainArr);

//доп задание
let naturalNumArr = (function (a, b) { while (a--) b[a] = a + 1; return b })(10, []);
let i;
for (i = naturalNumArr.length; i >= 0; console.log(naturalNumArr[i]), i--) { };