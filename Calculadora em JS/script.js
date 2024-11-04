let display = document.getElementById('display');

function inputValue(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function clearAll() {
  display.innerText = '0';
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace('×', '*').replace('÷', '/'));
  } catch (error) {
    display.innerText = 'Error';
  }
}
