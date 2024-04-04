function performOperations() {
    const number = document.getElementById('numberInput').value;
    if (!number) {
      alert('Please enter a number.');
      return;
    }
    
    const digitSumResult = document.getElementById('digitSumResult');
    const armstrongResult = document.getElementById('armstrongResult');
    const primeResult = document.getElementById('primeResult');
    const factorsResult = document.getElementById('factorsResult');
  
    const digits = number.split('');
    const sumOfDigits = digits.reduce((sum, digit) => sum + parseInt(digit), 0);
    digitSumResult.textContent = `Sum of digits: ${sumOfDigits}`;
  
    const isArmstrong = digits.reduce((sum, digit) => sum + Math.pow(parseInt(digit), 3), 0) === parseInt(number);
    armstrongResult.textContent = `Is it an Armstrong number? ${isArmstrong ? 'Yes' : 'No'}`;
  
    const isPrime = checkPrime(number);
    primeResult.textContent = `Is it a prime number? ${isPrime ? 'Yes' : 'No'}`;
  
    const factors = getFactors(number);
    factorsResult.textContent = `Factors: ${factors.join(', ')}`;

    // Display the result divs only if there is a result to show
    digitSumResult.style.display = 'block';
    armstrongResult.style.display = 'block';
    primeResult.style.display = 'block';
    factorsResult.style.display = 'block';
  }
  
  function checkPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function getFactors(num) {
    const factors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) factors.push(i);
    }
    return factors;
  }
