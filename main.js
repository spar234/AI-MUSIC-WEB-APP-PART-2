song = "";

function preload()
{
    song = loadSound("music.mp1");
}
scoreRightWrist = 0;
scoreLeftWrist  = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    cideo.hide();

    poseNet = ml5.poseNet(video, modelLLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded () {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results);
scoreLeftWrist = results[0].pose.keypoints[10].score;
scoreLeftWrist = results[0].pose.keypoints[9].score;
console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);

rightWristX  = results[0].pose.rightWrist.x;
rightWristY  = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX +" rightWrist = "+ rightWristY);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX +" leftWrist + "+ leftWristY);

