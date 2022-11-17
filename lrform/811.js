let _html = {};
let _username = document.querySelector("#userName").value;
let _password = document.querySelector("#password").value;
let _confirmpassword = document.querySelector("#confirmPassword").value;
let _AUTH = "";
let _url = "https://1ae0-37-186-127-62.eu.ngrok.io/";

_html.login = document.getElementById("login");
_html.registration = document.getElementById("registration");


function goToRegistration() {
    _appendDOM(_html.registration);
}
function goToLogin() {
    _appendDOM(_html.login);
}
function _appendDOM(_obj) {
    document.getElementById("body")[0].innerHTML = _obj;
}

function signUp() {

    fetch(_url + "signup", {
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

function signIn() {
    fetch(_url + "signin", {
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

function getMe() {
    let token = localStorage.getItem("token");
    fetch(_url + "me", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "User-Agent": "telran",
            "ngrok-skip-browser-warning": "69420",
            "x-access-token": token,
        }
    })
    .then (data => data.json())
    .then(data => { 
      console.log("User id = ", data.id);
      console.log("Username = ", data.username);
      console.log("User age = ", data.age);
      console.log("User avatar = ", data.avatar);
      // console.log("User data = ", data);
    });
}

function logOut() {
    fetch(_url + "destroy-session", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "x-access-token": localStorage.getItem("token"),
        }
    })
};

function putMe() {
    fetch(_url + "me", {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "User-Agent": "telran",
            "ngrok-skip-browser-warning": "69420",
            "x-access-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
            "avatar": "https://gravatar.com/avatar/d285911fc7b3ca7e39ec946c68208285?s=400&d=robohash&r=x"
        })
    })
};