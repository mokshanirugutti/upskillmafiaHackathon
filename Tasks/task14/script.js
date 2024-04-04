function performOperations(){
  const num1 = parseFloat(document.getElementById('num1Input').value);
  const num2 = parseFloat(document.getElementById('num2Input').value);
  const resultsDiv = document.getElementById('results');
  if (isNaN(num1) || isNaN(num2)) {
    alert('Please enter both numbers.');
    return;
  }
  resultsDiv.innerHTML = '';
  displayResult(`Dividing ${num1} by ${num2}...`);
  divideNumbers(num1, num2)
  .then(result => displayResult(`Result: ${result}`))
  .catch(error => displayResult(`Error: ${error}`));
}

const divideNumbers = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject('Division by zero is not allowed.');
    } else {
      resolve(num1 / num2);
    }
  });
};

const displayResult = (message) => {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML += message + '<br>';
  
};

