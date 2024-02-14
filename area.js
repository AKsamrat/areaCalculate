function inputCalculation(inputValue) {
  const inputBaseValue = document.getElementById(inputValue);
  // const baseAsText = inputBaseValue.value;
  const baseAsValue = parseFloat(inputBaseValue.value);
  return baseAsValue;
}

function setOutputValue(outputValue) {
  const DisplayValue = document.getElementById('output_display');
  DisplayValue.innerText = outputValue;
}

function triangleArea() {
  const base = inputCalculation('triangle-base');
  const height = inputCalculation('triangle-height');
  const area = 0.5 * base * height;
  setOutputValue(area);
}
function rectangleArea() {
  const base = inputCalculation('rectangal-width');
  const height = inputCalculation('rectangal-length');
  const area = base * height;
  setOutputValue(area);
}
function parallelogramArea() {
  const base = inputCalculation('parallelogram-base');
  const height = inputCalculation('parallelogram-height');
  const area = base * height;
  setOutputValue(area);
}
function rhombusArea() {
  const base = inputCalculation('rhombus-base');
  const height = inputCalculation('rhombus-height');
  const area = 0.5 * base * height;
  setOutputValue(area);
}
function pentagonArea() {
  const base = inputCalculation('pentagon-base');
  const height = inputCalculation('pentagon-height');
  const area = 0.5 * base * height;
  setOutputValue(area);
}
function ellipseArea() {
  const base = inputCalculation('ellipse-base');
  const height = inputCalculation('ellipse-height');
  const area = 3.1416 * base * height;
  setOutputValue(area);
}
