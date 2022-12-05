class Snake {

    constructor() {
        this.len = 1;
        this.body = [];
        this.body[0] = createVector(floor(w / 2), floor(h / 2));
        this.xdir = 0;
        this.ydir = 0;
    }
    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    update() {
        let head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        this.body.push(head);
    }
    grow() {
        let head = this.body[this.body.length - 1].copy();
        this.len++;
        this.body.push(head);
    }

    endGame() {
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;
        if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
            return true;
        }
        for (let i = 0; i < this.body.length - 1; i++) {
            let part = this.body[i];
            if (part.x == x && part.y == y) {
                return true;
            }
        }
        return false;
    }
    eat(pos) {
        let x = this.body[0].x;
        let y = this.body[0].y;
        if (x == pos.x && y == pos.y) {
            this.grow();
            return true;
        }
    }
    show() {
        for (let i = 0; i < this.body.length; i++) {
            noStroke();
            fill(186, 184, 182);
            rect(this.body[i].x, this.body[i].y, 1, 1);

            fill(230, 123, 37);
            rect(random(w), random(h), 1, 1);

            //fill(250, 119, 37);
            //rect(random(w), random(h), 1, 1);

        }
    }
}