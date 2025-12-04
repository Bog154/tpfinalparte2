class personaje {

  constructor(x, y, imagen) {
    this.posx = x;
    this.posy = y;
    this.alto = 58;
    this.imagen = imagen;
    this.vel = 5;
    this.vive = true;
    // código de salto
    this.vely = 0; // velocidad del eje Y
    this.gravedad = 1; // gravedad por frame
    this.piso = 435; // el piso de los personajes
    this.estaParado = false;

  }

  mostrar() {
    image(this.imagen, this.posx, this.posy);
    if (personaje == "scooby") {
      image(img.scooby);
    }
    if (personaje == "shaggy") {
      image(img.shaggy);
    }
  }

  mover(personaje) {
    // movimiento horizontal
    if (personaje === "scooby") {
      if (keyIsDown(LEFT_ARROW)) {
        this.posx -= this.vel;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.posx += this.vel;
      }
    }

    if (personaje === "shaggy") {
      if (keyIsDown(65)) {
        this.posx -= this.vel;
      } // A
      if (keyIsDown(68)) {
        this.posx += this.vel;
      } // D
    }

    // movimiento vertical

    if(this.estaParado){
      this.vely = 0;
    } else {
      this.posy += this.vely;
      this.vely += this.gravedad;
    }
    

    // límites
    if (this.posx < 20) {
      this.posx = 20;
    }
    if (this.posx > 590) {
      this.posx = 590;
    }
    if (this.posy > this.piso){
      this.posy = this.piso;
    }
  }

  saltar(jugador) {
    if (this.posy === this.piso) {
      if (jugador === "scooby" && keyCode === UP_ARROW) {
        this.vely = -15; // salto Scooby
      }
      if (jugador === "shaggy" && keyCode === 87) {
        this.vely = -15; // salto Shaggy (W)
      }
    }
  }

}