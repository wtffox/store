var formValue = [];
var inputElem = document.getElementById('string');

var inp = document.querySelector("[type='button']");
inp.addEventListener('click', add)
function add(){
  let value = inputElem.value;
  checkUsInp(value);
formValue.push(value);
toFormat(value);
console.log(formValue);
};
function toFormat(element){
console.log(element.length);
};
function checkUsInp(value){
  const reg = new RegExp("/\d");
if (!value.match(reg)){
  console.log(value.match("\d"))
  console.log('debil')
};
};

