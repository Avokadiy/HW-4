import {greet} from "/modules/greet.js"

import {calcCelsiusToFahrenheit, showFahrenheit} from "./modules/celsiusToFahrenheit.js";

import {calculateFallDistance, showFallDistance} from "/modules/fallDistanceHelper.js"

import {calculateAverageNumber,showAverageNumber} from "./modules/calculateAverageNumber.js";

import {concatStrings, showConcatStrings} from "./modules/concatStrings.js"

const myName = "Никита";
let celsius = prompt('Укажите градусы Цельсия', 15);
let celsiusConvRes = calcCelsiusToFahrenheit(celsius);
let time = prompt('Время падения объекта в секунду', 999);
let distance = calculateFallDistance(time);
let firstNumber = Number(prompt('Введите первое число'));
let secondNumber = Number(prompt('Введите второе число'));
let thirdNumber = Number(prompt('Введите третье число'));
let averageNumberRes = calculateAverageNumber(firstNumber, secondNumber, thirdNumber);
let firstWord = prompt('Введите первое слово');
let secondWord = prompt('Введите второе слово');
let concatStringsRes = concatStrings(firstWord, secondWord);

greet(myName);
showFallDistance(distance);
showFahrenheit(celsiusConvRes);
showAverageNumber(averageNumberRes);
showConcatStrings(concatStringsRes);
