
//создание переменных
const name = "ALina";
let lastname = "Фамилия";
var age = 27;
console.log("Имя:", name );
console.log("Возраст:", age );

let h1 = document.createElement("h1");
h1.append(name);
console.log("H1 is", h1);

document.getElementsByTagName("body")[0].appendChild(h1);