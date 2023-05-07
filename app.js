var age = parseInt(document.getElementById('age').innerText);
var weight = parseInt(document.getElementById('weight').innerText);

//age part start
function ageMinusBtn() {

    if (age > 0) {
        age = age - 1;
        document.getElementById('age').innerText = age;
    }



}
function agePlusBtn() {

    if (age >= 0) {
        age = age + 1;
        document.getElementById('age').innerText = age;
    }



}
//age part end

//weight part start
function weightMinusBtn() {

    if (weight > 0) {
        weight = weight - 1;
        document.getElementById('weight').innerText = weight;
    }



}
function weightPlusBtn() {

    if (weight >= 0) {
        weight = weight + 1;
        document.getElementById('weight').innerText = weight;
    }

}

//weight part end

//second section weight start from rng
var rng = document.getElementById('rng');
rng.oninput = function () {
    var show = parseInt(rng.value);
    document.getElementById('show').innerHTML = show;

}
//second section weight end from rng

function calc() {
    var height = parseInt(document.getElementById('rng').value);
    var heightInM = height * 0.01;
    var bmi = weight / (Math.pow(heightInM, 2));
    document.getElementById('bmiCal').innerHTML = bmi.toPrecision(4);
    if (bmi < 18.5) {
        document.getElementById('bmi-category-danger').innerText = "You are underweight";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById('bmi-category-normal').innerText = "You are normal";
    }

    else if (bmi >= 25 && bmi < 30) {
        document.getElementById('bmi-category-danger').innerText = "Overweight";
    }
    else {
        document.getElementById('bmi-category-danger').innerText = "Obese";
    }
}