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
function setInputDisplay(inputId1, inputId2) {
  const inputDisplay1 = document.getElementById(inputId1);
  inputDisplay1.value = '';
  const inputDisplay2 = document.getElementById(inputId2);
  inputDisplay2.value = '';
}

function triangleArea() {
  const base = inputCalculation('triangle-base');
  const height = inputCalculation('triangle-height');
  const area = 0.5 * base * height;
  setOutputValue(area);
  setInputDisplay('triangle-base', 'triangle-height');
}
function rectangleArea() {
  const base = inputCalculation('rectangal-width');
  const height = inputCalculation('rectangal-length');
  const area = base * height;
  setOutputValue(area);
  setInputDisplay('rectangal-width', 'rectangal-length');
}
function parallelogramArea() {
  const base = inputCalculation('parallelogram-base');
  const height = inputCalculation('parallelogram-height');
  const area = base * height;
  setOutputValue(area);
  setInputDisplay('parallelogram-base', 'parallelogram-heighth');
}

function rhombusArea() {
  const base = inputCalculation('rhombus-base');
  const height = inputCalculation('rhombus-height');
  const area = 0.5 * base * height;
  setOutputValue(area);
  setInputDisplay('rhombus-base', 'rhombus-height');
}

function pentagonArea() {
  const base = inputCalculation('pentagon-base');
  const height = inputCalculation('pentagon-height');
  const area = 0.5 * base * height;
  setOutputValue(area);
  setInputDisplay('pentagon-base', 'pentagon-height');
}
function ellipseArea() {
  const base = inputCalculation('ellipse-base');
  const height = inputCalculation('ellipse-height');
  const area = 3.1416 * base * height;
  setOutputValue(area);
  setInputDisplay('ellipse-base', 'ellipse-height');
}
