const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");
async function rateCompany(e) {
	try {
		const rateURL = "http://blind-center.com.br:8000/rattings/";
		const title = document.getElementById("title").value;
		const star = document.getElementById("star").value;
		const text = document.getElementById("text").value;
		const fetchInfo = {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "token " + token
			},
			body: JSON.stringify({title, star, text})
		}
		const rateResponse = await fetch(rateURL, fetchInfo);
		const rateResult = await rateResponse.json();
		if(rateResponse.status == 200) {
			location.href = "rated.html";
		}
	}
	catch (error) {
		alert(error.message);
	}
}