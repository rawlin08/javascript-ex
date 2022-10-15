console.log('help');

function helloWorld() {
    console.log('Hello, World!');
}

function repeatString() {
    let string = String(prompt('Enter a String'));
    let num = Number(prompt('Enter the amount of times to repeat'));
    let repeat = '';

    if (num < 0) {
        console.log('ERROR');
    }
    else if (num === 0) {
        console.log('This is empty');
    }
    else if (num === 1) {
        console.log(string);
    }
    else {
        while (num > 0) {
            repeat += string;
            num--;
        }
        console.log(repeat);
    }
}

function reverseString() {
    string = String(prompt('Write a string'))
    
    let split = string.split('');
    let reverse = split.reverse();
    let join = reverse.join('');

    console.log(join);
}

function removeFromArray() {
    console.log('Not Finished');
}

function sumAll() {
    let num1 = Number(prompt('Enter a Number'));
    let num2 = Number(prompt('Enter Another Number'));
    let arr = [num1, num2];
    console.log(arr);
    let final = 0;

    if (num1 > num2) {
        let reverse = arr.reverse();
        console.log(reverse);

        while (num2 <= num1) {
            final += num2;
            num2 += 1;
        }

        console.log(final);
    }
    else if (num1 < num2) {
        while (num1 <= num2) {
            final += num1;
            num1 += 1;
        }

        console.log(final);
    }
    else {
        console.log('ERROR');
    }
}

function leapYears() {
    let year = Number(prompt('Enter a Year'));

    if (isNaN(year)) {
        console.log('Not a Year');
    }
    else if (year % 4 === 0 && year % 100 != 0) {
        console.log(year + ' True. Year is divisible by 4.');
    }
    else if (year % 100 === 0 && year % 400 != 0) {
        console.log(year + ' False. Year is divisible by 100 but not 400.');
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        console.log(year + ' True. Year is divisible by 100 and 400.');
    }
    else if (year % 4 != 0 && year % 100 != 0) {
        console.log(year + ' False. Year is not divisible by 4 and 100.');
    }
}

function ftoc() {
    let f = Number(prompt('Enter a Number to Convert to Celsius'));
    let c = 0;

    if (isNaN(f)) {
        console.log('Not a Number');
    }
    else {
        c = 5/9 * (f - 32);
        let rounded = Math.round(c * 10) / 10;
        console.log('Celsius: ' + rounded);
    }
}

function ctof() {
    let c = Number(prompt('Enter a Number to Convert to Fahrenheit'));
    let f = 0;

    if (isNaN(c)) {
        console.log('Not a Number');
    }
    else {
        f = (9/5 * c + 32);
        let rounded = Math.round(f * 10) / 10;
        console.log('Fahrenheit: ' + rounded);
    }
}