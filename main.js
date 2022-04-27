nosex ="";
nosey ="";


function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav");
	coinsf = loadSound("coin.wav");
	gameoveree = loadSound("gameover.wav");
	kick = loadSound("kick.wav");
	diex = loadSound('mariodie.wav');
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log('model is loaded');
}

function gotPoses(results){
if(results.length > 0){
	nosex = results[0].pose.nose.x;
	nosey = results[0].pose.nose.y;
	console.log("Nose x: " + nosex + " Nose y: " + nosey);
}
}

function draw() {
	game()
}

function start(){
	
}





