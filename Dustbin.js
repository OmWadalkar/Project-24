class Dustbin
{
 constructor ()
 {
   var option = 
   {
     isStatic = true
   }
   this.body = Bodies.rectangle(x,y,width,height,option);
   this.width = width;
   this.height = height;
   World.add(world,this.body);
 }
 display ()
 {
     var pos = this.body.position;
     rectMode(CENTRE);
     fill("green");
     rect(pos.x,pos.y,this.width,this.height);
 }
};
