let altura: number = 180;
let peso: number = 104;
const massa: number = peso / altura ^ 2;

if(massa < 26){
    console.log("O seu Grau de Obesidade é: Normal!");
}else if(massa >= 26 && massa < 30){
    console.log("O seu Grau de Obesidade é: Obeso!")
}else{
    console.log("O seu Grau de Obesidade é: Obesidade Morbida!")
}