class stone{
    constructor(x,y){
        var options={
            'density':0.8,
            'friction':1,
            'restitution':1
        };
        this.body=Bodies.rectangle(x,y,60,60,options)
        this.width=200
        this.height=40
        World.add(world,this.body)
    };
    display(){
        var angle=this.body.angle;
    
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        strokeWeight(4);
        stroke('blue')
        
        fill('green')
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();
    }
}