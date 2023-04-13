leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(630, 150)

    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized!");
}

function draw() {
    background("#ECD9D6");
    textSize(difference);
    fill("#3F4E4F");
    text("Akshara",40,350);
    document.getElementById("font_size").innerHTML = "Font Size " +difference+" px";
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("leftWristX - "+leftWristX+" rightWristX" +rightWristX);
        difference = floor(leftWristX - rightWristX);
        console.log("difference - "+difference);
    }
}