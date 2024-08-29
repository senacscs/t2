async function login(e) {
	e.preventDefault();
	try {
		const loginURL = "http://http://blind-center.com.br:8000/login/"
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		const fetchInfo = {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				"accept": "application/json"
			},
			body: JSON.stringify({username, password})
		}
		const loginResponse = await fetch(loginURL, fetchInfo);
		const loginResult = await loginResponse.json();
		localStorage.setItem("token", loginResult.token);
		localStorage.setItem("userId", loginResult.userId);
		location.href = "../index.html";
	}
	catch (error) {
		alert(error.message);
	}
}
document.getElementById("login-form").addEventListener("submit", login);