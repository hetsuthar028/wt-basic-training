// Task - 1
let squaredNumbers = "";
for(let i = 1; i <= 20; i++){
    squaredNumbers += `${i}<sup>2</sup> = ${i*i} <br />`;
}

document.getElementById('number-squares').innerHTML = squaredNumbers;