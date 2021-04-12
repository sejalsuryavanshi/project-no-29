class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.chain1 = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.Chain);

    }
    fly(){
        this.chain.bodyA =null;
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}
    