const lengthValue = document.getElementById("length-value")
const volumeValue = document.getElementById("volume-value")
const massValue = document.getElementById("mass-value")
const textBox = document.getElementById("textbox")
const convertBtn = document.getElementById("convert-btn")
let meterToFeet = 0
let feetToMeter = 0
let literToGallon = 0 
let gallonToLiter = 0
let kilosToPound = 0
let poundToKilos = 0


function lengthConversion() {
    meterToFeet = textBox.value/0.3048
    feetToMeter = textBox.value/3.28084
}

function volumeConversion() {
    literToGallon = textBox.value*0.264172
    gallonToLiter = textBox.value*3.785412
}

function massConversion() {
    kilosToPound = textBox.value*2.204623
    poundToKilos = textBox.value*0.4535924
}

function render() {
    lengthConversion()
    volumeConversion()
    massConversion()
    lengthValue.textContent = `${textBox.value} meters = ${(meterToFeet).toFixed(3)} feet | ${textBox.value} feet = ${(feetToMeter).toFixed(3)} meters`
    volumeValue.textContent = `${textBox.value} liters = ${(literToGallon).toFixed(3)} gallons | ${textBox.value} gallons = ${(gallonToLiter).toFixed(3)} liters`
    massValue.textContent = `${textBox.value} kilos = ${(kilosToPound).toFixed(3)} pounds | ${textBox.value} pounds = ${(poundToKilos).toFixed(3)} kilos`
}

convertBtn.addEventListener("click", function(){
    render()
    textBox.value = " "
})