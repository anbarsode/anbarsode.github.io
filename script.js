function setup() {
  let canvas = createCanvas(400, 200);
  canvas.parent('p5-canvas-container');
}

function draw() {
  background(18, 18, 18); // Dark mode background
  
  // Crimson circle
  noStroke();
  fill(220, 20, 60); 
  ellipse(width/2, height/2, 60, 60);
  
  // Gold accent ring
  stroke(255, 215, 0);
  noFill();
  strokeWeight(2);
  ellipse(width/2, height/2, 75, 75);
}
