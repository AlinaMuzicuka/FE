console.log("JS file is ready!")

let arr1 = [11, "friday", 13, "apple", 0, null, true];


arr1.forEach(function(item, index, _arr1) {
    // ... код для действий с item
    // console.log("Текущий элемент ", index, item);
    if(item == 13) {
        _arr1[1] = "Monday";
    }
    console.log("array:", _arr1);
    console.log("Source array = ", arr1);
  });
  
  //HW
  //Find
  let arr = ["Mac Mini", "Iphone pro max", "Nikia 3110", "Mac Pro", "Mac Air"];

  const macPro = arr.find(findMacPro);
  function findMacPro(item) {
    return item === "Mac Pro";
  }
  console.log(macPro);
  //не могу вывести на экран :(
  //macPro = document.getElementById("macPro1");
  //macPro.innerHTML = findMacPro;

  //Filter
  let arr2 = [1, 22, 100, 50, 51];

  const moreThen50 = arr2.filter(filterPrice);
  function filterPrice(value) {
    return value >= 50;
  }
  console.log(moreThen50);