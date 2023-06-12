noseX = 0;
noseY = 0;

function preload() {
    amazing = loadImage('https://i.postimg.cc/zXzPyXS0/istockphoto-586938400-612x612.jpg'); 
}

function setup() {
    canvas= createCanvas(640,480)
    canvas.position(110,250)
    video = createCapture(VIDEO)
    video.hide();

}

function draw(){
    image(video, 0, 0, 640,480)
    circle(30, 30, 50);
    ellipse(56, 56, 100, 100);
    rect(580, 100, 40, 55, 20);
    rect(580, 150, 40, 55, 20);
    rect(580, 200, 40, 55, 20);
    rect(580, 250, 40, 55, 20);
    rect(580, 300, 40, 55, 20);
    rect(580, 350, 40, 55, 20);
    rect(580, 400, 40, 55, 20);
    rect(580, 450, 40, 55, 20);


   
    circle(615, 30, 50);
    ellipse(589, 56, 100,100);
    rect(30, 100, 40, 55, 20);
    rect(30, 150, 40, 55, 20);
    rect(30, 200, 40, 55, 20);
    rect(30, 250, 40, 55, 20);
    rect(30, 300, 40, 55, 20);
    rect(30, 350, 40, 55, 20);
    rect(30, 400, 40, 55, 20);
    rect(30, 450, 40, 55, 20);
    rect(30, 20, 580, 55, 20, 15, 10, 5);
   image(amazing,noseX+230,noseY+10,200,100)
}

function takeSnapshot(params) {
    save('p5js.png');
}