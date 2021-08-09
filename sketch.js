const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here





function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
    
	var bob1_options={
		isStatic:false,
		restitution:1,
		density:0.01
	}
	bob1 = Bodies.circle(400,100,230,20,roof_options);
    World.add(world,bob1);
	Engine.run(engine);

	var bob2_options={
		isStatic:false,
		restitution:1,
		density:0.01
	}
	bob2 = Bodies.circle(400,100,230,20,roof_options);
    World.add(world,bob1);
	Engine.run(engine);

	var bob3_options={
		isStatic:false,
		restitution:1,
		density:0.01
	}
	bob3 = Bodies.circle(400,100,230,20,roof_options);
    World.add(world,bob1);
	Engine.run(engine);
  
	var bob4_options={
		isStatic:false,
		restitution:1,
		density:0.01
	}
	bob4 = Bodies.circle(400,100,230,20,roof_options);
    World.add(world,bob1);
	Engine.run(engine);

	var bob5_options={
		isStatic:false,
		restitution:1,
		density:0.01
	}
	bob5 = Bodies.circle(400,100,230,20,roof_options);
    World.add(world,bob1);
	Engine.run(engine);

	rope1=new rope(bob1,roof,-80, 0);
	rope2=new rope(bob2,roof,-80, 0);
	rope3=new rope(bob3,roof,-80, 0);
	rope4=new rope(bob4,roof,-80, 0);
	rope5=new rope(bob5,roof,-80, 0);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  display()
{
	var pointA=this.rope.bodyA.position;
	var pointB=this.rope.bodyB.position;

}
  


  
  //create ellipse shape for multiple bobs here
  Matter.Body.applyForce(bob1,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(bob2,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(bob3,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(bob4,{x:0,y:0},{x:0,y:-0.05})
  Matter.Body.applyForce(bob5,{x:0,y:0},{x:0,y:-0.05})
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
 if(keyPressed(UP_ARROW)){
	Matter.bob1.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
 }