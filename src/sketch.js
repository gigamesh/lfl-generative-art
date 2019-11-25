function setup() {
  console.log("setup");
  createCanvas(200, 200);
}

function animate() {
  const micLevel = mic.getLevel();
  console.log(micLevel);
  requestAnimationFrame(animate);
}

function draw() {
  console.log("draw");
  const mic = new p5.AudioIn();
  mic.start();
  background(0);
  const vol = mic.getLevel();
  ellipse(100, 100, vol * 200, vol * 200);
}

// animate();
