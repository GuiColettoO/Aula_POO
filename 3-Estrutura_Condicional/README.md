# Estruturas Condicionais

- Também conhecidas como **instruções de decisão**.
- Estrutura de decisão única.
- Forma mais simples da intrução **if**.
- O tipo resultante do teste será sempre um valor **boolean** (true ou false).

**Intrução if simples**

```
if(condição){
  instrução
}
```

**Intrução if testando uma condição(x > y)**

```
if(x > y){
  a();
  b();
}
c();
```

## Estrutaas Condicionais Instrução if/else

- Permite avaliar uma expressão como sendo **verdadeiro e falso**.
- Executa uma **ou** outra rotina (um comando ou bloco de comandos).

**Intrução if/else**

```
if(expressão booleana){
  //bloco do codigo 1
} else {
  //bloco do codigo 2
}
```

## Estruturas Condicionais Instrução else if

- Estrutura complementar ao **if/else**.
- Permite adicionar uma nova condição à estrutura de decisão.
- Tornam os testes exclusivos
- Não há limite para o uso da intrução else if.

**Intrução if/else com else if**

```
if(expressão booleana 1){
  //bloco do codigo 1
} else if(expressão booleana 2) {
  //bloco do codigo 2
} else {
  //bloco do codigo 2
}
```

### Exemplo Prático

Vamos criar um **trecho** de código de "controle" de estoque. Será necessário informara quantidade de itens de um determinado produtoe iremos verificar se a quantidade está suficiente, em alerta ou abaixo do ideal. Vamos considerar os seguintes requisitos: **Suficiente** - para quantidades superiores a 100; **Alerta** - para quantidades entre 100 e 50; **Abaixo do ideal** - para quantidades menores que 50.

**Ver exemplo na pasta Exemplo_Pratico > Exemplo_01.ts**

## Exércicio if/else:

1. Dado um número, verificar se ele é maior que 100. Se for, o algoritmo deve somar 150 a esse número. No final, imprimir o resultado da soma.

2. Dados dois números, verificar se a divisão do primeiro número pelo segundo é exata (o resto da divsão deve ser igual a 0). Se for, o algoritmo deve imprimir a mensagem "A divisão de (número 1) por (número 2) é exata".

3. Fazer um programa para determinar o grau de obesidade de uma pessoa com base no peso e altura. O grau de obesidade é determinado pelo índice de massa corpórea (massa = peso / altura²) definido pela tabela abaixo:
   | Massa Corpórea | Grau de obesidade |
   | --------------- | ----------------- |
   | < 26 | Normal |
   | >= 26 e < 30 | Obeso |
   | >= 30 | Obeso Mórbido |

**Exercicios resolvidos na pasta Exercicios_if_else**

## Estrturas Condicionais Operador ternário

- Recurso para tomada de decisão similar ao if/else.
- Codificado em apenas uma linha.
- Sempre avaliar uma expressão booleana.

**Operador ternário**

```
(expressão booleana) ? código 1 : código 2;
```

**Exemplos de uso: iniciar uma variável, retornar um valor, ou integrar um bloco de código...(legibilidade)**

#### Exemplo Prático

Vamos considerar uma estrutura de decisão simples, apenas para indicar se estamos na primeira ou na segunda quinzena de um mês.

**Operador ternário**

```
let numeroDias: number = //valor entre 1 e 3
console.log((numeroDias <= 15) ? "Primeira quinzena" : "Segunda quinzena");
```

## Estruturas Condicionais Instrução if aninhado

- Representa um bloco _if_ dentro de outro bloco _if_.
- O bloco if interno só será executado se a condição do bloco externo for verdadeira.

**Instrução if aninhado** -- Não há limite para o uso de if aninhado.

```
if(condição) {
  //código a ser executado
  if(condição) {
    //codigo a ser executado
  }
}
```

### Exemplo Prático

Vamos criar um techo de código para verificar se uma pessoa poderia ser doador de sangue de acordo com dois critérios: idade e peso. Será necessário informar idade e peso e o programa fará a verificação.

```
//Criando duas variáveis para idade e peso
const idade: number = 20;
const peso: number = 80;
//aplicando condição na idade e peso
if(idade >= 18){
  if( peso>50 ) {
    console.log("Você pode ser um doador de sangue!")
  }
}
```

### Exercicios - if aninhado

1. Considerando uma sentença condicional dentro de outra, escreva um programa que imprima uma mensagem caso o número digitado seja positivo ou negativo, e par ou ímpar.

2. Considerando o conceito de if aninhado, escreva um programa que leia 3 números e imprima o maior deles.

3. Escreva um programa que leia um número do teclado e imprima as seguintes frases:
   a) "O número é maior que 10" (caso o número digitado seja maior que 10)

b) “Você acertou!” e “O número é igual a 10” (caso o número digitado seja igual a 10)

c) “O número é menor que 10” (caso o número digitado seja menor que 10)

## Switch/Case

- switch - instrução condicional de diversos desvios.
- De acordo com o resultado da condição, pode-se executar um desvio entre os vários possíveis.
- Avalia o valor (literal) resultante de uma expressão ou variável (condição).
- Desvia a execução para um dos casos (palabra chave case).

```
switch (variavel ou valor)
{
  case valor1:
    //codigo 1
  break;
  case valor2:
    //codigo 2
  break;
}
```

- Execução com valores diferentes no mesmo case (aninhamento de cases)

```
switch (variavel ou valor)
{
  case valor1:
  case valor2:
  case valor3:
    //codigo 1
  break;
  case valor4:
  case valor5:
  case valor6:
    //codigo 2
  break;
}
```

- Default - utilizando para definir um fluxo alternativo para as instruções do switch.
- Caso o valor do switch não seja atendido por nenhum dos cases especificados, o operador default será executado.

```
switch (variavel ou valor)
{
  case valor1:
    //codigo 1
  break;
  case valor2:
    //codigo 1
  break;
  default:
    codigo 3
  break;
}
```

### Exemplo prático

Considere um programa que informa ao usuário o dia da semana a partir do número correspondente ao dia (1-Domingo, 2-Segunda, 3-Terça…) informado a partir de uma variável do tipo int (dia).

```
const dia: number = 6;
switch (dia)
{
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia da semana inválido")
    break;
}
```

## Exercicios - switch-case

1. Criar um programa para identificar se um mês digitado pelo usuário é de alta ou baixa temporada (considerar os seguintes meses como alta temporada: dezembro a fevereiro, junho e julho).

2. Crie um programa que simule uma calculadora simples capaz de realizar as operações básicas. O programa deve receber 3 dados: dois números e um caractere. Este caractere poderá ser '+', '-', ‘\*' ou '/' , e representarão a operação matemática que você deseja realizar entre os números.

3. Criar um programa para calcular o valor da multa a ser paga de anuidade de uma associação. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (com juros sobre juros). Por exemplo, uma associação de R$100 paga em janeiro, custa R$ 100; em fevereiro, custa R$105; em março, custa R$110,25; e, em dezembro, R$171,03.
