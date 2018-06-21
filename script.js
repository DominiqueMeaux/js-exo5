//déclaration de la fonction number
function multiply() {
var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;
var regex = /^[\d]+[.1][\d]+$/;
if((regex.test(firstNumber) == true) && (regex.test(secondNumber) == true) ){
  var result = Math.floor (firstNumber) * secondNumber;
  alert(result)
}
else{
  alert('Entrez des nombres décimaux svp');
  }
}
