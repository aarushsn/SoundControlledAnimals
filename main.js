//https://teachablemachine.withgoogle.com/models/uSz9OHOOp/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true
});
   classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/uSz9OHOOp/model.json",modelReady);
}


function modelReady(){
    classifier.classify(gotResults);
}

var cat = 0
var horse = 0
var dog = 0
var donkey = 0
var cow = 0

var cat1 = "cat.gif";
var horse1 = "horse.gif";
var dog1 = "dog.gif";
var donkey1 = "donkey.gif";
var cow1 = "cow.gif";

function gotResults(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random()*255) + 1;
        g = Math.floor(Math.random()*255) + 1;
        b = Math.floor(Math.random()*255) + 1;
        document.getElementById("animal_audio").innerHTML="Horse Detected="+horse+", Dog Detected="+dog+", Cow Detected="+cow+", Donkey Detected="+donkey+", Cat Detected="+cat.h4;
        document.getElementById("audio_play").innerHTML="Animal Detected is "+(results)[0].label;
       // document.getElementById("r","g","b").style.color;

        if(results[0].label=="Horse"){
           document.getElementById("animal_img").src = horse1;
        }
        if(results[0].label=="Dog"){
         document.getElementById("animal_img").src = dog1;
         }
         if(results[0].label=="Cow"){
            document.getElementById("animal_img").src = cow1;
         }
         if(results[0].label=="Donkey"){
            document.getElementById("animal_img").src = donkey1;
         }
         if(results[0].label=="Cat"){
            document.getElementById("animal_img").src =cat1;
         }
    }
}