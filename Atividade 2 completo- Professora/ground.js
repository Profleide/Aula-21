class Ground // aqui estamos criando tds os parametros necessarios usando programação orientada a objeto (POO). Prrimeira letra sempre em Maiúscula
{
  constructor(x, y, w, h) // nesta função construtor e q passamos os argumentos q serao dados em sketch.js. X E Y e largura e altura
  {
    let options = {
      isStatic:true
    };
    // importante saber q tds as variaves da classa sao referenciadas usando a palavra-chave this
    this.body = Bodies.rectangle(x, y, w, h, options); //para deixar o corpo parado;
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() { // dentro da classe as funções são chamadas de métados assim não precisamos escrever function (função) na frente delas
    var pos = this.body.position; // esta variave e que vai armazenas as posições do corpo no solo
    push();// 
    rectMode(CENTER); // criando um retangulo
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}


