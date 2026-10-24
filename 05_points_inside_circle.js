const r = require("raylib");

function setup(WIDTH, HEIGHT, title, FPS) {
  r.InitWindow(WIDTH, HEIGHT, title);
  r.SetTargetFPS(FPS);

  const screen = { width: WIDTH, height: HEIGHT };
  const noOfPoints = 1200;
  const center = { x: 0, y: 0 };
  const radius = 600;

  const points = getRandomPoints(center, radius, noOfPoints);

  return { center, radius, points, screen };
}

function getRandom(rangeStart, rangeEnd) {
  return Math.random() * (rangeEnd - rangeStart) + rangeStart;
}

function getRandomPoints(center, radius, noOfPoints) {
  const points = [];

  for (let i = 0; i < noOfPoints; i++) {
    const randomRadious = getRandom(0, radius);
    const randomAngle = getRandom(0, 2 * Math.PI);
    const randomCenter = {
      x: center.x + randomRadious * Math.cos(randomAngle),
      y: center.y + randomRadious * Math.sin(randomAngle),
    };

    points.push(randomCenter);
  }

  return points;
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.DARKBLUE);

  const color = {
    r: 255,
    g: 215,
    b: 0,
    a: 200,
  };

  for (const center of world.points) {
    r.DrawCircleV(center, 10, color);
  }

  r.DrawCircleSectorLines(world.center, world.radius, 0, 90, 360, r.WHITE);

  r.EndDrawing();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    draw(world);
  }
}

function tearDown() {
  r.CloseWindow();
}

function main() {
  const WIDTH = 1000;
  const HEIGHT = 600;
  const title = "Points inside circle";
  const FPS = 60;

  const world = setup(WIDTH, HEIGHT, title, FPS);
  loop(world);

  tearDown();
}

main();
