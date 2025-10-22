class GameObject{
    //This gets called when we do new GameObject()
    //pass in the canvas object
    constructor(canvas)
    {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        //velocity on x axis
        this.vx = 10;
        //velocity on y axis
        this.vy = 10;
        //color of the objecyt
        this.color = "black"
        //reference to the canvas
        this.canvas = canvas
    }
    //renders the object on the screen
    renderRect()
    {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }
    //Moves the object
    move()
    {
        this.x += this.vx;
        this.y += this.vy;
         //stay in boundary of canvas
    //if position is greater than the width of the canvas minus half of the width of the circle
    if(this.x > this.canvas.width - 50)
        {
            this.vx*= -1
        }
    
        if(this.x < 50)
        {
            this.vx*= -1
        }
    
        if(this.y<50)
        {
            this.vy *= -1
        }
    
        if(this.y > this.canvas.width - 50)
        {
            this.vy *= -1
        }

    }
}