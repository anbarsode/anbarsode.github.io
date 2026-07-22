function setup() {
  let canvas = createCanvas(400, 200);
  canvas.parent('p5-canvas-container');
}

function draw() {
  background(220);
  fill(0, 102, 153);
  ellipse(width/2, height/2, 50, 50);
}
