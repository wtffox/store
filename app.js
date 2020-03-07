var formValue = [];
var inputElem = document.getElementById('string');
var outputElementS = document.getElementById('text1');
var outputElementK = document.getElementById('text');
var formatedValue = [];
var outputPatternS = 's11';
var outputPatternK = 'k22';

var inp = document.querySelector("[type='button']");
inp.addEventListener('click', add)
function add(){
  let value = inputElem.value;
  checkUsInp(value);
  value = toCurrectLength(value);
  formValue.push(value);
  toFormat(value);
  outputTo(outputElementS, formValue)
  outputTo(outputElementK, formatedValue)
};
function toFormat(element){
  formatedValue.push(element.concat(outputPatternS))
  formatedValue.push(element.concat(outputPatternK))
};
function checkUsInp(value){
  const reg = new RegExp("/\d");
if (!value.match(reg)){
  console.log(value.match("\d"))
  console.log('debil')
};
};

function toCurrectLength(value){
  let currentLength =  value.length;
  console.log(currentLength)
  let result = value;
  while(currentLength <5){
    result = "0".concat(result);
    currentLength++;
  }
  return result;
}

function outputTo(outputToId, value){
  outputToId.value = value;
}

