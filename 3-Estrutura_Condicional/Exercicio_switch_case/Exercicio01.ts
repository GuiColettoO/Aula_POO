const mes: number = 10;

switch(mes){
  case 1:
  case 2:
  case 6:
  case 7:
  case 12:
    console.log("O mês escolhido é de alta temporada!")
    break;
  case 3:
  case 4:
  case 5:
  case 8:
  case 9:
  case 10:
  case 11:
    console.log("O mês escolhido não é de alta temporada!")
    break;
  default:
    console.log("Valor invalido!");
    break;
}
