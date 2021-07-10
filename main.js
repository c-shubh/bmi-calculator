const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const calculateButton = document.querySelector("#calculate");
const bmiSpan = document.querySelector("#bmi");
const categorySpan = document.querySelector("#category");
const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const height = heightInput.value;
    const weight = weightInput.value;
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    bmiSpan.innerText = `BMI: ${bmi}`;

    if (bmi < 18.5) {
        categorySpan.innerText = "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9){
        categorySpan.innerText = "Normal weight";
    } else if (25 <= bmi && bmi <= 29.9) {
        categorySpan.innerText = "Overweight";
    } else if (bmi >= 30) {
        categorySpan.innerText = "Obesity";
    }
})


// calculateButton.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const height = heightInput.value;
//     const weight = weightInput.value;
//     const bmi = weight / (height * e - 2) ** 2;
//     alert(bmi);
//     return false;
// }, false)