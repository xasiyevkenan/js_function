//Part 1
function calculateSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

const sum = calculateSum([12, 23, 31, 44, 12]);
console.log(sum);

//Part 2
let counter = 0;
while (counter < 5) {
  counter++;
  console.log(counter);
}

//Part 3
do {
  counter--;
  console.log(counter);
} while (counter > 0);

//Part 4
function evaluateGrade(number) {
  if (number >= 60) {
    return "Passed";
  }

  return "Fail";
}

console.log(evaluateGrade(65));
console.log(evaluateGrade(17));
console.log(evaluateGrade(60));
