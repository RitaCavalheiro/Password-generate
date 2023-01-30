const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const lettersNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const lettersSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let firstPasswordEd = document.getElementById("one");
let secondPasswordEd = document.getElementById("two");

async function randomPassword() {
    let passwordLength = document.getElementById("passwordLength").value;
    let password1 = '';
    let password2 = '';
    let includeSymbols = document.getElementById("include-symbols").checked;
    let includeNumbers = document.getElementById("include-numbers").checked;
    
    if (passwordLength == null || passwordLength <= 0){
        alert("Please enter a number bigger than 0 to set the length of your password")
    }
    
    let charSet;
    if (includeSymbols && includeNumbers) {
        console.log(charSet = characters);
    } else if (includeSymbols) {
        console.log(charSet = lettersSymbols);
    } else if (includeNumbers) {
        console.log(charSet = lettersNumbers);
    } else {
        console.log(charSet = letters);
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * charSet.length);
        password1 += charSet[randomNumber];
        firstPasswordEd.textContent = password1;
        
        randomNumber = Math.floor(Math.random() * charSet.length);
        password2 += charSet[randomNumber];
        secondPasswordEd.textContent = password2;
    } 
}

firstPasswordEd.onclick = () => {
    let input = document.createElement('input');
    input.value = firstPasswordEd.textContent;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    alert("Password copied to clipboard!");
    document.body.removeChild(input);
}

secondPasswordEd.onclick = () => {
    let input = document.createElement('input');
    input.value = secondPasswordEd.textContent;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    alert("Password copied to clipboard!");
    document.body.removeChild(input);
}