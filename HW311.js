let counter = countDown(10);

function countDown(i) {
  return (promise = new Promise((resolve, reject) => {
    console.log(i--);
    if (i > 0) {
      setTimeout(() => {
        countDown(i)
        .then(resolve);
      }, 1000);
    } 
  }));
};

document.getElementById('counter').innerHTML = counter;