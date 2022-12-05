function Z(){
    var Z = setInterval(draw, 5);
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#A9E5BB";
    ctx.fill();
    ctx.closePath();
}
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
}
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#2D1E2F";
    ctx.fillText("lives " + lives, 100, 20);
}
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#F7B32B";
    ctx.fillText("Score:" + score, 8, 20);
}
function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {

            if ((x > b.x) && (x < b.x + brickWidth) &&
                (y > b.y) && (y < b.y + brickHeight)) {
                dy = -dy;
                b.status = 0;
                score++;
                if (score % (brickColumnCount * brickRowCount) == 0) {
                     for (var c = 0; c < brickColumnCount; c++) {
                    bricks[c] = [];
                    for (var r = 0; r < brickRowCount; r++) {
                        bricks[c][r] = { x:0,y:0,status: 1 };
                    }
                }
                clearInterval(Z);
                lives = 3;
                }
                }
            }
        }
    }
}
function drawBricks() {
    ctx.beginPath();
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
                var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                
                var img = document.getElementById("lamp")
                var pat = ctx.createPattern(img, "repeat");  
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = pat;    
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#08ef55"; ctx.fill();
    ctx.closePath();
}
function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    if (e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    if (e.keyCode == 37) {
        leftPressed = false;
    }
}
function draw() {
    drawBall();
    drawPaddle();
    drawScore();
    drawBricks();
    drawLives();
    collisionDetection();
    if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            lives -= 1;
            if (lives == 0) {
                for (var c = 0; c < brickColumnCount; c++) {
                    bricks[c] = [];
                    for (var r = 0; r < brickRowCount; r++) {
                        bricks[c][r] = { x:0,y:0,status: 1 };
                    }
                }
                clearInterval(Z);
                score = 0;
                lives = 4;
            } else {
                x = canvas.width / 2;
                y = canvas.height - 30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width - paddleWidth) / 2;
            }
        }
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    x += dx;
    y += dy;
}


