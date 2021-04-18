class Poly{
    constructor(){
        var options={
            restitution:0.5,
            density:2
        }
        this.image = loadImage("polygon.png")
        this.body = Bodies.circle(100, 210, 20, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 50);
        //circle(pos.x, pos.y, 40);
    }
}