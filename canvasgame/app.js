console.log("app.js is ready to start");

let cvs = document.getElementById("canvas");
let cxt = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "./assets/flappy_bird_bird.png";
bg.src = "./assets/flappy_bird_bg.png";
fg.src = "./assets/flappy_bird_fg.png";
pipeUp.src = "./assets/flappy_bird_pipeUp.png";
pipeBottom.src = "./assets/flappy_bird_pipeBottom.png";

let fly = new Audio();
let scoreAudio = new Audio();

fly.src = "./assets/fly.mp3";
scoreAudio.src = "./assets/score.mp3";

let xPos = 10;
let yPos = 150;
let gap = bird.height * 3.5;
let grav = 1;
let pipes = [];
let lives = 4;
let score = 0;

function birdUp(e) {
    e = e || window.event;
    if(e.keyCode == '38') {
        console.log("arrow UP");
        yPos -= 35;
        fly.play();
    }
    if(e.keyCode == '48') {
        console.log("arrow Down");
        yPos += 25;
    }
};


pipes[0] = {
    x : cvs.width, 
    y : 0};

document.addEventListener('keydown', birdUp);

function draw() {
    console.log("start draw");
    cxt.drawImage(bg, 0, 0);
    for(let i = 0; i < pipes.length; i++) {
        cxt.drawImage(pipeUp, pipes[i].x, pipes[i].y);
        cxt.drawImage(pipeBottom, pipes[i].x, pipes[i].y + pipeUp.height + gap);
        pipes[i].x --;
        if(pipes[i].x == 125) {
            pipes.push({
                x : cvs.width + 50, 
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
            score++;
            document.getElementById('score').innerHTML = score;
        }
        if(xPos + bird.width >= pipes[i].x 
            &&
            xPos <= pipes[i].x + pipeUp.width
            &&
            (yPos <= pipes[i].y + pipeUp.height
            ||
            yPos + bird.height >= pipes[i].y + pipeUp.height + gap)
            ||
            yPos + bird.height >= cvs.height - fg.height) {
                lives--;
                xPos += bird.width;
                if(yPos <= pipes[i].y + pipeUp.height) {
                    yPos += bird.height;
                }
                if(yPos + bird.height >= pipes[i].y + pipeUp.height + gap) {
                    yPos -= bird.height;
                }
                document.querySelector('.lives').lastChild.remove();
                if(lives < 0) {
                    document.querySelector('.gameOver').classList.add('gameOver-active');
                    document.getElementById('gameOver').addEventListener('click', () => {
                        location.reload();
                    })
                }
        }
    }

    cxt.drawImage(bird, xPos, yPos);
    cxt.drawImage(fg, 0, cvs.height - fg.height);
    yPos = yPos + grav;


  requestAnimationFrame(draw);
};

pipeBottom.onload = draw;
