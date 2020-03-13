// Script for gassword generation. The script defines all the variables, sets up the interactive elements 
// of the page, then goes through the main password generation function.

var sliderValue = document.getElementById('paswordCharacterCount'); //range slider in form
var passwordCharacterCount  = parseInt(sliderValue.value); // turning sliver string return into an integer

//variable declarations for the check boxes and setting initial values
var includeUpperCase = false; 
var includeNumbers = false;
var includeSpecial = false;

// creating the arrays for all the possible password characters
var baseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var baseUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var baseNumbers = ['0','1','2','3','4','5','6','7','8','9'];
var baseSpecial = ["U+0021","U+0022"];

// event listeners for when the form is manipulated (slider & check boxes)
document.getElementById('includeUpperCase').addEventListener( 'change', function() {
    if(this.checked) {
        includeUpperCase = true;
    } else {
        includeUpperCase = false;
    }
})

document.getElementById('includeNumbers').addEventListener( 'change', function() {
    if(this.checked) {
        includeNumbers = true;
    } else {
        includeNumbers = false;
    }
})

document.getElementById('includeSpecial').addEventListener( 'change', function() {
    if(this.checked) {
        includeSpecial = true;
    } else {
        includeSpecial = false;
    }
})

sliderValue.addEventListener('change', function(){
    sliderValue = document.getElementById('paswordCharacterCount').value;
    passwordCharacterCount  = parseInt(sliderValue);
    console.log(sliderValue , passwordCharacterCount);
})


function generatePassword(){
    var password = []; //empty array that is filled by the different if statements
    
    //if statement secton for all possible checkbox variations
    if(includeUpperCase == true && includeNumbers == false && includeSpecial == false){
        var passwordArray = baseCharacters.concat(baseUpperCase);
        for(var i=0; i<passwordCharacterCount; i++){
            password[i] = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        } 
        password = password.join('');
        document.getElementById('passwordBox').textContent = password;
    } 
    
    else if(includeUpperCase == false && includeNumbers == true && includeSpecial == false){
        var passwordArray = baseCharacters.concat(baseNumbers);
        for(var i=0; i<passwordCharacterCount; i++){
            password[i] = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        } 
        password = password.join('');
        document.getElementById('passwordBox').textContent = password;
    }

    else if(includeUpperCase == false && includeNumbers == false && includeSpecial == true){
        var passwordArray = baseCharacters.concat(baseSpecial);
        for(var i=0; i<passwordCharacterCount; i++){
            password[i] = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        } 
        password = password.join('');
        document.getElementById('passwordBox').textContent = password;
    }

    else if(includeUpperCase == true && includeNumbers == true && includeSpecial == false){
        var passwordArray = baseCharacters.concat(baseUpperCase,baseNumbers);
        for(var i=0; i<passwordCharacterCount; i++){
            password[i] = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        } 
        password = password.join('');
        document.getElementById('passwordBox').textContent = password;
    }

    else if(includeUpperCase == true && includeNumbers == false && includeSpecial == true){
        var passwordArray = baseCharacters.concat(baseUpperCase,baseSpecial);
        for(var i=0; i<passwordCharacterCount; i++){
            password[i] = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        } 
        password = password.join('');
        document.getElementById('passwordBox').textContent = password;
    }

    else if(includeUpperCase == false && includeNumbers == true && includeSpecial == true){
        var passwordArray = baseCharacters.concat(baseNumbers,baseSpecial);
        for(var i=0; i<passwordCharacterCount; i++){
            password[i] = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        } 
        password = password.join('');
        document.getElementById('passwordBox').textContent = password;
    }

    else if(includeUpperCase == true && includeNumbers == true && includeSpecial == true){
        var passwordArray = baseCharacters.concat(baseUpperCase,baseNumbers,baseSpecial);
        for(var i=0; i<passwordCharacterCount; i++){
            password[i] = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        } 
        password = password.join('');
        document.getElementById('passwordBox').textContent = password;
    }

    else{
        for(var i=0; i<passwordCharacterCount; i++){
            password[i] = baseCharacters[Math.floor(Math.random() * baseCharacters.length)];
        } 
        password = password.join('');
        document.getElementById('passwordBox').textContent = password;
    }
    
}//end of generatePassword function 