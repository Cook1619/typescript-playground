function add(n1: number, n2: number, result: boolean, phrase: string) {
  if (result) {
    console.log(`${phrase}${num1 + num2}`)
  }else {
    console.log('Only pass in numbers')
  }
}

const num1 = 5;
const num2 = 7.2;
const printResult = true;
const phrase = 'The result is: '

const result = add(num1, num2, printResult, phrase);
console.log(result);
