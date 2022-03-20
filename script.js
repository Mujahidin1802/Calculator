let outputScreen = document.getElementById("output-screen");

function insert(num) {
  outputScreen.value += num;
}

function equal() {
  let eq = outputScreen.value;
  if (eq) {
    outputScreen.value = eval(outputScreen.value);
  }
  if (eq == "") {
    outputScreen.value = "";
  }
}

function cle() {
  outputScreen.value = "";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}

// function insert() {
// outputScreen.value += op;
// let x = (outputScreen.value = "");
// if (x == "") {
// outputScreen.value = "";
// }
// }
//
