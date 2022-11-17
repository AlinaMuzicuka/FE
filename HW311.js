let counter = countDown(10);

function countDown(i) {
  let result = (promise = new Promise((resolve, reject) => {
    console.log(i--);
    if (i > 0) {
      setTimeout(() => {
        countDown(i)
        .then(resolve);
      }, 1000);
    }
  }));
  return result;
};

document.getElementById('counter').innerHTML = counter;