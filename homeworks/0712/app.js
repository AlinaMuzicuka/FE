//this
let car = {
    brand: "BMW",
    sayBrand() {
      let arrow = () => console.log(this.brand);
      arrow();
    }
};
car.sayBrand();

//call()
var user = {
    firstName : "Alina",
    lastName : "Muzicuka",
    telRanStatus : "Tel-Ran student"
};

function userInfo(a, b) {
    console.log(this[a] + " " + this[b]);
}

userInfo.call(user, 'firstName', 'lastName')
userInfo.call(user, 'firstName', 'telRanStatus')

//aplly()
var user = {
    firstName : "Alina",
    lastName : "Muzicuka",
    telRanStatus : "Tel-Ran student"
};

function userInfo(a, b) {
    console.log(this[a] + " " + this[b]);
}

userInfo.apply(user, ['lastName', 'firstName'])
userInfo.apply(user, ['telRanStatus', 'firstName'])

// bind()
 let person = {
    firstName: "Alina"
};
  
function greet(phrase) {
    console.log(phrase + ', ' + this.firstName);
}

let greetUser = greet.bind(person);
greetUser("Welcome back");