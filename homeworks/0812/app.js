function drawStar() {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
    
      ctx.beginPath();
      ctx.moveTo(115, 10); //1
      ctx.lineTo(100, 40); //2
      ctx.lineTo(75, 40);  //3
      ctx.lineTo(95, 60);  //4
      ctx.lineTo(85, 85);  //5
      ctx.lineTo(115, 70); //6
      ctx.lineTo(145, 85); //7
      ctx.lineTo(135, 60); //8
      ctx.lineTo(155, 40); //9
      ctx.lineTo(130, 40); //10
      ctx.lineTo(115, 10); //11
      ctx.stroke();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.fillStyle = 'yellow';
      ctx.fill();
    }
   };

drawStar();

function drawStar2(cx, cy, spikes, outerRadius, innerRadius) {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  var rot = Math.PI / 2 * 3;
  var x = cx;
  var y = cy;
  var step = Math.PI / spikes;
  
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius)
  for (i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y)
      rot += step

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y)
      rot += step
  }
  ctx.lineTo(cx, cy - outerRadius)
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fill();
};

drawStar2(250, 100, 5, 30, 15);