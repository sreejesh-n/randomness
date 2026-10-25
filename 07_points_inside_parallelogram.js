const r = require("raylib");

function setup(WIDTH, HEIGHT, title, FPS) {
  r.InitWindow(WIDTH, HEIGHT, title);
  r.SetTargetFPS(FPS);

  const screen = { width: WIDTH, height: HEIGHT };
  const noOfPoints = 600;
  const pointA = { x: 250, y: 300 };
  const vector = {
    u: { x: 350, y: 0 },
    v: { x: 90, y: 150 },
  };
  const points = getRandomPoints(pointA, vector, noOfPoints);

  return { pointA, vector, points, screen };
}

function getRandom() {
  return Math.random();
}

function getRandomPoints(pointA, vector, noOfPoints) {
  const points = [];

  for (let i = 0; i < noOfPoints; i++) {
    const randomVectorU = r.Vector2Scale(vector.u, getRandom());
    const randomVectorV = r.Vector2Scale(vector.v, getRandom());
    const diagonal = r.Vector2Add(randomVectorU, randomVectorV);
    const randomCenter = {
      x: pointA.x + diagonal.x,
      y: pointA.y + diagonal.y,
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
    r.DrawCircleV(center, 5, color);
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
  const HEIGHT = 800;
  const title = "Points inside parallelogram";
  const FPS = 60;

  const world = setup(WIDTH, HEIGHT, title, FPS);
  loop(world);

  tearDown();
}

main();
