const name = document.getElementById("nameInput")
let email = document.getElementById("emailInput")
let password = document.getElementById("passwordInput")
let btn = document.getElementById("submitInput")
let nameError = document.querySelector(".nameError")
let emailError = document.querySelector(".emailError")
let passwordError = document.querySelector(".passwordError")
let namereg = /^[a-zA-Z]+/
let emailreg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordreg = /^[a-zA-Z0-9]{6}/

btn.addEventListener("click",function(){
if(namereg.test(name.value) == false){
    nameError.style.display  = "block"
    nameError.style.color  = "red"

}
if(emailreg.test(email.value) == false){
    emailError.style.display  = "block"
    emailError.style.color  = "red"

}
if(passwordreg.test(password.value) == false){
    passwordError.style.display  = "block"
    passwordError.style.color  = "red"

}
})

// textarea
document.getElementById("TextAreaInput").addEventListener("input", function() {
    let wordCount = this.value.trim().split(/\s+/).length;
    document.getElementById("wordCount").textContent = wordCount;
    if(wordCount >50){
        document.getElementById("wordCount").style.color = "red" 
        // document.getElementById("para").textContent = " /50 You are exceeding Limit" 

    }
    else{
        document.getElementById("wordCount").style.color = "white" 
    }
});