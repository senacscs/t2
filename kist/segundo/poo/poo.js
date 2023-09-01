class Animal {
    constructor(nome, patas) {
        this.nome = nome;
        this.patas = patas;
    }
    
    correr() {
        document.getElementById("mostrar").innerHTML = this.nome + " está dançando";
        console.log(`${this.nome} está dançando`);
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome, 4);
    }
}

class Humano extends Animal {
    constructor(nome) {
        super(nome, 2);
    }
} 

class Cadeira {
    constructor(nome, patas) {
        this.nome = nome;
        this.patas = patas;
    }

    correr() {
        document.getElementById("mostrar").innerHTML = this.nome + " é uma cadeira, não pode correr";
        console.log("${this.nome} é uma cadeira, não pode correr");
    }
}

function criaObjeto() {
    let nome = document.getElementById("nomeInput").value;
    let patas = parseInt(document.getElementById("patasInput").value);

    if (patas === 2) {
        return new Humano(nome);
    } else if (patas === 4) {
        let respira = prompt("Respira?");
        if (respira === "sim" || respira === "Sim" || respira === "SIM" || respira === "s" || respira === "S") {
            return new Cachorro(nome);
        }
        return new Cadeira(nome);
    } else if (patas === 3) {
        return new Cadeira(nome);
    } else {
        return null;
    }
}

function criar() {
    let obj = criaObjeto();
    if (obj === null) {
        console.log("Para patas é 2 ou 4 apenas");
    } else {
        obj.correr();
    }
}

