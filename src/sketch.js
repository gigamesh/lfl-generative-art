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

function getRadius(r, i) {
  return (r * 10) / (i + 1)
}

window.draw = () => {
  background(0);
  const vol = mic.getLevel();

  if (starVectors.length == 250) {
    starVectors.shift();
  } else {
    getColor(255);

    const radius = vol * innerWidth * 5;
    const vector = { x: Math.random() * innerWidth, y: Math.random() * innerHeight, rad: radius || 0.1 }
    starVectors.push(vector);

    // console.log(starVectors[0].rad)
    // frameRate(0)
    starVectors.forEach(({ x, y, rad }, i) => {
      getColor(i * 10)
      const newRad = getRadius(rad, i)
      starVectors[i].rad = newRad
      circle(
        x,
        y,
        newRad,
      );
    })

  }
}


// animate();
