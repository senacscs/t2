const token = localStorage.getItem("token");
if(!token) {
		window.href = "../login/index.html";
}
async function setCompanyData(companyId) {
	const companyUrl = `http://localhost:8000/companies/${companyId}/`;
	const fetchInfo = {
		method: "get",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Authorization": "token " + token
		}
	}
	const companyResponse = await fetch(companyUrl, fetchInfo);
	const company = await companyResponse.json();
	let companyName = company.name;
	document.getElementById("company-name").innerHTML = companyName;
	let companyDate = new Date(company.registrationDate);
	const currentDate = new Date();
	const difTime = Math.abs(currentDate - companyDate);
	const difDays = Math.floor(difTime / 1000 / 60 / 60 / 24);
	const difMonths = Math.floor(difDays / 30);
	const difYears = Math.floor(difMonths / 12);
	let difString;
	if (difYears != 0) {
		if (difYears > 1) {
			difString = "há " + difYears + "anos";
		}
		else {
			difString = "há 1 ano";
		}
	}
	else if (difMonths != 0) {
		if(difMonths > 1) {
			difString = "há " + difMonths + " meses";
		}
		else {
			difString = "há 1 mês";
		}
	}
	else if (difDays != 0) {
		if (difDays > 1) {
			difString = "há" + difDays + " dias";
		}
		else {
			difString = "há 1 dia";
		}
	}
	else {
		difString = "recentemente";
	}
	document.getElementById("time-ago-place").innerHTML = difString;
	document.getElementById("views-number").innerHTML = company.views;
	document.getElementById("rate-company-link").href = `rate_company.html?id=${companyId}`;
	const companyNavList = document.getElementById("company-tabs");
	const companyNavLinks = companyNavList.querySelectorAll("li a");
	companyNavLinks.forEach((companyNavLink) => {
		companyNavLink.href += `?id=${companyId}&name=${companyName}`;
	})
}

const search = location.search.substring(1);
const queryParams = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '", "').replace(/=/g, '": "') + '"}')
const companyId = queryParams.id;
const companyName = queryParams.name;
if (companyName) {
	document.title = companyName + " - Accessibling: dando voz à acessibilidade digital";
}
setCompanyData(companyId);