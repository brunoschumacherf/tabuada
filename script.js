let res = document.getElementById('res')
function calculator(){
  res.innerHTML = ''
  var num1 = document.querySelector('input#num1').value
  var num2 = document.querySelector('input#num2').value
  for(let i = 0; i <= num2; i++){
    res.innerHTML += `${num1} * ${i} = ${num1 * i} \n`;
  }
}