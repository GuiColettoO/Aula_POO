const num1: number = 20;
const num2: number = 10;
const operador: string = "-";

switch(operador){
  case "+" :
    console.log("O valor é " + (num1 + num2));
    break;
  case "-" :
    console.log("O valor é " + (num1 - num2));
    break;
  case "*" :
    console.log("O valor é " + (num1 * num2));
    break;
  case "/" :
    console.log("O valor é " + (num1 / num2));
    break;
  default:
    console.log("Valor inserido é invalido");
    break;
}
