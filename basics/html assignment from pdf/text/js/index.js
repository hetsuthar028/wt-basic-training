// Text - Task 2
let numberColors = ["red", "green", "darkblue", "orange", "brown", "blue", "black", "violet", "pink", "skyblue"]
let newNumbers = "";
for(let i = 1; i <= 10; i++){
    newNumbers += `<span style="color:${numberColors[i-1]};">${i}</span> `;
}
document.getElementById('numbers').innerHTML = newNumbers;

// Text - Task 4
let fontFamilies = ["Times New Roman", "verdana", "Courier New", "Arial", "serif"]
let paragraphSentences = document.getElementById('font-family-paragraph').innerText.toString().split('.');

let newlyFormatedParagraph = "";

for(let i = 0; i < paragraphSentences.length; i++){
    newlyFormatedParagraph += `<span style="font-family:'${fontFamilies[i]}';color:${numberColors[i]}">${paragraphSentences[i]}.</span>`;
}
document.getElementById('font-family-paragraph').innerHTML = newlyFormatedParagraph;

