var box = document.getElementById('display');

function toScreen(val){
  box.value += val;
  if (val==="ac") {
    box.value = "";
  }
}

function equal(){
  box.value = eval(box.value);
}

function backspace(){
  box.value = box.value.substring(0, box.value.length-1);
}
