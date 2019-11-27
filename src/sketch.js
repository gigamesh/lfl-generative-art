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
  return (r * 2) / (i + 1)
}

let count

window.draw = () => {
  count++
  background(0);
  const vol = mic.getLevel();

  if (count == 200) {
    frameRate(0)
  }

  if (starVectors.length == 50) {
    starVectors.pop();
  } else {
    const radius = vol * innerWidth * 5;
    const vector = { x: Math.random() * innerWidth, y: Math.random() * innerHeight, rad: radius || 0.1 }
    starVectors.unshift(vector);

    // console.log(JSON.stringify(starVectors, null, 2))
    frameRate(1)
    starVectors.forEach(({ x, y, rad }, i) => {
      getColor(i * 20)
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
