class Conta {
    public numero: number;
    public nome: string;
    public saldo: number;
    public limite: number;

    public Sacar(saque: number){
        if(this.saldo > saque){
            const novoSaldo: number = this.saldo - saque;
            this.saldo = novoSaldo;
            return console.log(`Saque efetuado! \n seu saldo atual é de R$ ${novoSaldo.toFixed(2)}`)
        }
        else{
            return console.log("Saque não efetuado!");
        }
    }

    public Depositar(deposito: number){
        this.saldo = this.saldo + deposito
        return console.log(`Seu saldo é de R$ ${this.saldo.toFixed(2)} `);
    } //Métodos

    public ConsultarNomeDoTitular(){} //Métodos
    public ConsultarSaldo(){} //Métodos

    public TransferirValorParaOutraConta(destino: Conta, valor: number){
        this.saldo = this.saldo - valor;
        destino.saldo = destino.saldo + valor
    } //Métodos

    public SaberTipoConta(){} //Métodos
}

const minhaConta = new Conta();
minhaConta.nome = "Jorge";
minhaConta.saldo = 1500;

const meuSonho = new Conta();
meuSonho.saldo = 1000000;

console.log(`Saldo minha conta: R$ ${minhaConta.saldo}`);
console.log(`Saldo meu sonho: R$ ${meuSonho.saldo}`);

const conta1 = new Conta();
conta1.nome = "Jorge";
conta1.saldo = 1500;

const conta2 = new Conta();
conta2.nome = "Jorge";
conta2.saldo = 1500;

conta1.TransferirValorParaOutraConta(conta2, 500);