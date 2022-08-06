function preload() {
}

function setup() {
    canvas = createCanvas(1000, 1000);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}


function draw() {
    image(video, 105, 105, 800, 800);

    fill(0, 255, 255);
    stroke(0, 0, 255);
    rect(155, 50, 700, 55);
    rect(855, 105, 55, 800);
    rect(100, 105, 55, 800);
    rect(155, 905, 700, 55);
    
    fill(255, 255, 0);
    stroke(67, 255, 0);
    rect(100, 50, 55, 55, 20);
    rect(855, 50, 55, 55, 20);
    rect(100, 905, 55, 55, 20);
    rect(855, 905, 55, 55, 20);
}
function take_snapshot() {
    save('super_photo.png')
}
