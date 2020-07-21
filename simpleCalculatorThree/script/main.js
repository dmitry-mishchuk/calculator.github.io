//document.body.onload = addElement;
var my_div = newDiv = null;

function addTegElement(type, count) {
  var newDiv = document.createElement("div");
  var content = newDiv.innerHTML = createInputTeg(type, 1);
  document.getElementById("wraper").innerHTML = content;
  //document.body.insertBefore(newDiv, my_div);
}

function createInputTeg(type, value){
  return `<input type="${type}" value="${value}">`
}



function addElement(type) {
  for (var i = 0; i < 5; i++) {
    addTegElement(type, i)
    document.body.insertBefore(newDiv, my_div);
  }
}

//console.log(createInputTeg('button', 1));
