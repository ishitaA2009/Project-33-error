class Snow{
    constructor(x,y){
        var options={
            friction:0.3,
            density:0.1,
            restitution:0.2
        }
       this.snow = loadImage("snow5.webp");
        //snow.scale=00.1;
    }
    display(){

      //  var angle = this.body.angle;
        push();
       // translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.snow,200, 0, this.width, this.height);
        pop();

    }
}