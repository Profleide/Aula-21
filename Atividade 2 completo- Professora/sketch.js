      const Engine = Matter.Engine;
      const World = Matter.World;
      const Bodies = Matter.Bodies;

      let engine;
      let world;

      var ground;// baixo
      var left;// direto
      var right; // esquerdo
      var top_wall; // teto
      var ball;
                                                                        // aluno
      var btn1; // botões
      var btn2; // botões

      function setup() {
        createCanvas(400,400);
        engine = Engine.create();
        world = engine.world;

        btn1 = createImg('right.png');
        btn1.position(220,30);
        btn1.size(50,50);
        btn1.mouseClicked(hForce);// função clik do mouse
        
        btn2 = createImg('up.png');
        btn2.position(20,30);
        btn2.size(50,50);
        btn2.mouseClicked(vForce);// função clik do mouse

        // NEW para criar obejtos e atribuimos as variável respectiva
        ground =new Ground(200,390,400,20);
        right = new Ground(390,200,20,400);
        left = new Ground(10,200,20,400);
        top_wall = new Ground(200,10,400,20);
                                                                                //PARTE DO ALUNO
                                                                                
        var ball_options = {    // criando bola
          restitution: 0.95         // restituição propriedade
        }

        ball = Bodies.circle(200,100,20,ball_options); // adicionando BALL (bola) ao world (mundo)
        World.add(world,ball);
        
        rectMode(CENTER);
        ellipseMode(RADIUS);
      }

      function draw() 
      {
        background(51);
                                  // PARTE DO ALUNO

        ellipse(ball.position.x,ball.position.y,20); // passando a posição da bola

        ground.show();// a função feita dentro da nossa classe ground.js
        top_wall.show();
        left.show();
        right.show();
        Engine.update(engine);
      }

                                                                // aluno

      function hForce() // função q aplica força na bola
      {
        Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0}); // promeiro argunto e o "corpo" (body), segunda posiçao x e y inicial, e terceiro quantidade e direção da força X E Y
      }

      function vForce()
      {
        Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
      }
