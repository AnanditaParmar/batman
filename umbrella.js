class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,100,options);
        this.image=loadImage("walking_1.png");
        this.radius=100;
        World.add(world,this.body);

    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,300,300);
    }
    
    
}

