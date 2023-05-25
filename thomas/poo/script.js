class Animal {
    constructor(nome, patas) {
        this.nome = nome;
        this.patas = patas;
    }
    
    correr() {
        document.getElementById("mostrar").innerHTML = this.nome + " está correndo";
        console.log(`${this.nome} está correndo`);
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
        console.log(`${this.nome} é uma cadeira, não pode correr`);
    }
}

class Peixe extends Animal {
    constructor(nome) {
        super(nome, 0);
    }

    correr() {
        document.getElementById("mostrar").innerHTML = this.nome + " está nadando";
        console.log(`${this.nome} está nadando`);
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
    } else if (patas === 0) {
        return new Peixe(nome);
    } else {
        return null;
    }
}

function criar() {
    let obj = criaObjeto();
    if (obj === null) {
        console.log("Para patas é 2, 4 ou 0 apenas");
    } else {
        obj.correr();
    }
}

