class plataformas{
    //HICE EL ESQUEMA MUY BURDAMENTE PORQUE A PARA TRATAR DE CONSEGUIR LAS COLISIONES PERO NO LO CONSEGUI
    constructor(x, y, a){
        this.posX = x;
        this.posY = y;
        this.ancho = a;
    }

    dibujar(){
        fill(255, 99, 99);
        rect(this.posX, this.posY, this.ancho, 20);
    }
//INTENTO FALLIDO
    contacto(personaje) {
    let contacto=this.posX+this.tam > personaje.posx && this.posX < personaje.posx && 
    this.posY > personaje.posy && this.posY < personaje.posy;
    return contacto;
  }
  
}