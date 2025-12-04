class enemigo {
    constructor(x, y){
        this.posX = x;
        this.posY = y;
        this.ancho = 30;
        this.alto = 50;
        this.balas = new bala();
    }

    dibujar(){
        fill(150, 15, 75);
        rect(this.posX, this.posY, this.ancho, this.alto);
        this.balas.dibujar(this.posX, this.posY);
    }

    disparar(){ //PUEDE QUE NO ESTE VIENDO ALGO MUY SIMPLE PERO REALMENTE NO ENTIENDO QUE ESTA MAL
        this.balas.mover();
    }
    reciclar(){
        this.balas.reciclar();
    }

}