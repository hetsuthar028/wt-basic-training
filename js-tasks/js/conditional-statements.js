// Task - 1
let a = 89;
let b = 90;
let c = 23;
let max;

if(a > b){
    if(a > c){
        max = a;
    }
}
else if(b > c){
    max = b;
} else {
    max = c;
}

document.getElementById('greatest-number').innerHTML = max;

// Task - 2
function getPercentage(...marks){
    let sum = 0;
    marks.map(m => sum +=m);
    return sum / marks.length;
}

let percentage = getPercentage(89, 81, 94, 87, 91);
let grade;
if(percentage > 90){
    grade = 'A';
} else if(percentage > 75) {
    grade = 'B';
} else if(percentage > 50){
    grade = 'C';
} else {
    grade = 'D';
}
document.getElementById('grade').innerHTML = grade.toString();

// Task - 3
let character = 'i'.toLowerCase();
if(character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u'){
    document.getElementById('vowel-consonant').innerHTML = "It's a Vowel";
} else {
    document.getElementById('vowel-consonant').innerHTML = "It's a Consonant";
}

let temp = 201;
if(/[a-zA-Z]/.test(temp)){
    document.getElementById('alpha-digit').innerHTML = "It's an Alphabet";
} else if(/[0-9]/.test(temp)){
    document.getElementById('alpha-digit').innerHTML = "It's a Digit";
}