// Task - 1
let evenReversed = "";
for(let i = 50; i >=20; i--){
    if(i%2 == 0){
        evenReversed += i + " ";
    }
}

document.getElementById('even-reverse').innerHTML = evenReversed;


// Task - 2
let oddSum = 0;
for(let i = 1; i <= 10; i++){
    if(i%2 !=0){
        oddSum +=i
    }
}

document.getElementById('odd-sum').innerHTML = oddSum;

// Task - 3
function getFactorial(n){
    if(n == 1){
        return 1
    }
    return n * getFactorial(n-1);
}

document.getElementById('factorial').innerHTML = getFactorial(5).toString();

// Task - 4
function isPrime(n){
    let flag = true;
    for(let i = 2; i <n/2; i++ ){
        if(n%i == 0){
            flag = false;
            break;
        }
    }
    return flag;
}

document.getElementById('prime').innerHTML = isPrime(97) ? "Yes!" : "No!";