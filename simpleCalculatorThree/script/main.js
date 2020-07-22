document.body.onload = () => {
  let div = document.createElement('div');
  div.className = "inputContainer";
  div.innerHTML = '<input class="inputArea" type="text"/>';
  document.querySelector('.wraper').appendChild(div);
  document.querySelector('.inputArea').value = '0';
  div = document.createElement('div');
  div.className = "buttonContainer";
  document.querySelector('.wraper').appendChild(div);
//document.querySelector('.alert').appendChild(div);

  '7 8 9 * 4 5 6 / 1 2 3 - 0 . = +'.split(' ').map(symbol => {
    document.querySelector('.buttonContainer').insertAdjacentHTML('beforeend', `<button class="buttonItem" value="${symbol}">${symbol}</button>`)
  })
  document.querySelectorAll('.buttonItem').forEach(button => {
    button.addEventListener('click', onButtonClick)
  })



};
const onButtonClick = (event) => {
  let buttonText = event.currentTarget.innerHTML;
  let temp;
  if (buttonText === '+'){
    temp = parseFloat(buttonText);
  } else if (buttonText === '-') {

  } else if (buttonText === '/') {

  } else if (buttonText === '*') {

  }
  document.querySelector('.inputArea').value =
      document.querySelector('.inputArea').value + buttonText;
}
