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

function setAtribute(value) {
  const areaName = document.getElementById('whichArea');
  areaName.innerText = '';
  const p = document.createElement('p');
  if (value === 1) {
    p.innerText = 'Triangle';
    areaName.appendChild(p);
  }
  if (value === 2) {
    p.innerText = 'Rectangle';
    areaName.appendChild(p);
  }
  if (value === 3) {
    p.innerText = 'Parallalogram';
    areaName.appendChild(p);
  }
  if (value === 4) {
    p.innerText = 'Rhombus';
    areaName.appendChild(p);
  }
  if (value === 5) {
    p.innerText = 'Pentagon';
    areaName.appendChild(p);
  }
  if (value === 6) {
    p.innerText = 'Ellipse';
    areaName.appendChild(p);
  }
}

function triangleArea() {
  const base = inputCalculation('triangle-base');
  const height = inputCalculation('triangle-height');
  const area = 0.5 * base * height;
  setOutputValue(area);
  setInputDisplay('triangle-base', 'triangle-height');
  setAtribute(1);
}
function rectangleArea() {
  const base = inputCalculation('rectangal-width');
  const height = inputCalculation('rectangal-length');
  const area = base * height;
  setOutputValue(area);
  setInputDisplay('rectangal-width', 'rectangal-length');
  setAtribute(2);
}
function parallelogramArea() {
  const base = inputCalculation('parallelogram-base');
  const height = inputCalculation('parallelogram-height');
  const area = base * height;
  setOutputValue(area);
  setInputDisplay('parallelogram-base', 'parallelogram-height');
  setAtribute(3);
}

function rhombusArea() {
  const base = inputCalculation('rhombus-base');
  const height = inputCalculation('rhombus-height');
  const area = 0.5 * base * height;
  setOutputValue(area);
  setInputDisplay('rhombus-base', 'rhombus-height');
  setAtribute(4);
}

function pentagonArea() {
  const base = inputCalculation('pentagon-base');
  const height = inputCalculation('pentagon-height');
  const area = 0.5 * base * height;
  setOutputValue(area);
  setInputDisplay('pentagon-base', 'pentagon-height');
  setAtribute(5);
}

function ellipseArea() {
  const base = inputCalculation('ellipse-base');
  const height = inputCalculation('ellipse-height');
  const area = 3.1416 * base * height;
  setOutputValue(area);
  setInputDisplay('ellipse-base', 'ellipse-height');
  setAtribute(6);
}
