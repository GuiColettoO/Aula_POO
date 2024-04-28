
# Introdução a POO
Fatores importantes de POO: Entendimento do código, fácil manutenção, reaproveitamento de código, tempo e agilidade no desenvolvimento de um sistema. 
## Itens importantes em POO:

- Classes
- Objetos
- Atributos 
- Métodos
- Construtores

## Pilares do POO: 
- Métodos e Atributos
- Polimorfismo 
- Herança
- Classes Abstratas

# Classe
Classe é uma abstração que representa uma entidade do mundo real.
- Toda classe possui um nome.
- Possuem visibilidade (public, privada e protected) -- No TypeScrpit colocar apenas Class significa public.
- Possuem membros como: características e ações.
- Ver Exemplo de criação de classe no arquivo CriacaoDeClasse.ts

Por boa prática é sempre bom colocarmos o nome do arquivo com o nome da classe. Segue o exemplo no HelloWorld.ts e também faremos o nosso primeiro Hello World !.

Segue um exemplo mais complexo no arquivo Caes.ts

# Objetos

Os objetos são características definidas pelas classes. Neles é permitido instanciar objetos da classe para inicializar os atributos e invocar métodos.

- O objeto representa algo que existe, concreto.
- A classe é considerada como um modelo ou projeto de um objeto.

Exemplo: 

- Animal = Classe
- Coelho = Objetos
- Giraja = Objeto
- Cachoro = Objeto

# Atributos

Os atributos são propriedades de um objeto, também conhecidos como variáveis ou campos.

- Definem o estado de um objeto (podem sofrer alterações).

Exemplo de como criar e utilizar um atributo no arquivo Caes.ts.

# Métodos

Os métodos são ações ou procedimentos, onde podem interagir e se comunicar com outros objetos.

- A execução dessas ações se dá por através de mensagens.
- Envio de uma solicitação ao objeto para que seja efetuada a rotina desejada.
- Boas praticas: sempre usar nomes como verbos: voltar, correr, avançar, pesquisarNomes, resgatarValores...

Exemplo de como criar e utilizar um método no arquivo Caes.ts.

# Prática

Agora que você aprendeu os conceitos principais de POO vamos praticar!

Iremos criar um Sistema de Conta Bancária Simples:

Quais informações uma conta bancária possui ?

Aqui estão alguns exemplos:
- Número da conta
- Nome do titular da conta
- Saldo da conta
- Limite da conta

O que uma conta bancária faz ? 

Quais ações podemos fazer em uma conta bancária ?

- Sacar
- Depositar
- Consultar o nome do titular
- Consultar o saldo da conta
- Transferir um valor para outra conta
- Saber o tipo da conta

Com essas perguntas podemos criar a classe Conta.

Olhar exemplo na pasta Pratica_Conta_Bancaria -> Conta.ts e Test.ts

# Atividade
1) Escreva um programa em TypeScrpit para calcular o pagamento de comissão para vendedores de peças automotivas. Considerando que para cada peça vendida, o vendedor terá 5% de comissão. O programa deve ter os seguintes dados: 
- Identificação do vendendor
- Código da peça
- Preço Unitario da peça
- Quantidade vendida

2) Na empresa onde trabalhamos há uma tabela com o quanto foi gasto em cada mês. Para fechar o balanço do primeiro trimestre, precisamos somar o gasto, sabendo que em Janeiro, foram gastos R$15.000,00, em Fevereiro, R$ 23.000,00 e em Março R$17.000,00. Faça um programa que calcule e imprima o gasto total no trimestre.

Siga os passos abaixo:
- Crie uma classe chamada BalancoTrimestral com um bloco main (exemplo anterior)
- Dentro do main, declare uma variável numerica chamada gastosJaneiro e inicialize-a com R$ 15.000,00
- Crie também as variáveis gastosFevereiro e gastosMarco, inicializando-as com R$ 23.000,00 e R$ 17.000,00, respectivamente (utilize uma linha para cada declaração)
- Crie uma variável chamada gastosTrimestre e inicialize-a com a soma das outras 3 variáveis: int gastosTrimestre = gastosJaneiro + gastosFevereiro + gastosMarco
- Imprima a variável gastosTrimestre
- Adicione um código (sem alterar as linhas que já existem) para imprimir a média mensal de gastos, criando uma variável mediaMensal junto com uma mensagem. Para isso, concatene a String com valor utilizando a expressão “Valor da média mensal = “ + media mensal
