const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChars = ['%', '*', '/', '-', '+'];
let output = '';

const calculate = (btnValue) => {
  const lastChar = output.slice(-1);

  if (
    (specialChars.includes(lastChar) && specialChars.includes(btnValue)) ||
    (lastChar === '+' && btnValue === '-') ||
    (lastChar === '-' && btnValue === '+')
  ) {
    return;
  }

  if (btnValue === '=' && output !== '') {
    output = eval(output.replace('%', '/100'));

    if (isNaN(output)) {
      output = 'Not a Number';
    }
  } else if (btnValue === 'AC') {
    output = '';
  } else if (btnValue === 'DEL') {
    output = output.toString().slice(0, -1);
  } else {
    if (output === '' && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener('click', (e) => calculate(e.target.dataset.value));
});
