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

class Gato extends Animal {
	constructor(nome) {
		super(nome, 4);
	}
	miar() {
document.getElementById("mostrar").innerHTML=this.nome+" está miando...";
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
	}
	else if (patas === 4) {
		let respira = prompt("Este animal respira?");
		if (respira === "sim" || respira === "Sim" || respira === "SIM" || respira === "s" || respira === "S") {
			let ronrona=prompt("Este animal ronrona?");
			if (ronrona === "sim" || ronrona === "Sim" || ronrona === "SIM" || ronrona === "s" || ronrona === "S") {
				return new Gato(nome);
			}
			else {
				return new Cachorro(nome);
			}
		}
	else {
		return new Cadeira(nome);
	}
}
	else if (patas === 3) {
		return new Cadeira(nome);
	}
	else {
		return null;
	}
}

const criar = (event) => {
	let obj = criaObjeto();
	if (obj === null) {
		console.log("Para patas é 2 ou 4 apenas");
	} else {
		if(obj instanceof Gato) {
			obj.miar();
		}
		else {
		obj.correr();
	}
}

	event.preventDefault();
}
let form=document.getElementById("animalForm");
animalForm.addEventListener("submit", criar);