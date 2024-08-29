//const userId = localStorage.getItem("userId");
const userId = 28;
async function sendCode(e) {
	e.preventDefault();
	const userCode = document.getElementById("code").value;
	try {
		const codeUrl = "http://blind-center.com.br:8000/authcode/";
		const fetchInfo = {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({code: userCode, user: userId})
		};
		const codeResponse = await fetch(codeUrl, fetchInfo);
		const codeResult = await codeResponse.text();
		if (codeResponse.status == 200) {
			location.href = "../login/index.html";
		}
		else if(codeResponse.status == 400) {
			alert("Código inválido");
		}
		else {
			alert("Erro interno no servidor ao validar o código.");
		}
	}
	catch (error) {
		alert(error.message);
	}
}
document.getElementById("code-form").addEventListener("submit", sendCode);