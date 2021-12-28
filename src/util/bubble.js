// // Dom Nodes

const circle1 = document.querySelector("#js-circle1");
const connector = document.querySelector("#js-connector");

function metaball(
  radius1,
  radius2,
  center1,
  center2,
  handleSize = 1.4,
  v = 0.5
) {
  const HALF_PI = Math.PI / 2;
  const d = dist(center1, center2);
  const maxDist = radius1 + radius2 * 2.5;
  let u1, u2;

  if (
    radius1 === 0 ||
    radius2 === 0 ||
    d > maxDist ||
    d <= Math.abs(radius1 - radius2)
  ) {
    return "";
  }

  if (d < radius1 + radius2) {
    u1 = Math.acos(
      (radius1 * radius1 + d * d - radius2 * radius2) / (2 * radius1 * d)
    );
    u2 = Math.acos(
      (radius2 * radius2 + d * d - radius1 * radius1) / (2 * radius2 * d)
    );
  } else {
    u1 = 0;
    u2 = 0;
  }

  // All the angles
  const angleBetweenCenters = angle(center2, center1);
  const maxSpread = Math.acos((radius1 - radius2) / d);

  const angle1 = angleBetweenCenters + u1 + (maxSpread - u1) * v;
  const angle2 = angleBetweenCenters - u1 - (maxSpread - u1) * v;
  const angle3 =
    angleBetweenCenters + Math.PI - u2 - (Math.PI - u2 - maxSpread) * v;
  const angle4 =
    angleBetweenCenters - Math.PI + u2 + (Math.PI - u2 - maxSpread) * v;
  // Points
  const p1 = getVector(center1, angle1, radius1);
  const p2 = getVector(center1, angle2, radius1);
  const p3 = getVector(center2, angle3, radius2);
  const p4 = getVector(center2, angle4, radius2);

  // Define handle length by the
  // distance between both ends of the curve
  const totalRadius = radius1 + radius2;
  const d2Base = Math.min(v * handleSize, dist(p1, p3) / totalRadius);

  // Take into account when circles are overlapping
  const d2 = d2Base * Math.min(1, (d * 2) / (radius1 + radius2));

  const r1 = radius1 * d2;
  const r2 = radius2 * d2;

  const h1 = getVector(p1, angle1 - HALF_PI, r1);
  const h2 = getVector(p2, angle2 + HALF_PI, r1);
  const h3 = getVector(p3, angle3 + HALF_PI, r2);
  const h4 = getVector(p4, angle4 - HALF_PI, r2);

  return metaballToPath(p1, p2, p3, p4, h1, h2, h3, h4, d > radius1, radius2);
}

function metaballToPath(p1, p2, p3, p4, h1, h2, h3, h4, escaped, r) {
  return [
    "M",
    p1,
    "C",
    h1,
    h3,
    p3,
    "A",
    r,
    r,
    0,
    escaped ? 1 : 0,
    0,
    p4,
    "C",
    h4,
    h2,
    p2,
  ].join(" ");
}

function dist([x1, y1], [x2, y2]) {
  return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
}

function angle([x1, y1], [x2, y2]) {
  return Math.atan2(y1 - y2, x1 - x2);
}

function getVector([cx, cy], a, r) {
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

const dot = document.querySelector(".dot");
const svg = document.querySelector(".svg");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  const centerX = dot.offsetLeft + dot.clientWidth / 2;
  const centerY = dot.offsetTop + dot.clientHeight / 2;
  const bouding = circle1.getBoundingClientRect();
  const elCenterX = bouding.x + bouding.width / 2;
  const elCenterY = bouding.y + bouding.height / 2;
  connector.setAttribute(
    "d",
    metaball(50, 10, [elCenterX, elCenterY], [centerX, centerY])
  );
});
