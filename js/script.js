// place your images in this array
const randomImageArray = ['smile.gif', 'frown.gif', 'grim.gif', 'bomb.gif'];
const outputImageElement = document.getElementById("outputImageElement");
    
function printAllImages(imgAr, path) {
    path = path;
    //path = path || 'images/';
    console.log(path);// default path here
    for (let i = 0; i < randomImageArray.length; i++ ) {
        outputImageElement.innerHTML += '<img src="' + path + randomImageArray[i] + '" alt = "">';
    }

}

printAllImages(randomImageArray, 'images/');

''