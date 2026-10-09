const weight = document.getElementById("weight");
const height = document.getElementById("height");
const bmiBtn = document.getElementById("bmiBtn");
const showBmi = document.getElementById("showBmi");
const showStatus = document.getElementById("showStatus");

function calculateBMI() {
  const w = Number(weight.value);
  const h = Number(height.value);

  const bmi = w / (h * h);

  showBmi.textContent = `${bmi.toFixed(2)}`;

  if (bmi < 18.5) {
    showStatus.textContent = "Underweight";
  } else if (bmi < 24.9) {
    showStatus.textContent = "Normal";
  } else if (bmi < 29.9) {
    showStatus.textContent = "Overweight";
  } else {
    showStatus.textContent = "Obese";
  }
}

bmiBtn.addEventListener("click", calculateBMI);
