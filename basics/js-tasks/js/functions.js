// Task - 1
let addition = (a, b) => {
    return a + b;
}
let multiplication = (a, b) => {
    return a * b;
}
let division = (a, b) => {
    return a / b;
}
let subtraction = (a, b) => {
    return a - b;
}
let remainder = (a, b) => {
    return a % b;
}
let increment = (a) => {
    return ++a;
}
let decrement = (a) => {
    return --a;
}
document.getElementById('addition').innerHTML = addition(10, 2);
document.getElementById('multiplication').innerHTML = multiplication(10, 2);
document.getElementById('division').innerHTML = division(10, 2);
document.getElementById('subtraction').innerHTML = subtraction(10, 2);
document.getElementById('remainder').innerHTML = remainder(10, 2);
document.getElementById('increment').innerHTML = increment(10);
document.getElementById('decrement').innerHTML = decrement(10);

// Task - 2
let areaOfRectangle = (h, w) => {
    return h*w;
}

let areaOfCircle = (radius) => {
    return Math.PI * radius * radius;
}

let areaOfSquare = (side) => {
    return side * side;
}

let areaOfTriangle = (b, h) => {
    return 1/2 * b * h;
}

document.getElementById('rectangle-area').innerHTML = areaOfRectangle(4, 6);
document.getElementById('circle-area').innerHTML = areaOfCircle(9);
document.getElementById('square-area').innerHTML = areaOfSquare(7);
document.getElementById('triangle-area').innerHTML = areaOfTriangle(8, 4);
