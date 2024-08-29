const companiesList = document.getElementById("companies");
async function getCompanies() {
	const companiesUrl = "http://localhost:8000/companies/";
	const fetchInfo = {
		method: "get",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
		}
	}
	const companiesResponse = await fetch(companiesUrl, fetchInfo);
	const companies = await companiesResponse.json();
	let HTMLContent = "";
	companies["results"].forEach((company) => {
		const companyHTMLContent = `
			<li>
				<a href="../company/index.html?id=${company.id}&name=${company.name}">${company.name}</a>
			</li>
		`;
		HTMLContent += companyHTMLContent;
	});
	companiesList.innerHTML = HTMLContent;
}

getCompanies();