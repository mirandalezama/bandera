let retanguloX;

let retanguloY;

function setup() {

createCanvas(400, 300);

background("white");

retanguloX = [0, 0, 0];

retanguloY = [0, 100, 200];

}

function draw() {

noStroke();

fill("red");

 rect(retanguloX[0], retanguloY[0], 450, 100); // primeiro retângulo

fill("white");

 rect(retanguloX[1], retanguloY[1], 450, 100);// segundo retângulo

fill("blue");

 rect(retanguloX[2], retanguloY[2], 450, 100);// terceiro retângulo

}
