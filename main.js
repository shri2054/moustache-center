function preload() {
     clown_nose = loadImage(' https://i.postimg.cc/3x3QzSGq/m.png');
     
}
 function setup (){
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }

 function modelLoaded() {
    console.log('PoseNet Is Initialized');
 }
  
 function gotPoses(results)
 {
if(results.length > 0)
 {
    console.log(results);
    noseX=results[0].pose.nose.x-14;
    nosey=results[0].pose.nose.y+5;
    console.log("nose x =" + noseX);
    console.log("nose y =" + nosey);
 }
}
 function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,nosey,30,30);
 }

 function take_snapshot(){
save('myFilterImage.png');
 }
  
 noseX=0;
 nosey=0;