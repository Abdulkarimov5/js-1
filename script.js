/* const userInput1 = +prompt("Введите первое число")
const userInput2 = +prompt("Введите второе число")

function compareNumbers(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else {
        return 0;
    }
}

console.log(compareNumbers(userInput1, userInput2)); */

/* const userInput1 = +prompt("Введите число")

function factorial(number) {
    if (number < 0) {
        return 'Ошибка: факториал отрицательного числа не существует';
    }
    if (number === 0 || number === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(userInput1)); */

/* const userInput1 = prompt("Введите первое число")
const userInput2 = prompt("Введите второе число")
const userInput3 = prompt("Введите третье число")

function combineDigits(digit1, digit2, digit3) {
    return Number(digit1.toString() + digit2.toString() + digit3.toString());
}

console.log(combineDigits(userInput1, userInput2, userInput3)); */

/* const userInput1 = +prompt("Введите первое число")
const userInput2 = prompt("Введите второе число")

function calculateArea(length, width) {
    if (width == undefined || width == 0) {
        return length * length;
    }
    return length * width;
}

alert(calculateArea(userInput1, userInput2)); */

/* const userInput1 = +prompt("Введите первое число")

function isPerfectNumber(num) {
    if (num <= 1) return false;

    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

console.log(isPerfectNumber(userInput1)); */

/* const userInput1 = +prompt("Введите первое число")
const userInput2 = +prompt("Введите второе число")

function isPerfectNumber(num) {
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

function findPerfectNumbersInRange(min, max) {
    let perfectNumbers = [];
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }
    return perfectNumbers;
}

console.log(`Совершенные числа в диапазоне от ${userInput1} до ${userInput2}:`);
console.log(findPerfectNumbersInRange(userInput1, userInput2)); */

/* const userInput1 = prompt("Введите первое число")
const userInput2 = prompt("Введите второе число")
const userInput3 = prompt("Введите третье число")

function formatTime(hours, minutes = 0, seconds = 0) {
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    console.log(formattedTime);
}

formatTime(userInput1, userInput2, userInput3); */

/* const userInput1 = +prompt("Введите первое число")
const userInput2 = +prompt("Введите второе число")
const userInput3 = +prompt("Введите третье число")

function timeToSeconds(hours, minutes, seconds) {
    // Преобразуем часы и минуты в секунды и суммируем все
    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    return totalSeconds;
}

console.log(timeToSeconds(userInput1, userInput2, userInput3)); */

/* const userInput1 = +prompt("Введите число")

function secondsToTimeString(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    return timeString;
}

console.log(secondsToTimeString(userInput1)); */

/* const userInput1 = prompt("Введите первое число")
const userInput2 = prompt("Введите второе число")
const userInput3 = prompt("Введите третье число")
const userInput4 = prompt("Введите четвертое число")
const userInput5 = prompt("Введите пятое число")
const userInput6 = prompt("Введите шестое число")
const userInput7 = prompt("Введите седьмое число")
const userInput8 = prompt("Введите восьмое число")
const userInput9 = prompt("Введите девятое число")
const userInput10 = prompt("Введите десятое число")
const userInput11 = prompt("Введите одинадцатое число")
const userInput12 = prompt("Введите двенадцатое число")

function calculateTimeDifference(day1, month1, year1, hour1, minute1, second1, day2, month2, year2, hour2, minute2, second2) {
    const date1 = new Date(year1, month1 - 1, day1, hour1, minute1, second1);
    const date2 = new Date(year2, month2 - 1, day2, hour2, minute2, second2);
    
    const differenceInMilliseconds = Math.abs(date2 - date1);

    const seconds = Math.floor((differenceInMilliseconds / 1000) % 60);
    const minutes = Math.floor((differenceInMilliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((differenceInMilliseconds / (1000 * 60 * 60)) % 24);

    const formattedTime = 
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');

    return formattedTime;
}

alert(calculateTimeDifference(userInput1, userInput2, userInput3, userInput4, userInput5, userInput6, userInput7, userInput8, userInput9, userInput10, userInput11, userInput12)); */