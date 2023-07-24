// pop up button
function hide(element) {
    element.remove('#popupBox');
}



// Fahrenheit to Celcius
function cel2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function fahren2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for (var i = 1; i < 9; i++) {
        var tempHead = document.querySelector("#temp" + i);
        var tempValue = parseInt(tempHead.innerText);
        if (element.value == "°C") {
            tempHead.innerText = fahren2c(tempValue);
        } else {
            tempHead.innerText = cel2f(tempValue);
        }
    }
}