# Criando Métodos Simples

Métodos são conhecidos como funções, ações de execução ou procedimento (separação por blocos) que ajuda o design do sistema.

## Classe Conta
### Método sacar()
- Requisitos
  - recebe a quantidade a ser reitrada.
  - faz o cálculo do novo saldo.
  - informa ao usuário.

```
public sacar(quantidade: number) {
  const novoSaldo: number = this.saldo - quantidade;
  this.saldo = novoSaldo;
  console.log(`Saque realizado R$ %{novoSaldo.toFixed(2)}`)
}
```
### Método depositar()
- Requisitos:
  - recebe a quantidade a ser depositada.
  - faz o cálculo do novo saldo.
  - informa ao usuário o valor depositado.

```
public depositar(quantidade: number) {
  this.saldo = this.saldo + quantidade;
  this.saldo = novoSaldo;
  console.log(`Saque realizado R$ %{novoSaldo.toFixed(2)}`)
}
```

Olhar a classe Conta.ts

#### Vamos adicionar um novo requesito chamado Funcionario!

## Classe Funcionario

### Atributos:
- nome do Funcionario (String)
- departamento (String)
- salário (Number)
- data admissão (String)
- RG (String)

### Funcionalidades:
- Imprimir o nome do funcionario.
- Imprimir o salário do Funcionario.
- Aumentar o salário do funcionario.
- Calculo do ganho anual.

Olhar o arquivo Funcionário.ts

#### Métodos também podem retornar valores (ou objetos).

### Método Sacar()
 
 O método sacar() deveria retornar algum valor ?
 
```
public sacar(quantidade: number) {
  const novoSaldo: number = this.saldo - quantidade;
  this.saldo = novoSaldo;
  return console.log(`Saque realizado R$ %{novoSaldo.toFixed(2)}`)
}
```
Iremos ver alguns tipos de retorno:

Retorno de um valor do tipo boolean:

```
public sacar(quantidade: number): boolean {
  if(saldo < quantidade) {
    return false;
  } else {
      return true;
  }
}
```
No arquivo Conta.ts tera alguns exemplos de métodos com retorno, manipulação de objetos na memória e métodos avançados.

# Atividaddes

Crie a classe Bola e depois teste com outras classes

- Bola(material, formato, tamanho, cor)
    - Futebol(couro, redonda, 40cm, branca);
    - Tênis(tecido, redonda, 5cm, amarela);
    - Ping-Pong(pvc, redonda, 1.5cm, branca);
    - Futebol Americano(couro, oval, 50cm, marron);