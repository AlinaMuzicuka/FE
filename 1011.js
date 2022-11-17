/*try {
 
    // код ...
    
   } catch (err) {
    
    // обработка ошибки
    
   } 
*/

try {
    throw new Error("Вы написали не верный никнейм");
} catch (err) {
    console.log("Error (name) = ", err.name);
    console.log("Error (message) = ", err.message);
    console.log("Error (stack) = ", err.stack);
    // console.log("Error = ", err);
}

