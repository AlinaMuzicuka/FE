// функция, возвращающая промис
function delay(ms, str) {
    return new Promise (resolve => setTimeout(() => {
      resolve(str);
    }, ms));
   }
   // асинхронная функция
   async function message() {
    // ждём выполнение первого промиса delay(1000, 'Игорь') и сохраняем его результат в переменную a
    let a = await delay(1000, 'Игорь');
    // после завершения первого промиса, переходим к выполнению второго delay(2000, 'Егор')
    let b = await delay(2000, 'Егор'); // как только он завершится помещаем его результат в переменную b
    // после завершения второго промиса, переходим к выполнению третьего delay(4000, 'Денис')
    let c = await delay(4000, 'Денис'); // как только он выполнится сохраняем его результат в переменную c
    
    // выводим значения переменных в консоль
    console.log(`${a} ${b} ${c}`); // "Игорь Егор Денис"
   }
    
   // вызываем асинхронную функцию
   message();

/////////////


   // асинхронная функция для получения данных пользователя в формате JSON
const getUser = async(id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error('Ответ сервера не в диапазоне 200-299');
      }
      const data = await response.json();
    
      return data;
    } catch (e) {
      throw new Error('Ошибка при получении данных пользователя');
    }
   }
   // функция для отображения данных пользователя на странице
   const renderUsers = (users) => { console.log('Users', users) }
   // асинхронная функция, в которой сначала вызывается getUser(), а затем renderUsers() для отображения полученных на странице
   const clickUser = async(id) => {
    try {
      const data = await getUser(id);
      const users = Array.isArray(data) ? data : [data];
      renderUsers(users);
    } catch (e) {
      console.error(e);
    }
   }
   clickUser(1);