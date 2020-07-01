'use strict';

//Задание 1
// Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.

const array1 = [];

for (let i = 0; i < 10; i++) {
    array1.push(Math.round(Math.random() * 100));
}

