function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses)
}
function draw(){
image(video,0,0,600,500);
fill("blue")
stroke("red")
if(leftWristscore>0.4){
    circle(leftx,lefty,20);
    leftyNumber=Number(lefty);
    rounder=floor(leftyNumber);
    volume.rounder/500;
    document.getElementById("volume").innerHTML="volume"+volume;
    song.setVolume(volume);
}
}
if(rightWristscore>0.2){
    circle(rightx,righty);
    if(righty>0 && rightx<=100){
        document.getElementById("speed").innerHTML="Speed  =1x";
        song.rate(0.5);
    }
if(righty>100 && rightx<=200){
    document.getElementById("speed").innerHTML="Speed  =1x";
        song.rate(1); 
}
if(righty>100 && rightx<=200){
    document.getElementById("speed").innerHTML="Speed  =1x";
        song.rate(1.5); 
}
if(righty>100 && rightx<=200){
    document.getElementById("speed").innerHTML="Speed  =1x";
        song.rate(2); 
}
if(righty>100 && rightx<=200){
    document.getElementById("speed").innerHTML="Speed  =1x";
        song.rate(2.5); 
}
}
song="";
function preload(){
    song=loadSound(ben.mp3);
    song=loadSound(luke.mp3);
    
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded() {
    console.log("posenet is working")
}
function gotPoses(results){
if(results.length>0){
console.log(results);
leftWristscore=results[0].pose.keypoints.[9].score;
leftx=results[0].pose.leftWrist.x;
lefty=results[0].pose.leftWrist.y;
rightx=results[0].pose.rightWrist.x;
righty=results[0].pose.rightWrist.y;
}
}
