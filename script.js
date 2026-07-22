function setup() {
  let canvas = createCanvas(400, 200);
  canvas.parent('p5-canvas-container');
}

function draw() {
  background(255, 250, 240); // Matches body background
  stroke(0, 128, 128); // Teal
  fill(255, 127, 80); // Coral
  ellipse(width/2, height/2, 50, 50);
  
  // Decorative line
  stroke(0, 255, 127); // SpringGreen
  strokeWeight(4);
  line(0, height-5, width, height-5);
}
