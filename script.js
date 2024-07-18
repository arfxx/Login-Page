const UsernameField = document.getElementById("username");
const PasswordField = document.getElementById("password");
const LoginButton = document.getElementById("login-btn");
const SignUpButton = document.getElementById("sign-up-btn");
const ViewPassword = document.querySelector(".material-symbols-outlined");
const PasswordReq = document.getElementById("password-requirement");

ViewPassword.addEventListener("click", function(){
    if(PasswordField.type === "password"){
        PasswordField.type = "text";
        ViewPassword.innerText = "visibility_off";
    }
    else{
        PasswordField.type = "password";
        ViewPassword.innerText = "visibility";
    }
});

LoginButton.addEventListener("click", function(){
    alert("Berhasil login");
});

SignUpButton.addEventListener("click", function(){
    alert("Maap ya belum redi");
});

