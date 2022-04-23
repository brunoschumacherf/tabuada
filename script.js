let res = document.getElementById('res')
function calculator(){
  res.innerHTML = ''
  expressao = document.querySelector('select#operation').value
  console.log(expressao)
  var num1 = document.querySelector('input#num1').value
  var num2 = document.querySelector('input#num2').value
  for(let i = 0; i <= num2; i++){
    calculo(i, res)
  }
}

function calculo(i){
  switch(expressao){
    case 'soma':
      res.innerHTML += `${num1.value} + ${i} = ${Number(num1.value) + i}\n`
      break
    case 'subtracao':
      res.innerHTML += `${num1.value} - ${i} = ${num1.value - i}\n`
      break
    case 'divisao':
      res.innerHTML += `${num1.value} / ${i} = ${num1.value / i}\n`
      break
    case 'multiplicacao':
      res.innerHTML += `${num1.value} * ${i} = ${num1.value * i}\n`
      break
  }
}