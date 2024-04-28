//A classe é sempre um molde/projeto para o objeto cachorro
class Caes {
    public nome: string; //Atributo
    public peso: number; //Atributo 
    public corOlhos: string; //Atributo
    public idade: number; //Atributo

    public falar(){
        //Metodo falar
    }

    public andar(){
        //Metodo andar
    }

    public comer(){
        //Metodo comer
        if(this.peso >= 2){
            return console.log("Comendo...")
        }else if(this.peso > 2 && this.peso <= 15){
            return console.log("Comendo... Comendo...")
        }else {
            return console.log("Comendo... Comendo... Comendo...")
        }
        
    }

    public dormir(){
        //Metodo dormir
    }
}


//Inicializando a classe
const cachorro1 = new Caes();
//Populando os atributos
cachorro1.nome = "Jorge"
cachorro1.peso = 25
cachorro1.corOlhos = "preto"
cachorro1.idade = 4 
//Chamando o método
cachorro1.comer();

const cachorro2 = new Caes();
cachorro2.nome = "Speed"
cachorro2.peso = 15
cachorro2.corOlhos = "branco"
cachorro2.idade = 14 
cachorro1.comer();

const cachorro3 = new Caes();
cachorro3.nome = "Xuxa"
cachorro3.peso = 5
cachorro3.corOlhos = "marron"
cachorro3.idade = 6 
cachorro1.comer();