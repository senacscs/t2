async function signup(e) {
	e.preventDefault();
	try {
		const signupURL = "http://blind-center.com.br:8000/userprofiles/"
		const username = document.getElementById("username").value;
		const firstName = document.getElementById("first-name").value;
		const lastName = document.getElementById("last-name").value;
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		const password2 = document.getElementById("password2").value;
		const fetchInfo = {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				"accept": "application/json"
			},
			body: JSON.stringify({firstName, lastName, user: {username, email, password}})
		}
		if(password != password2) {
			alert("Você digitou duas senhas diferentes no campo de senha e confirmar senha. Digite sua senha novamente nos dois campos.");
			document.getElementById("password").focus();
			return;
		}
		const signupResponse = await fetch(signupURL, fetchInfo);
		const signupResult = await signupResponse.json();
		const userId = signupResult["user"]["id"];
		localStorage.setItem("userId", userId);
		location.href = "../code/index.html";
	}
	catch (error) {
		alert(error.message);
	}
}
document.getElementById("account-form").addEventListener("submit", signup);