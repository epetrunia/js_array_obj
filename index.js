'use strict';

//Задание 1
// Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.

const array1 = [];

for (let i = 0; i < 10; i++) {
    array1.push(Math.round(Math.random() * 100));
}

// 1. Функция принимает массив и выводит его на экран.
console.log('1. Функция принимает массив и выводит его на экран');

/**
 *
 * @param arr
 */
function displayArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

displayArray(array1);

// 2. Функция принимает массив и выводит только четные элементы.
console.log('2. Функция принимает массив и выводит только четные элементы.');

/**
 *
 * @param arr
 */
function evenItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

evenItems(array1);

// 3. Функция принимает массив и возвращает сумму всех элементов массива.
console.log('3. Функция принимает массив и возвращает сумму всех элементов массива.');

/**
 *
 * @param {Array} arr
 * @returns {number}
 */
function sumElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumElements(array1));