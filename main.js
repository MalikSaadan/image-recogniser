Webcam.set({
    width:350,
    height:300,
    image_format:'png',png_quality:90
});
Webcam.attach('#camera');
function takeimg(){
Webcam.snap(function(data_uri){
    document.getElementById("result").src=data_uri;
});
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ishjOIKc1/model.json',model_loaded);
function model_loaded(){
    console.log("model_loaded");
}
function check(){
     img=document.getElementById("result");
     classifier.classify(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log( results);
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}