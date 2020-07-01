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

