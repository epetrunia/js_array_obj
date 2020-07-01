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
 * @param {Array} arr
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
 * @param {Array} arr
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

// 4. Функция принимает массив и возвращает его максимальный элемент.
console.log('4. Функция принимает массив и возвращает его максимальный элемент.');

/**
 *
 * @param {Array} arr
 * @returns {number}
 */
function maxElement(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(maxElement(array1));

// 5. Функция добавления нового элемента в массив по указанному индексу.
console.log('5. Функция добавления нового элемента в массив по указанному индексу.');

/**
 *
 * @param {Array} arr - base array
 * @param {number} index - expected place for new element
 * @param {number} element - new element
 */
function addElement(arr, index, element) {
    for (let i = arr.length; i >= 0; i--) {
        if (i > index) {
            arr[i] = arr[i - 1];
        } else if (i === index) {
            arr[i] = element;
        }
    }
}

addElement(array1, 2, 10);
console.log(`Element '10' has been added in index 2: ${array1}`);

// 6. Функция удаления элемента из массива по указанному индексу.
console.log('6. Функция удаления элемента из массива по указанному индексу.');


function deleteElement(arr, index) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (i >= index) {
            arr[i] = arr[i + 1];
        }
    }
    delete arr[arr.length - 1];
    arr.length -= 1;
}

deleteElement(array1, 3);
console.log(`Element in index 3 has been deleted: ${array1}`);
