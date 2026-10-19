const r = require("raylib");

function setup(WIDTH, HEIGHT, title, FPS) {
  r.InitWindow(WIDTH, HEIGHT, title);
  r.SetTargetFPS(FPS);

  const screen = { width: WIDTH, height: HEIGHT };
  const randomPos = getRandomPositions(WIDTH, HEIGHT);

  return { randomPos, screen };
}

function getRandom(range) {
  return Math.random() * range;
}

function getRandomPositions(width, height) {
  const randomPos = [];

  for (let i = 0; i < getRandom(width); i++) {
    const random = getRandom(width);
    const coord = {
      start: { x: random, y: 0 },
      end: { x: random, y: height },
    };

    randomPos.push(coord);
  }

  return randomPos;
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.DARKBLUE);

  for (const pos of world.randomPos) {
    r.DrawLineEx(pos.start, pos.end, 2, r.WHITE);
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
  const title = "Random Number 01";
  const FPS = 60;

  const world = setup(WIDTH, HEIGHT, title, FPS);
  loop(world);

  tearDown();
}

main();
