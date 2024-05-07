function calcularMulta(anuidade: number, mesPagamento: number): number {
  const taxaJuros = 0.05;
  let mesesEmAtraso: number;


  switch (mesPagamento) {
    case 1:
      mesesEmAtraso = 0;
      break;
    case 2:
      mesesEmAtraso = 1;
      break;
    case 3:
      mesesEmAtraso = 2;
      break;
    case 4:
      mesesEmAtraso = 3;
      break;
    case 5:
      mesesEmAtraso = 4;
      break;
    case 6:
      mesesEmAtraso = 5;
      break;
    case 7:
      mesesEmAtraso = 6;
      break;
    case 8:
      mesesEmAtraso = 7;
      break;
    case 9:
      mesesEmAtraso = 8;
      break;
    case 10:
      mesesEmAtraso = 9;
      break;
    case 11:
      mesesEmAtraso = 10;
      break;
    case 12:
      mesesEmAtraso = 11;
      break;
    default:
      throw new Error("Mês de pagamento deve ser entre 1 e 12");
  }

  const valorComMulta = anuidade * Math.pow(1 + taxaJuros, mesesEmAtraso);

  return valorComMulta;
}

const anuidade = 100;
for (let mes = 1; mes <= 12; mes++) {
  const valorMulta = calcularMulta(anuidade, mes);
  console.log(`O valor da multa para uma anuidade paga no mês ${mes} é de R$${valorMulta.toFixed(2)}`);
}
