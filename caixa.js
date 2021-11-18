class Caixa {
    constructor(){
        this.x = 100;
        this.y = 200;
        this.largura = 50;
        this.altura = 50;
    }

    exibir(){
        rect(this.x, this.y, this.largura, this.altura);
    }

    mudarVelocidade(velocidade){
        this.x = this.x + velocidade;
    }
}



