const LoginForm = document.querySelector(".login-form");
const SignupForm = document.querySelector(".signup-form");
const LoginButton = document.getElementById("login-btn");
const PageSwitch = document.getElementById("page-switch");
const PageStatus = document.querySelector(".page-status");
const PasswordFields = document.querySelectorAll("#password-login, #password-signup");
const ViewPasswords = document.querySelectorAll(".material-symbols-outlined");
// const PasswordFields = document.querySelectorAll(".password");
// const ViewPasswords = document.querySelectorAll(".material-symbols-outlined");

ViewPasswords.forEach((ViewPassword, index) => {
    ViewPassword.addEventListener("click", function(){
        const PasswordField = PasswordFields[index];
        if(PasswordField.type === "password"){
            PasswordField.type = "text";
            ViewPassword.innerText = "visibility_off";
        } else {
            PasswordField.type = "password";
            ViewPassword.innerText = "visibility";
        }
    });
});

LoginButton.addEventListener("click", function(){
    alert("Berhasil login");
});

PageSwitch.addEventListener("click", function(){
    if(LoginForm.style.display === "flex"){
        LoginForm.style.display = "none";
        SignupForm.style.display = "flex";
        PageStatus.innerText = "Already have an account?"
        PageSwitch.innerText = "Login";
    }
    else{
        LoginForm.style.display = "flex";
        SignupForm.style.display = "none";
        PageStatus.innerText = "Doesn't have an account yet?"
        PageSwitch.innerText = "Signup";
    }
});

