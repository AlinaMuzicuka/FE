let _promise = new Promise(function(resolve, reject) {
    let name = "Alina";
    let lastname = "Muzicuka";
    // Эта функция будет вызвана автоматически
    
    // В ней можно делать любые асинхронные операции,
    // А когда они завершатся — нужно вызвать одно из:
    if(name == "Alina") {
        resolve (name + " " + lastname);
    }
    else {
        reject ("error");
    }
    // reject(ошибка) при ошибке
   });
    
   _promise.then(
    result => {
      // первая функция-обработчик - запускается при вызове resolve
      console.log("Fulfilled: " + result); // result - аргумент resolve
    },
    error => {
      // вторая функция - запускается при вызове reject
      console.log("Rejected: " + error); // error - аргумент reject
    });