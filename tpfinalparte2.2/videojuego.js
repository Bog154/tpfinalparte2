class Videojuego {

  constructor() {
    this.bala = new bala(100, 300) //agregado solo para probar si funciona fuera de la clase enemigo porque en la clase enemigo no funciona
    this.enemigo1 = new enemigo(20, 330);
    this.enemigo2 = new enemigo(20, 230);
    this.piso4 = new plataformas(0, 130, 570);
    this.piso3 = new plataformas(0, 230, 570);
    this.piso2 = new plataformas(150, 275, 570);
    this.piso1 = new plataformas(0, 340, 500);
    this.piso0 = new plataformas(70, 460, 570);
    this.scooby = new personaje(220, 50, img.scooby);
    this.shaggy = new personaje(208, 35, img.shaggy);
  }

  dibujar() {
    this.piso4.dibujar();
    this.piso3.dibujar();
    this.piso2.dibujar();
    this.piso1.dibujar();
    this.piso0.dibujar();
    this.scooby.mostrar();
    this.shaggy.mostrar();
    this.enemigo1.dibujar();
    this.enemigo2.dibujar();
    //PRUEBA
    this.bala.dibujar();
  }

  actualizar() {
    this.scooby.mover("scooby");
    this.shaggy.mover("shaggy");
    this.enemigo1.disparar();
    this.enemigo1.reciclar();
    this.enemigo2.disparar();
    this.enemigo2.reciclar();
    //PRUEBA
    this.bala.mover();
    this.bala.reciclar();
  }
//PRUEBA QUE NO FUNCIONO
  colision(){
    if (this.scooby.posy === plataformas.posY){
      this.scooby.posy = plataformas.posY;
      this.scooby.estaParado = true;
    }
  }

  gano(){

  }

  perdio(){ 
  }

}