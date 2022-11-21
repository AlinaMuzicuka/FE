const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

let _url = "http://65.109.13.139:9191/";
let _AUTH = "";

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

document.getElementById("login").addEventListener("click", () => {
        new Promise((resolve, reject) => {
            resolve();
        })
        .then(function () {
            return signIn();
        })
        .then(function() {
            return location.href = "./home.html";
        })
})

async function signUp() {

    await fetch(_url + "signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username": document.querySelector("#userName").value,
            "password": document.querySelector("#password").value,
            "confirm_password": document.querySelector("#confirmPassword").value
        })
    })
        .then(function(response){
            _AUTH = JSON.stringify(response.body)
        })
};

async function signIn() {
    await fetch(_url + "signin", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            "username": document.querySelector("#userName").value,
            "password": document.querySelector("#password").value,
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
            localStorage.setItem("token", response.token);
        })
        
};