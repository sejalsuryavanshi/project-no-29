class Chain{

    constructor(bodyA,pointB){
    
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
        }
    
       // this.bodyA=body;
       // this.pointB=anchor;
        this.chain=Constraint.create(options)
        World .add(world,this.chain)
    }
    
    
    fly(){
        this.chain.bodyA=null;
    }
    
    display(){
    
        if(this.chain.bodyA){
            var pointA=this.bodyA.position
            var pointB=this.pointB
    
            strokeWeight(2);
            line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    }
