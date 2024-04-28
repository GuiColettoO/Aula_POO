class HelloWorld {
    sayHello() { // Metodo
        return console.log("Hello World!");
    }
}

const instance = new HelloWorld();
console.log(instance.sayHello());