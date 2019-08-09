let points = 0
let pipeTime = 0
let bulletTime = 0
let obsticalChance = 0
let pipeChance = 30
let bulletChance = 20
let pipeArray = []
let bulletArray = []
let pipe, bullet;
let speed = 15
let bulletSpeed = 15
let pipeSpawnRate = 35
let bulletSpawnRate = 15
let pipeWidth, pipeHight;
let gamePlaying = 0
let startText = "Press Space Bar to play"
let posY = 400
let topOrBottom
let mushKingdom;
let bulletBill;
let pirahna;
let mario;
let myLeft = 2;
let myRight = 2;
let myTop = 2;
let myBottom =2;


// let obsticalChance = 0
// let pipeChance = 30
// let bulletChance = 20
// let pipeArray = []
// let bulletArray = []
// let pipe, bullet;
// let speed = 15
// let bulletSpeed = 15
// let pipeSpawnRate = 20
// let bulletSpawnRate = 15
// let pipeWidth, pipeHight;
// let gamePlaying = 0
// let startText = "Press Space Bar to play"
// let posY = 400
// let topOrBottom

function keyPressed(){
if(keyCode == 32){
    gamePlaying = 1
}
    }
function setup() {
    createCanvas(1000,500)
    background(0)
    frameRate(20)
    textSize(15)
    mushKingdom = loadImage("Peachs_castle.png")
    bulletBill = loadImage("bulletBill.png")
    pirahna = loadImage("image.png")
    mario = loadImage("Cape_Mario_.png")
}
function draw() {
    keyPressed()
    background(0)
    image(mushKingdom, 0,0, 1000,500)
    textSize(30)
    fill(0)
    text(startText,450,height / 2)
    //makes the character
    //rect(20,400,50,100)
    image(mario, 20, posY, 100, 100)
    //starts the game
    if(gamePlaying == 1) {
    //clears starting text
        startText = ""
    //Checks every 2 seconds
    pipeTime ++
    //creates object class
    class Pipe {
        constructor(x,y,width,height){
            //assign property to the object
            this.x = x;
            this.y = y;
            this.width = width
            this.height = height
            console.log(x)
        }
    }
    //creates bullet object class
    class Bullet {
        constructor(x,y,width,height){
            //assign property to the object
            this.x = x;
            this.y = y;
            this.width = width
            this.height = height
        }
    }
    // has a chance to spawns in a pipe with a random height and width
    if (pipeTime ==pipeSpawnRate) {
        obsticalChance = random(100)
        topOrBottom =Math.floor(random(1,3))
        pipeWidth= random(60,80)
        pipeHight = random(200,380)
        pipeY = height - pipeHight
        //has a chance of spawning in obstical
        if(obsticalChance <= pipeChance){
            if(topOrBottom == 1) {
                console.log(obsticalChance)
                pipe = new Pipe(950,pipeY,pipeWidth,pipeHight)
                
                
            }
            if (topOrBottom == 2) {
                pipe = new Pipe(950,0,pipeWidth,pipeHight)
                // image(pirahna, 950, 0, pipeWidth, pipeHight)
            }
            pipeArray.push(pipe)
        }
        pipeTime = 0
        console.log(pipeArray)
    }
    //has a chance to spawn in a bullet
    if (bulletTime == bulletSpawnRate){
        obsticalChance = random(100)
        bulletY = random(380,450)
        if(obsticalChance <= bulletChance) {
            bullet = new Bullet(960,bulletY, 60,50)
            bulletArray.push(bullet)
            console.log("new bullet")
            console.log(bulletY)
            }
        bulletTime = 0
    }
    //spawns bullets after a certin point
    if (points>700) {
        bulletTime ++
    }
    //generates the pipe objects
    for(let i=0;i<pipeArray.length;i++) {
        fill(255)
        console.log(pipeArray )
        // rect(pipeArray[i].x,pipeArray[i].y,pipeArray[i].width,pipeArray[i].height)
        image(pirahna, pipeArray[i].x,pipeArray[i].y,pipeArray[i].width,pipeArray[i].height)
        pipeArray[i].x -= speed
    }
    //generates the bullet objects
    for(i=0;i<bulletArray.length;i++) {
        fill(255)
        //ellipse(bulletArray[i].x,bulletArray[i].y,bulletArray[i].width,bulletArray[i].height)
        image(bulletBill, bulletArray[i].x,bulletArray[i].y,bulletArray[i].width,bulletArray[i].height)
        bulletArray[i].x -= bulletSpeed
    }

    //makes game more difficult as it goes on
    if (points > 500 && points <1500){
        pipeChance += .05
        speed += .02
        bulletSpeed += .01
    }
    //jump
    if (keyIsDown('32')){
        posY -= 40;
        console.log("HEY")
        console.log(posY)
}
    //BRINGS CHARACTER DOWN
    if (posY < 400) {
     posY += 20;
}

    //stops character from leaving
    if(posY < 0) {
    posY = 0
    }
    //counts the points
    points++
    textSize(15)
    text("Your Score: "+ points, 870, 25)
    }
}


