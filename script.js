function setup() {
  let canvas = createCanvas(250, 250);
  canvas.parent('p5-canvas-container');
}

function draw() {
  background(15, 23, 42); // Matches --bg-dark
  
  // Crimson circle
  noStroke();
  fill(220, 20, 60); 
  ellipse(width/2, height/2, 60, 60);
  
  // Gold accent ring
  stroke(255, 215, 0); // Gold
  noFill();
  strokeWeight(2);
  ellipse(width/2, height/2, 75, 75);
}
