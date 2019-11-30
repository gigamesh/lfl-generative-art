const SMOOTH = 0.4;
const starVectors = [];
let mic;

window.setup = () => {
  createCanvas(window.innerWidth, window.innerHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function getColor(num) {
  const c = color(255, 204, 0, num % 256);
  fill(c);
  noStroke();
}

function getRadius(rad, age) {
  return age < 8 ? rad *= 1.5 : rad *= 0.93
}

let firstX = null
window.draw = () => {
  background(0);
  const vol = mic.getLevel();

  // frameRate(30)
  if (starVectors.length == 1000) {
    starVectors.pop();
  }
  const radius = vol * innerWidth / (Math.random() + 1);
  const vector = { x: Math.random() * innerWidth, y: Math.random() * innerHeight, rad: radius || .5, age: 0 }
  starVectors.unshift(vector);
  starVectors.forEach(({ x, y, rad, age }, i) => {
    const newRad = getRadius(rad, age)
    starVectors[i].rad = newRad
    starVectors[i].age = ++age
    circle(
      x,
      y,
      newRad,
      age
    );
  })


}


// animate();
