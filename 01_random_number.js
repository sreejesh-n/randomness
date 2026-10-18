const r = require("raylib");

function setup(WIDTH, HEIGHT, title, FPS) {
  r.InitWindow(WIDTH, HEIGHT, title);
  r.SetTargetFPS(FPS);

  const screen = { width: WIDTH, height: HEIGHT };

  const start = { x: getRandom(WIDTH), y: 0 };
  const end = { x: getRandom(WIDTH), y: HEIGHT };

  return { screen, start, end };
}

function getRandom(range) {
  return Math.random() * range;
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  r.DrawLineEx(world.start, world.end, 2, r.WHITE);

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
  const title = "Random Number";
  const FPS = 60;

  const world = setup(WIDTH, HEIGHT, title, FPS);
  loop(world);

  tearDown();
}

main();
