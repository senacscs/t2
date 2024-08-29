const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");
async function registerCompany(e) {
	e.preventDefault();
	try {
		const companyURL = "http://blind-center.com.br:8000/companies/"
		const name = document.getElementById("name").value;
		const description = document.getElementById("description").value;
		const fetchInfo = {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Token " + token
			},
			body: JSON.stringify({name, description})
		}
		const companyResponse = await fetch(companyURL, fetchInfo);
		const companyResult = await companyResponse.json();
	}
	catch (error) {
		alert(error.message);
	}
}
document.getElementById("company-form").addEventListener("submit", registerCompany);