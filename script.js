function convertToCelsius() {
    let fahrenheit = parseFloat(document.getElementById('fh').value);
    let celsius = (fahrenheit - 32) * (5/9);
    document.getElementById('cel').value = celsius.toFixed(2);
}

function convertToFahrenheit() {
    let celsius = parseFloat(document.getElementById('cel').value);
    let fahrenheit = (celsius * (9/5)) + 32;
    document.getElementById('fh').value = fahrenheit.toFixed(2);
}
