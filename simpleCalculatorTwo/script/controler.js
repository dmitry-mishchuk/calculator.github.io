let buttonPlus = document.getElementById('buttonPlus');

let input1 = document.getElementById('numberOne');
let input2 = document.getElementById('numberTwo');

function getNumber(props){
  return Number(props.value);
}
function makeOperation(operation){
  if (operation === '+') {
    return getNumber(input1) + getNumber(input2);
  }
  else if (operation === '-') {
    return getNumber(input1) - getNumber(input2);
  }
  else if (operation === '/') {
    return getNumber(input1) / getNumber(input2);
  }
  else if (operation === '*') {
    return getNumber(input1) * getNumber(input2);
  }
}


const onButtonClick = (event) => {
  let buttonText = event.currentTarget.innerHTML
  alert(makeOperation(buttonText));
}

buttonPlus.addEventListener('click', onButtonClick);
buttonMinus.addEventListener('click', onButtonClick);
buttomDevide.addEventListener('click', onButtonClick);
buttonMultiply.addEventListener('click', onButtonClick);
