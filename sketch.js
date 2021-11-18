var caixa1, caixa2;

function setup() 
{
  createCanvas(400, 400);
  caixa1 = new Caixa();
  caixa2 = new Caixa();
}

function draw() 
{
  background(220);

  caixa1.exibir();
  caixa1.mudarVelocidade(2);
  caixa2.exibir();
  caixa2.mudarVelocidade(-3);
}

