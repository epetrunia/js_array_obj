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

/**
 *
 * @param {Array} arr - base array
 * @param {number} index - index of deleted element
 */
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

// Задание 2
// Создать еще один массив из 5 случайных чисел и написать следующие функции.

const array2 = [];

for (let i = 0; i < 5; i++) {
    array2.push(Math.round(Math.random() * 100));
}
console.log(array2);

// 1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.
console.log('Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.');

/**
 *
 * @param {Array} arr1 - fist array
 * @param {Array} arr2 - second array
 * @returns {Array} - new array with unique elements from arr1 & arr2
 */
function mergeArrays(arr1, arr2) {
    const arr3 = arr1.concat(arr2);
    const uniqueSet = new Set(arr3);
    return [...uniqueSet];
}

console.log(mergeArrays(array1, array2));

//2. Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.
console.log('Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.');

/**
 *
 * @param {Array} arr1 - fist array
 * @param {Array} arr2 - second array
 * @returns {Array} - new array with common elements from first and second arrays
 */
function intersectionArrays(arr1, arr2) {
    let arr3 = [];
    let flag = 0;

    for (let i = 0; i < arr2.length; i++) {
        flag = arr1.indexOf(arr2[i]);
        if (flag >= 0) {
            arr3.push(arr2[i]);
        }
    }
    return arr3;
}

console.log(intersectionArrays(array1, array2));

// 3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве.
console.log('3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве.');

/**
 *
 * @param {Array} arr1 - fist array
 * @param {Array} arr2 - second array
 * @returns {Array} - new array with elements from first which are absent in second
 */
function differenceArrays(arr1, arr2) {
    let arr3 = [];
    let flag = 0;

    for (let i = 0; i < arr1.length; i++) {
        flag = arr2.indexOf(arr1[i]);
        if (flag < 0) {
            arr3.push(arr1[i]);
        }
    }
    return arr3;
}

console.log(differenceArrays(array1, array2));
