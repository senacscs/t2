async function setCompanyGrade() {
	const gradeUrl = `http://localhost:8000/company_grade?company=${companyId}`;
	const gradeFetchInfo = {
		method: "get",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		}
	}
	const gradeResponse = await fetch(gradeUrl, gradeFetchInfo);
	const grade = await gradeResponse.text();
	const gradeInt = parseInt(grade);
	let gradeLevel;
	document.getElementById("ratting").innerHTML = `${grade} de 5 estrelas`;
}

setCompanyGrade();