class bala{
    constructor(x, y){
        this.posX = x;
        this.posY = y;
        this.vel = 3;
    }
//FUNCIONA POR SI SOLO PERO NO DENTRO DE LA CLASE ENEMIGO
    dibujar(){
        fill(255);
        circle(this.posX, this.posY, 60);
    }

    mover(){
        this.posX += 6;
    }

    reciclar(){
        if(this.posX >= width + 100){
            this.posX = 0;
        }
    }
}