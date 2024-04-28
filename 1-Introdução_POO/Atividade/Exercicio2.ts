class BalancoTrimestra {
    gastoJaneiro:number = 15000;
    gastoFevereiro:number = 23000;
    gastoMarco:number = 17000;

    gastosTrimestre = this.gastoJaneiro + this.gastoFevereiro + this.gastoMarco;
    mediaMensal = (this.gastoJaneiro + this.gastoFevereiro + this.gastoMarco) / 3;
    

}

const teste = new BalancoTrimestra();
console.log(teste.gastosTrimestre);
console.log(`Sua média mensal foi de R$ ${teste.mediaMensal.toFixed(2)}`);