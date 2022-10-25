let myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
console.log(myCar);

let myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj.type = "Dot syntax";
myObj[str] = "String value";
myObj[rand] = "Random Number";
myObj[obj] = "Object";
myObj[""] = "Even an empty string";

console.log(myObj);

localStorage.setItem("name", "Alina"); //сохранение
console.log(localStorage.getItem("name")); //выводим на консоль
localStorage.removeItem("name");
console.log(localStorage.getItem("name"));
localStorage.clear();

let arr_of_students = 
[
  {
    name : "Петя",
    аге: 28,
    gpa: 90
  },
  {
    name : "Максим",
    аге: 30,
    gpa: 80
  },
  {
    name : "Светлана",
    аге: 21,
    gpa: 4
  },
  {
    name : "Даша",
    аге: 32,
    gpa: 50
  },
  {
    name : "Анна",
    аге: 19,
    gpa: 8.5
  },
  {
    name : "Ян",
    аге: 30,
    gpa: 30
  },
];
const result = arr_of_students.filter(function (value) {
    return value.gpa >=7;
});
console.log(result);
result.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(result);
