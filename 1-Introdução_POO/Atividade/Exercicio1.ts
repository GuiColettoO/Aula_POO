class Produto {
    public identificação: number;
    public codigoPeca: number;
    public precoUnitarioPeca: number;
    public qtdVendida: number;

    public comissaoVendas(){
        const comissao = (this.precoUnitarioPeca * this.qtdVendida) * 0.5;
        return console.log(`Sua comissão é de R$ ${comissao.toFixed(2)}`);
    }
}

const produto1 = new Produto();
produto1.identificação = 1;
produto1.codigoPeca = 1;
produto1.precoUnitarioPeca = 2.50;
produto1.qtdVendida = 10;
produto1.comissaoVendas();