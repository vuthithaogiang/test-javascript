var inputElement = document.querySelector('input[type="text"]');
console.log(inputElement);

var textInput;

inputElement.oninput = function (e){
    textInput = e.target.value;
}

inputElement.onkeyup = function (e) {

    console.log(e.which); // ma phim

    switch(e.which){
        case 27: // esc
            console.log('Exit');
            break;
    }
}

document.onkeyup = function (e) {
    switch(e.which){
        case 27: // esc
            console.log('Exit');
            break;
    }
}

console.log(textInput);

var inputCheckBox = document.querySelector('input[type="checkbox"]');

inputCheckBox.onchange = function (e){
    console.log(e.target.checked);
}

var selectElement = document.querySelector('select');

selectElement.onchange = function (e) {
    console.log(e.target.value);
}