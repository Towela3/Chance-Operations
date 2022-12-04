let snake;
let rez = 20;
let food;
let thing;
let w;
let h;
let shape;

function setup() {
    createCanvas(600, 600);
    noStroke();
    w = floor(width / rez);
    h = floor(height / rez);
    frameRate(3);
    snake = new Snake();
    foodLocation();
    thingLocation();
}

function foodLocation() {
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector(x, y);
}

function thingLocation() {
    let x = floor(random(w));
    let y = floor(random(h));
    thing = createVector(x, y);
}

function draw() {
    background(242, 241, 228);
    scale(rez);
    if (snake.eat(food)) {
        foodLocation();
    }

    snake.update();
    snake.show();

    if (snake.endGame()) {
        background(20, 2, 0);

        fill(255);
        textSize(15);
        text("hello", 50, 100);

        noLoop();
    }

    fill(237, 149, 78);
    rect(food.x, food.y, 1, 1);

    fill(230, 123, 37);
    rect(random(w), random(h), 1, 1);

    fill(250, 119, 37);
    rect(random(w), random(h), 1, 1);
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
    }
    else if (keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
    }
    else if (keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
    }
    else if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
    }
    else if (key == ' ') {
        snake.setDir(0, 0);
    }
    return false;
}