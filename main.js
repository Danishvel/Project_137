Status = "";
object = [];
Obj = "";

function preload(){

}
function setup(){
    canvas = createCanvas(500, 400);
    canvas.position(400, 300);

    webcam = createCapture(VIDEO);
    webcam.hide();
}
function draw(){
    image(webcam, 0, 0, 500, 400);
    if (object != Obj) {
        console.log("gfdjhf fedfhdsg"); 
        document.getElementById("Object").innerHTML = Obj;
        document.getElementById("Dsd").innerHTML = "hfff";
     }
     if (object = Obj) {
        console.log(Obj + "Found"); 
        document.getElementById("Object").innerHTML = Obj;
        document.getElementById("Dsd").innerHTML = Obj;
     }
    R = random(255);
    G = random(255);
    B = random(255);
    if (Status != "") {
        ObjectDetector.detect(webcam, gotresults);
    }    
}
function gotresults(error, results) {
    if (error) {
        console.log(error);
    }
    else{
        
        console.log(results);
        object = results;
        for(i = 0; i < object.length; i++){
            stroke(R, G, B);
            noFill();
            percent = floor(object[i].confidence*100);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
            text(object[i].label + " , " + percent + "%", object[i].x + 10, object[i].y + 20);
        }
    }
}
function start(){
    ObjectDetector = ml5.objectDetector('cocossd', modelloaded);
    Obj = document.getElementById("Obj").value;
    console.log(Obj);
}
function modelloaded(){
    console.log("Coco is loaded✔✔✔");
    document.getElementById("status").innerHTML = "Status : Started to Detect";
    Status = true;
}

function List() {
    window.location = "List.html";
}
function In(){
    window.location = "Inter.html";
}