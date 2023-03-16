
Webcam.set({
    width: 350,
    height: 350,
    image_format: "png",
    png_quality: 90
});
function loadCamera(){
    Webcam.attach(document.getElementById("camera"));
}
function takeSnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img width="100%" height="90%" id="capturated_image" src="'+data_uri+'" />'
    })
}
console.log("ml5 version = ",ml5.version)
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uPYynOjCJ/model.json",modelLoaded)
function modelLoaded(){
    console.log("model loaded!")
}
function check(){
    img = document.getElementById("capturated_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("resultObjectName").innerHTML = results[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}