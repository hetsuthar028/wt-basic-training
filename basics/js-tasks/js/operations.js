document.getElementById('addition').innerHTML = (10 + 2);
document.getElementById('multiplication').innerHTML = (10 * 2);
document.getElementById('division').innerHTML = (10 / 2);
document.getElementById('multiplication').innerHTML = (10 * 2);
document.getElementById('remainder').innerHTML = (10 % 2);
document.getElementById('subtraction').innerHTML = (10 - 2);
let i = 10;
document.getElementById('increment').innerHTML = (++i);
document.getElementById('decrement').innerHTML = (--i);

function areaOfRectangle(h, w){
    return h*w;
}

function areaOfCircle(r){
    return Math.PI * r * r;
}

document.getElementById('rectangle-area').innerHTML = areaOfRectangle(30, 20).toString();
document.getElementById('circle-area').innerHTML = areaOfCircle(8).toString();

let a = 5;
let b = 6;

let temp = 5 + 6;
document.getElementById('swap-numbers').innerHTML = `a = ${temp - a}, b = ${temp - b}`;

function getPercentage(...marks){
    let sum = 0;
    marks.map(m => sum +=m);
    return sum / marks.length;
}

document.getElementById('percentage').innerHTML = getPercentage(89, 81, 94, 87, 91).toString() + "%";