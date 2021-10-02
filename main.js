function setup(){
c1 = createCanvas(500, 350)
c1.center()
v1 = createCapture(VIDEO)
v1.hide()
model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wDtw5jOty/model.json', modelLoaded)
}
function modelLoaded(){
    console.log("model has loaded")
}
function draw(){
    image (v1, 0, 0, 500, 350)
    model.classify(v1, gotResult)
}
function gotResult(error, results){
if(error){console.log(error)}
else{
    console.log(results)
    document.getElementById("name").innerHTML = results[0].label;
    document.getElementById("percent").innerHTML = results[0].confidence.toFixed(3);
}



}
