const sampleArray = [4, 8, 2, 11, 6, 7, 10];

const findMaxNumber = (array) => Math.max(...array);

const calculateSum = (array) => array.reduce((sum, num) => sum + num, 0);

const countOddNumbers = (array) => array.filter(num => num % 2 !== 0).length;

function performArrayOperations() {
    const arrayInput = document.getElementById('arrayInput').value;
    if (!arrayInput) {
      alert('Please enter an array of comma-separated numbers.');
      return;
    }
    const array = arrayInput.split(',').map(num => parseInt(num.trim()));

  const maxNumberResult = document.getElementById('maxNumberResult');
  const sumResult = document.getElementById('sumResult');
  const oddCountResult = document.getElementById('oddCountResult');

  const maxNumber = findMaxNumber(array);
  const sum = calculateSum(array);
  const oddCount = countOddNumbers(array);

  maxNumberResult.textContent = `Maximum number: ${maxNumber}`;
  sumResult.textContent = `Sum of all elements: ${sum}`;
  oddCountResult.textContent = `Count of odd numbers: ${oddCount}`;

  maxNumberResult.style.display = 'block';
  sumResult.style.display = 'block';
  oddCountResult.style.display = 'block';

  console.log(`Maximum number: ${maxNumber}`);
  console.log(`Sum of all elements: ${sum}`);
  console.log(`Count of odd numbers: ${oddCount}`);
}
