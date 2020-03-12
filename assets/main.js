var sliderValue = document.getElementById('paswordCharacterCount');
var passwordCharacterCount  = parseInt(sliderValue.value);

var includeUpperCase = document.getElementById('includeUpperCase').checked;
var includeNumbers = document.getElementById('includeNumbers').checked;
var includeSpecial = document.getElementById('includeSpecial').checked;

var baseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var baseUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var baseNumbers = ['0','1','2','3','4','5','6','7','8','9'];
var baseSpecial = ["U+0021","U+0022"];


function generatePassword(){
    var password = [];

    if(includeUpperCase == false && includeNumbers == false && includeSpecial == false){
        for(var i=0; i<passwordCharacterCount; i++){
            password[i] = baseCharacters[Math.floor(Math.random() * baseCharacters.length)];
        } 
        password = password.join('');
        console.log(password);
    }
    
}
