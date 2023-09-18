class Animal {
    constructor(name, paws) {
        this.name = name;
        this.paws = paws;
    }

    correr() {
        document
            .getElementById("output")
            .innerHTML = this.name + "\n é um animal e está correndo.";
        console.log(`${this.name}  é um animal e está correndo`);
    }
}
class Cachorro extends Animal {
    constructor(name) {
        super(name, 4);
    }
}

class Humano extends Animal {
    constructor(name) {
        super(name, 2);
    }
}

class Cadeira {
    constructor(name, paws) {
        this.name = name;
        this.paws = paws;
    }

    correr() {
        document
            .getElementById("output")
            .innerHTML = this.name + "\n é uma cadeira, não pode correr.";
        console.log("${this.name} é uma cadeira, não pode correr");
    }
}

function criaObjeto() {
    let name = document
        .getElementById("nameIn")
        .value;
    let paws = parseInt(document.getElementById("pawsIn").value);

    if (paws === 2) {
        return new Humano(name);
    } else if (paws === 4) {
        let respira = prompt("Respira?");
        if (respira === "sim" || respira === "Sim" || respira === "SIM" || respira === "s" || respira === "S") {
            return new Cachorro(name);
        }
        return new Cadeira(name);
    } else if (paws === 3) {
        return new Cadeira(name);
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
            }}