function Animal(nome){
    this.nome = nome;
}
function Gato(nome,cor,kilo){
    this.cor = cor
    this.kilo = kilo

    this.getKilo = function(){
        return kilo;
    }

    this.Come = function(){
        this.kilo = kilo * 1.1;
    }
    this.infoGato = function(){
        console.log("meu nome é " + this.nome + " tenho a cor " + this.cor + " e peso " + this.kilo + " kilos")
    }
    this.infoGatoComido = function(){
        console.log("meu nome é " + this.nome + " tenho a cor " + this.cor + " e depois de comer agora peso " + this.kilo + " kilos")
    }


    Animal.call(this,nome)
}
function Tricolor(nome){
    this.Come = function(){
        this.kilo = kilo * 1.2;
    }
    Gato.call(this,nome,"Tricolor",13)
}
function Frajola(nome){
    this.Come = function(){
        this.kilo = kilo * 1.3;
    }
    Gato.call(this,nome,"Frajola",9)
}



const gato1 = new Gato("Xanin","Preto",10);
const gato2 = new Tricolor("Mansa");
const gato3 = new Frajola("Malhado");

console.log("Gato Preto")
console.log(" ")
gato1.infoGato();
gato1.Come();
gato1.infoGatoComido();

console.log(" ")
console.log("Gato TRICOLOR")
console.log(" ")
gato2.infoGato();
gato2.Come();
gato2.infoGatoComido();

console.log(" ")
console.log("Gato FRAJOLA")
console.log(" ")
gato3.infoGato();
gato3.Come();
gato3.infoGatoComido();
