const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEd = document.getElementById("one")
let secondPasswordEd = document.getElementById("two")

async function randomPassword() {
let passwordLength = document.getElementById("passwordLength").value;

 for (let i = 0; i < characters.length; i++) {
        let password1 = '';
        let password2 = '';

        if (passwordLength == null || passwordLength <= 0){
        alert("Please enter a number bigger than 0 to set the length of your password")
        }

        let randomNumber = Math.floor(Math.random() * characters.length);
        password1 += characters[randomNumber];
        firstPasswordEd.textContent = password1;
        
        randomNumber = Math.floor(Math.random() * characters.length);
        password2 += characters[randomNumber];
        secondPasswordEd.textContent = password2;
    }
    
}