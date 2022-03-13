https://teachablemachine.withgoogle.com/models/2YIdM5ou4/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2YIdM5ou4/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
    }
    else{
        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        
        img = document.getElementById('download.jpg');
        img1 = document.getElementById('dog.jpg');

        if(results[0].label == "barking") {
            img.src = 'giphy.gif';
            img1.src = 'dog.png';
        }
        else if (results[0].label == "meow") {
            img.src = 'download.png';
            img1.src = 'corgi-excited.gif';
        }
    }
}