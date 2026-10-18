const r = require("raylib");

function setup(WIDTH, HEIGHT, title, FPS) {
  r.InitWindow(WIDTH, HEIGHT, title);
  r.SetTargetFPS(FPS);

  const screen = { width: WIDTH, height: HEIGHT };
  const noOfPoints = 500;
  const position = [];

  for (let i = 0; i < noOfPoints; i++) {
    const randomCenter = {
      x: getRandom(0, WIDTH),
      y: getRandom(0, HEIGHT),
    };

    position.push(randomCenter);
  }

  return { position, screen };
}

function getRandom(rangeStart, rangeEnd) {
  return Math.random() * (rangeEnd - rangeStart) + rangeStart;
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

  for (const center of world.position) {
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
