const insert = (num) => {
  document.form.textview.value = document.form.textview.value + num;
}
const equal = () => {
  document.form.textview.value = eval(document.form.textview.value)
}
