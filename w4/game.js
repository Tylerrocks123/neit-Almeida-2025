// console.log("Hello World!")


// var person ={
//     first: "Tyler",
//     last: "Almeida",

//     firstAndLastName: function()
//     {
//         alert("My name is: "+ this.first + this.last)
//     }
// }

// console.log(person.first)

// //Key value pair (can only have one) called square
// //Will learn about classes next class
// var square ={
//     x: 500,
//     y: 500,
//     width: 100,
//     height: 100,
//     color: "red",
// }

// var copy = square;
// copy.x = 200;


// //Create a square using our KeyValue objct
// ctx.fillStyle = square.color
// ctx.fillRect(square.x,square.y,square.width,square.height)

// //For loops

// for(var i = 0; i<20 ; i++)
// {
//     console.log(2*i)
// }

// for(var s = 0; s< 20; s++)
// {
//     ctx.fillStyle = "olive"
//     ctx.fillRect(s*5*(20/2), s,20,20)
// }

// //Adding to the array
// var colors =[]
// colors[0] = "red"
// colors[1] = "olive"
// colors[2] = "yellow"
// //Predefined array
// var person =["Joel","Jason","Amanda"]

// console.log(colors[1])

// colors[4]="blue"
// console.log(colors[4])
// console.log(colors[3])

// var twodArray=[
// [1,1,1,1,1,1,1,1],
// [2,2,2,2,2,2,2,2],
// [3,3,3,3,3,3,3,3],
// [4,4,4,4,4,4,4,4]
// ]

// //All arrays have a length parameter attached to them, which tells the programmer how many objects are in the array
// for(var x =0; x <twodArray.length; x++)
// {
//     //accessing the value within the array
//     console.log(twodArray[x][4])
// }

// //Double for loop
// for(var xCord = 0; xCord<twodArray.length;xCord++)
// {
//     for(var yCord = 0; yCord < 8; yCord++)
//     {
//         console.log(twodArray[xCord][yCord])
//     }
// }

// //While loop!

// var whileInt = 0;
// while(whileInt < 20 * 4)
// {
//     whileInt++;
//     console.log(whileInt)
// }

// //var badpractice = "Dont do this"
// //while(true)
// //{
// //    console.log(badpractice)
// //}



var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

var timer = setInterval(main,1000/60)

var x = 50;
var y = canvas.height / 2
var w = 100;
var h = 100;
var moveAmountX = 10;
var moveAmountY = 10;

//Random number
//math.round = rounds up or down
//math.random will always return 0-1, can be increased by multiplyimg
var randomNumber = Math.round(Math.random() * 5)

//math.floor = always rounds down
var lowRandomNumber = Math.floor(Math.random()*5)
//outputting the random numbers
console.log(randomNumber)
console.log(lowRandomNumber)

var jimmyTheBox = new GameObject(canvas);
jimmyTheBox.width=100;
jimmyTheBox.height=100;
jimmyTheBox.x = 72;
jimmyTheBox.y = 84;
jimmyTheBox.color = "red";

var paulTheBox = new GameObject(canvas)
paulTheBox.width= 50;
paulTheBox.height = 50;
paulTheBox.x = canvas.width /2;
paulTheBox.y = canvas.height /2;
paulTheBox.color = "blanchedalmond"

//The main function
function main()
{
    //Clear canvas every frame
    ctx.clearRect(0,0,canvas.width,canvas.height)

    //Rendering the boxes
    jimmyTheBox.renderRect();
    paulTheBox.renderRect();

    jimmyTheBox.move()
    paulTheBox.move()

    //update our object's position
    x += moveAmountX;
    y += moveAmountY;

    //Draw our object
    ctx.fillStyle = "olive"

    ctx.beginPath();
    ctx.arc(x,y,50,0,2 * Math.PI);
    ctx.fill();

    //stay in boundary of canvas
    //if position is greater than the width of the canvas minus half of the width of the circle
    if(x > canvas.width - 50)
    {
        moveAmountX *= -1
    }

    if(x < 50)
    {
        moveAmountX *= -1
    }

    if(y<50)
    {
        moveAmountY *= -1
    }

    if(y > canvas.width - 50)
    {
        moveAmountY *= -1
    }
}