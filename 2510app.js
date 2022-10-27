/*var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState будет равно 0
 
xhr.open('GET', '/api', true);
console.log('OPENED', xhr.readyState); // readyState будет равно 1
 
xhr.onprogress = function () {
   console.log('LOADING', xhr.readyState); // readyState будет равно 3
};
 
xhr.onload = function () {
   console.log('DONE', xhr.readyState); // readyState будет равно 4
   if(xhr.readyState == 4){
    console.log("Ура!");
   }
};
 
xhr.send(null);

const requestURL = 'https://jsonplaceholder.typicode.com/users';

// Get all users
var xhr  = new XMLHttpRequest()
xhr.open('GET', requestURL, true)
xhr.onload = function () {
 var users = JSON.parse(xhr.responseText);
 if (xhr.readyState == 4 && xhr.status == "200") {
   console.table(xhr);
 } else {
   console.error(users);
 }
}
xhr.send(null);

const requestURL = 'https://jsonplaceholder.typicode.com/users';

let data = {};
data.firstname = "John";
data.lastname  = "Snow";
let json = JSON.stringify(data);

let xhr = new XMLHttpRequest();
xhr.open("POST", requestURL);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.send(json);
xhr.onload = function(){
    if(xhr.readyState == 4 && xhr.status == 201) {
        console.log("Server answered: ", xhr.responseText);
    }
    else{
        console.log("Error");
    }
}
*/

const requestURL = 'https://jsonplaceholder.typicode.com/users';
 
function sendRequest(method, url, body = null) {
 const headers = {
   'Content-Type': 'application/json'
 }
 if (body != null) {
    body = JSON.stringify(body);
 }
 return fetch(url, {
   method: method,
   body: body,
   headers: headers
 }).then(response => {
   if (response.ok) {
     return response.json()
   }
 
   return response.json().then(error => {
     const e = new Error('Что-то пошло не так')
     e.data = error
     throw e
   })
 })
}
 
sendRequest('GET', requestURL)
 .then(data => console.log(data))
 .catch(err => console.log(err))
