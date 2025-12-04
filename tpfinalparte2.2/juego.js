let videojuego;
let fondo;
let img = {};

function preload() {
  fondo = loadImage("assets/fondo.png");
  img.scooby = loadImage("assets/scoobycaminando.png");
  img.shaggy = loadImage("assets/shaggycaminando.png");
  img.enemigo = loadImage("assets/enemigo.jpg");
}

function setup() {
  createCanvas(640, 480);
  background(200);
  videojuego = new Videojuego();
}

function draw() {
  background(200);
  image(fondo, 0, 0);
  videojuego.dibujar();
  videojuego.actualizar();


}

function keyPressed() {
  videojuego.scooby.mover("scooby");
  videojuego.shaggy.mover("shaggy");
  videojuego.scooby.saltar("scooby");
  videojuego.shaggy.saltar("shaggy");
}