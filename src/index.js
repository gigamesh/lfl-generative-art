const SMOOTH = 0.4;

function getColor(num) {
  const c = color(255, 204, 0, num % 256);
  fill(c);
  noStroke();
}

class Star {
  constructor(
    x = Math.random() * innerWidth,
    y = Math.random() * innerHeight,
    diameter = 0
  ) {
    getColor(255);
    console.log("new star");
    diameter = lerp(diameter, diameter * innerWidth * 5, SMOOTH);
    circle(x, y, diameter);
  }
}

window.App = { Star };
