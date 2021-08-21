Webcam.set({
    width: 450,
    height: 350,
    image_format: 'png',
    jpg_quality: 100
})

Camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_my_pic() {
    Webcam.snap(function (data_uri) { document.getElementById("result").innerHTML = '<img id="imerger" src="' + data_uri + '">' });

    console.log('ml5 version', ml5.version);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/F6HG-Vvnn/model.json', modelLoaded)
}

function modelLoaded() {
    console.log("modelLoaded");
}

function Check() {
    img = document.getElementById("imerger");
    classifier.classify(img, gotresult);
    console.log(Check);
}

function gotresult(error, result) {
    if (error) {
        console.error(error);
    }

    else {
        console.log(result);
        document.getElementById("Object").innerHTML = result[0].label;
        document.getElementById("Accuracy").innerHTML = result[0].confidence;
    }
}



