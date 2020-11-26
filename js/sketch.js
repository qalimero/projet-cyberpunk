let x = 50;
let x1 = 100;
let y = 150;
let speed = 5;
let startColor;
let endColor;
let amt = 0;


function setup() {
    createCanvas(windowWidth, 800);

}

function draw() {
    colorMode(RGB);
    background(252, 238, 10);
    shape();
    bounce();

}

function bounce() {
    x = x + speed;
    x1 = x1 + speed;
    y = y + speed;
    if (y > windowWidth || x < 0) {
        speed = speed * -1;
    }
}

function shape() {

    let startColor = color('hsl(172, 100%, 50%)');
    let endColor = color('hsl(335, 100%, 50%)');
    amt += 0.01;
    let colorTransition = (lerpColor(startColor,endColor,smoothstep(0.3,0.7, amt)));
    if (amt >= 1){
        amt =  0.0;
    }

    noStroke();
    fill(colorTransition);
    triangle(x, 200, x1, 100, y, 200);

}
function smoothstep(edge0, edge1, x) {
    x = constrain((x - edge0) / (edge1 - edge0), 0.0, 1.0);
    return x * x * (3 - 2 * x);
}





