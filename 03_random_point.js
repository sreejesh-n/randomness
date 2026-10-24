const r = require("raylib");

function setup(WIDTH, HEIGHT, title, FPS) {
  r.InitWindow(WIDTH, HEIGHT, title);
  r.SetTargetFPS(FPS);

  const screen = { width: WIDTH, height: HEIGHT };

  const start = { x: 0, y: 0 };
  const end = { x: WIDTH, y: HEIGHT };
  const noOfPoints = 500;
  const randomPoints = getRandomPoints(start, end, noOfPoints);

  return { randomPoints, screen };
}

function getRandom(rangeStart, rangeEnd) {
  return Math.random() * (rangeEnd - rangeStart) + rangeStart;
}

function getRandomPoints(start, end, noOfPoints) {
  const points = [];

  for (let i = 0; i < noOfPoints; i++) {
    const randomCenter = {
      x: getRandom(start.x, end.x),
      y: getRandom(start.y, end.y),
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
    g: 255,
    b: 255,
    a: 100,
  };

  for (const center of world.randomPoints) {
    r.DrawCircleV(center, 12, color);
  }

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
  const title = "Random Point";
  const FPS = 60;

  const world = setup(WIDTH, HEIGHT, title, FPS);
  loop(world);

  tearDown();
}

main();
