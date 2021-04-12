class Snow{
    constructor(x,y,width,height){
        var options={
            friction:0.3,
            density:0.1,
            restitution:0.2
        }

        this.body = Bodies.circe(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,200, 0, this.width, this.height);
        pop();

    }
}