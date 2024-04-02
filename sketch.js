function setup() {
    createCanvas(700, 700);
    stroke(255);
    drawAxes();
    drawCircles();
    drawNotableAngles();
}

function draw() {
    stroke(0)
    stroke(255, 0, 0);
    drawCurveProgressive(f);
    // drawCurve(f);
    stroke(0, 255, 0);
    drawCurveProgressive(g);
    // drawCurve(g);
}

function drawAxes() {
    strokeWeight(1);
    stroke(0);
    line(0, height / 2, width, height / 2);
    line(width / 2, 0, width / 2, height);
}

function drawCircles() {
    noFill();
    strokeWeight(1);
    stroke(175);
    for (var i = 0; i < 10; i++) {
        ellipse(width / 2, height / 2, i * 100);
    }
}

function drawNotableAngles() {
    strokeWeight(1);
    stroke(175);
    // Draw the PI/3 family of angles
    for (var i = 1; i < 6; i++) {
        line(width / 2, height / 2, width / 2 + 500 * Math.cos(i * Math.PI / 3), height / 2 - 500 * Math.sin(i * Math.PI / 3));
    }

    // Draw the PI/4 family of angles
    for (var i = 1; i < 8; i++) {
        line(width / 2, height / 2, width / 2 + 500 * Math.cos(i * Math.PI / 4), height / 2 - 500 * Math.sin(i * Math.PI / 4));
    }

    // Draw the PI/6 family of angles
    for (var i = 1; i < 12; i++) {
        line(width / 2, height / 2, width / 2 + 500 * Math.cos(i * Math.PI / 6), height / 2 - 500 * Math.sin(i * Math.PI / 6));
    }

    // Draw the PI/2 family of angles
    for (var i = 1; i < 4; i++) {
        line(width / 2, height / 2, width / 2 + 500 * Math.cos(i * Math.PI / 2), height / 2 - 500 * Math.sin(i * Math.PI / 2));
    }

}

function drawCurve(f) {
    // Start at the origin
    var x = 0;
    var y = 0;

    strokeWeight(1);
    // Iterate over angles from 0 to 2π
    for (var angle = 0; angle < 2 * Math.PI; angle += 0.001) {
        // Calculate the radius based on the angle
        var radius = 100 * f(angle);

        // Convert the polar coordinates to Cartesian coordinates
        x = radius * Math.cos(angle);
        y = - radius * Math.sin(angle);

        // Plot the point
        point(x + width / 2, y + height / 2);
    }
}

// Function to draw curve progressivly using frameCount
function drawCurveProgressive(f) {
    // Start at the origin
    var x = 0;
    var y = 0;

    strokeWeight(1);
    // Iterate over angles from 0 to 2π
    angle = frameCount * 0.01;
    if(angle == 1.57){
        console.log("PI/2")
    }
    if(angle == 3.14){
        console.log("PI")
    }
    if(angle == 4.71){
        console.log("3PI/2")
    }
    if(angle == 6.28){
        console.log("2PI")
    }
    // Calculate the radius based on the angle
    var radius = 100 * f(angle);

    // Convert the polar coordinates to Cartesian coordinates
    x = radius * Math.cos(angle);
    y = - radius * Math.sin(angle);

    // Plot the point
    point(x + width / 2, y + height / 2);
}


function f(x) {
    // return 2*Math.sin(x);
    return Math.sqrt(2 / 3) * Math.sin(2 * x);
}

function g(x) {
    return sqrt(Math.cos(2 * x));
}

