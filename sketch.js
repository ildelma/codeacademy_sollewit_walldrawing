function setup() {
    createCanvas(500, 500);
    background(255);
}

function draw() {

// First quadrant
strokeWeight(10);
stroke(127);
for (let posX = 25; posX < width/2; posX += 25) {
    line(posX, 0, posX, 250)
}

// Second quadrant
fill('#ffd700');
noStroke();
for (let posX = width/2+30; posX < width; posX += 25) {
    for (let posY = 25; posY < height/2; posY += 25) {
        if (posY % 2 == 0) {
            circle(posX, posY, 15);
        } else {
            circle(posX-10, posY, 15);
        }
    }
}

// Third quadrant
fill('red');
noStroke();
for (let posX = 0; posX < width/2; posX += (width/2)/5) {
    for (let posY = height/2; posY < height; posY += (height/2)/10) {
        if (posY % 2 == 0) {
            square(posX, posY, 25);
        } else {
            square(posX + 25, posY, 25);
        }
    }
}

// Fourth quadrant
stroke('blue');
// bottom right
for (let i=25; i < height/2+25; i += 25) {
    line(width/2, height-i, width/2+i, height)
    line(width-i, height/2, width, height/2+i)
}

// Frame
fill('black');
stroke(0);
strokeWeight(3);
rect(0, 0, 5, height);
rect(0, height - 5, width, 5);
rect(width - 5, height - 5, 5, -500);
rect(0, 0, width, 5);
strokeWeight(10);
line(width/2, 0, width/2, height);
line(0, height/2, width, height/2);
}