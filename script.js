function computeAreaOfARectangle(length, width) {
  return length * width;
}

function computeAreaOfACircle(radius) {
  return Math.PI * radius * radius;
}

function computePower(number, exponent) {
  return Math.pow(number, exponent);
}

function computeSquareRoot(number) {
  return Math.sqrt(number);
}

function getLengthOfThreeWords(word1, word2, word3) {
  return word1.length + word2.length + word3.length;
}

function joinArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

function getProductOfAllElementsAtProperty(obj, key) {
  if (!Array.isArray(obj[key]) || obj[key].length === 0) {
    return 0;
  }
  return obj[key].reduce((acc, curr) => acc * curr, 1);
}

function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
}

function findShortestWordAmongMixedElements(arr) {
  let words = arr.filter(el => typeof el === 'string');
  if (words.length === 0) return '';
  return words.reduce((shortest, curr) => curr.length < shortest.length ? curr : shortest);
}

function findSmallestNumberAmongMixedElements(arr) {
  let numbers = arr.filter(el => typeof el === 'number');
  if (numbers.length === 0) return '';
  return Math.min(...numbers);
}

function modulo(dividend, divisor) {
  if (divisor === 0 || isNaN(dividend) || isNaN(divisor)) return NaN;
  let remainder = Math.abs(dividend);
  while (remainder >= Math.abs(divisor)) {
    remainder -= Math.abs(divisor);
  }
  return Math.sign(dividend) === Math.sign(divisor) ? remainder : -remainder;
}

function reverseChunks(str, chunkSize) {
  let result = '';
  for (let i = 0; i < str.length; i += chunkSize) {
    result += str.slice(i, i + chunkSize).split('').reverse().join('');
  }
  return result;
}

function findUniqueNumber(arr) {
  let even = [];
  let odd = [];
  arr.forEach(num => {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  });
  return even.length === 1 ? even[0] : odd[0];
}

function showResults() {
  let output = document.getElementById('output');
  output.value = '';
  
//дальше тут можна міняти данні
output.value += "1.1. Площа прямокутника (5 x 6): " + computeAreaOfARectangle(5, 6) + "\n";
output.value += "1.2. Площа кола (радіус 5): " + computeAreaOfACircle(5) + "\n";
output.value += "1.3. Піднесення до степеня (2 ^ 3): " + computePower(2, 3) + "\n";
output.value += "1.4. Квадратний корінь (з числа 16): " + computeSquareRoot(16) + "\n";
output.value += "1.5. Довжина трьох слів ('яблуко', 'банан', 'вишня'): " + getLengthOfThreeWords('яблуко', 'банан', 'вишня') + "\n";
output.value += "1.6. Об'єднання масивів ([1, 2, 3], [4, 5, 6]): " + joinArrays([1, 2, 3], [4, 5, 6]) + "\n";
output.value += "1.7. Добуток всіх елементів (obj.arr = [1, 2, 3]): " + getProductOfAllElementsAtProperty({ arr: [1, 2, 3] }, 'arr') + "\n";
output.value += "1.8. Сума цифр (-123): " + sumDigits(-123) + "\n";
output.value += "1.9. Найкоротше слово серед різних елементів ([4, 'два', 2, 'три']): " + findShortestWordAmongMixedElements([4, 'два', 2, 'три']) + "\n";
output.value += "1.10. Найменше число серед різних елементів ([4, 'два', 2, 'три']): " + findSmallestNumberAmongMixedElements([4, 'два', 2, 'три']) + "\n";
output.value += "1.11. Остача від ділення (10 % 3): " + modulo(10, 3) + "\n";
output.value += "1.12. Відображення рядка ('abcdefg', 3): " + reverseChunks('abcdefg', 3) + "\n";
output.value += "1.13. Унікальне число ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]): " + findUniqueNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) + "\n";
}