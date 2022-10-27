const requestURL = 'https://jsonplaceholder.typicode.com/users';

let xhr  = new XMLHttpRequest();
xhr.open('GET', requestURL, true);
xhr.send();
xhr.onload = function () { // Преобразовываем полученные данные из JSON в подходящий для обработки вид (массив объектов)
    var users = JSON.parse(xhr.responseText); // Если удалось получить необходимые данные, то производим их обработку
    if (xhr.readyState == 4 && xhr.status == "200") { //   console.log(users);
      console.log("Sorted usernames: " );
      users // Извлекаем из объектов массива users значения поля username и помещаем их обратно в этот же массив вместо этих объектов
        .map((user) => user.username) // затем сортируем значения username в алфавитном порядке
        .sort() // Отображаем полученную последовательность в консоль
        .forEach((item) => {
          console.log(item);
        });
    } else { // Если произошла ошибка выводим то, что было получено
      console.error(users);
    }
  };
   
let xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhr2.send();
xhr2.onload = function () {
    var posts = JSON.parse(xhr2.responseText);
    if (xhr2.readyState == 4 && xhr2.status == "200") {
        console.log("Post count: " );
        posts
            .map((posts) => posts.userId)
            .sort()
            .forEach((item) => {
                console.log(item);
            })   
    } else {
        console.error(posts);
    }
};
