class Animal {
    constructor(nome, patas) {
        this.nome = nome;
        this.patas = patas;
    }

    correr() {
        document.getElementById("mostrar").innerHTML = this.nome + " está correndo";
        console.log(`${this.nome} está correndo`);
    }

    rastejar() {
        document.getElementById("show").innerHTML = this.nome + " está rastejando";
        console.log("${this.nome} está rastejando");
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

class Cobra extends Animal {
    constructor(nome) {
        super(nome, 0)
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

class Corda {
    constructor(nome, patas) {
        this.nome = nome;
        this.patas = patas;
    }

    rastejar() {
        document.getElementById("show").innerHTML = this.nome + " é uma corda, não pode rastejar";
        console.log("${this.nome} é uma corda, não pode rastejar");
    }
}

function criaObjeto() {
    let nome = document.getElementById("nomeInput").value;
    let patas = parseInt(document.getElementById("patasInput").value);


    if (patas === 0) {
        let respira = prompt("Respira?");
        if (respira === "sim" || respira === "Sim" || respira === "SIM" || respira === "s" || respira === "S") {
            return new Cobra(nome);
        }
        return new Corda(nome);

    } else if (patas === 2) {
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
        console.log("Para patas é 0, 2 ou 4 apenas");
    } else if (obj === Corda || obj === Cobra) {
        obj.rastejar();
    } else {
        obj.correr();
    }
}


