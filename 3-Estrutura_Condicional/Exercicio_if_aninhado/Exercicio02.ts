const num1: number = 40;
const num2: number = 20;
const num3: number = 20;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(`O ${num1} é o maior número`);
  } else {
    console.log(`O ${num3} é o maior número`);
  }
} else {
  if (num2 > num3) {
    console.log(`O ${num2} é o maior número`);
  } else {
    console.log(`O ${num3} é o maior número`);
  }
}
