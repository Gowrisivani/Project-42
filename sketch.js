const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

//Calculating time using predefined func from p5.js

hr = hour();

mn = minute();

sc = second();

function preload()
{

}

function setup() 
{
  createCanvas(800,400);

  createSprite(400, 200, 50, 50);

  scAngle = map(sc,0,60,0,360);

  mnAngle = map(mn,0,60,0,360);

  hrAngle = map(hr,0,12,0,360);

  stroke(255,0,0);

  strokeWeight(7);

  line(0,0,100,0)

  translate(0,0);
}

function draw() 
{
  background(255,255,255);  
  drawSprites();
}