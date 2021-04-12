class Purple{

    constructor(x,y,width,height){
        var options={
           'restitution':0.8,
           'friction':1.0,
           'density':1.0
        }
    
        this.body=Bodies.rectangle(x,y,width,height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER)
        fill ("#C3B1E1")
        rect(pos.x,pos.y,this.width,this.height);
       
      }
    
    
    }