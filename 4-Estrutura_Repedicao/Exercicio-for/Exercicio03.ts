const password: number = 12345;
const input: number = 12345;

//Teriamos que colocar uma extensão para conseguir usar o prompt, mas no caso foi criado uma solução mais pratica!

for(let i: number = 0; i < 3; i++){
  if(password != input){
    console.log("Senha invalida!");
  }else {
    console.log("Senha valida!")
    break
  }
}
