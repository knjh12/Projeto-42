class Drop{
 constructor(x,y){
    var options={

    } 
    

    this.body = Bodies.circle(x, y,5,options);
    this.x=random();
    this.y=y;
   
    World.add(world, this.body);
 
 }
    
   display(){

     var angle = this.body.angle;
     translate(this.body.position.x, this.body.position.y);
     
    
     
     

    }
    
 





}