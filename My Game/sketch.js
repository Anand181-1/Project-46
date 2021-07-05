var form;
var gameState = 0;
var pic1, pic2;

function preload() {
  pic1 = loadImage("Picture1.jpg");
  pic2 = loadImage("Picture2.jpg");
}

function setup() {
  createCanvas(1200, 600);

  form = new Form;
}

function draw() {
 
  if (gameState === 0) {
    background("green");
    form.display();
  }
  if (gameState === 1) {
    background("yellow");
    fill("black");
    textSize(20)
    text("Infinite Running Game", 300, 420);
    image(pic1, 265, 190, 280, 210);
    text("Puzzle Game", 793, 420);
    image(pic2, 715, 190, 280, 210);
  }
}

