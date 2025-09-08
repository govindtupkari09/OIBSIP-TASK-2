document.getElementById("convertBtn").addEventListener("click", convertTemperature);
document.getElementById("swap").addEventListener("click", swapUnits);

function convertTemperature() {
  let temp = parseFloat(document.getElementById("temperature").value);
  let fromUnit = document.getElementById("fromUnit").value;
  let toUnit = document.getElementById("toUnit").value;
  let result = document.getElementById("result");

  if (isNaN(temp)) {
    result.textContent = "❌ Please enter a valid number!";
    return;
  }

  let converted;

  // Convert from selected unit to Celsius first
  if (fromUnit === "Celsius") {
    converted = temp;
  } else if (fromUnit === "Fahrenheit") {
    converted = (temp - 32) * 5 / 9;
  } else if (fromUnit === "Kelvin") {
    converted = temp - 273.15;
  }

  // Convert Celsius to target unit
  if (toUnit === "Celsius") {
    converted = converted;
  } else if (toUnit === "Fahrenheit") {
    converted = (converted * 9 / 5) + 32;
  } else if (toUnit === "Kelvin") {
    converted = converted + 273.15;
  }

  result.textContent = `Converted Value: ${converted.toFixed(2)} ${toUnit}`;
}

function swapUnits() {
  let fromUnit = document.getElementById("fromUnit");
  let toUnit = document.getElementById("toUnit");
  
  let temp = fromUnit.value;
  fromUnit.value = toUnit.value;
  toUnit.value = temp;
}
