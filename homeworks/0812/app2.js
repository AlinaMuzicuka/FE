function drawColumnChart() {
    let graf = [
        {
          month: 1,
          course: 62.9372,
          change: "+0.0269",
          currency: "USD"
        },
        {
          month: 2,
          course: 62.9103,
          change: "+0.7254",
          currency: "USD"
        },
        {
          month: 3,
          course: 30.33,
          change: "-40.3455",
          currency: "USD"
        },
        {
          month: 4,
          course: 61.7749,
          change: "+0.6270",
          currency: "USD"
        },
        {
          month: 5,
          course: 61.1479,
          change: "+0.2676",
          currency: "USD"
        },
        {
          month: 6,
          course: 59.2009,
          change: "-1.666",
          currency: "USD"
        }
       ];
       let canvas = document.getElementById('canvas');
      let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.fillRect(10, 10, 10, 500);
        ctx.fillRect(10, 500, 500, 10);
        // ctx.fillRect(30, 500 - 62.9372, 30, 62.9372);
        // ctx.fillRect(70, 500 - 62.9103, 30, 62.9103);
        // ctx.fillRect(110, 500 - 30.33, 30, 30.33);
        // ctx.fillRect(150, 500 - 61.7749, 30, 61.7749);
        // ctx.fillRect(190, 500 - 61.1479, 30, 61.1479);
        // ctx.fillRect(230, 500 - 59.2009, 30, 59.2009);
        console.log(graf);
        for (let i = 0; i < graf.length; i++) {
            console.log(graf[i]);
            let moveX = 40;
            ctx.fillRect(moveX * graf[i].month, 500 - graf[i].course, 30, graf[i].course);
            
        };
};
drawColumnChart();