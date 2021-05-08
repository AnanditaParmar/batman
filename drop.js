class Drop{
    constructor(x,y){
        var options={
            restitution:0.2,
            friction:0.001
        }
        this.body=Bodies.circle(x,y,5,options);
        this.radius=5;
        World.add(world,this.body);

    }

    display(){
        fill("lightblue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
    update(){
        if(this.body.position.y>500){
            Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,10)});
        }
    }
    
}

