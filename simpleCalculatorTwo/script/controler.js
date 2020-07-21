let buttonPlus = document.getElementById('buttonPlus');

let input1 = document.getElementById('numberOne');
let input2 = document.getElementById('numberTwo');

function getNumber(props){
  return Number(props.value);
}

const onButtonClick = () => {

  alert(getNumber(input1) + getNumber(input2));
}

buttonPlus.addEventListener('click', onButtonClick);
