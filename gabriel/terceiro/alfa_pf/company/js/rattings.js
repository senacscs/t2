const rattingsList = document.getElementById("rattings");
document.title = `Avaliações de ${companyName} - Accessibling: dando voz à acessibilidade digital`;
async function setCompanyRattings(companyId) {
	const rattingsUrl = `http://blind-center.com.br:8000/rattings_list/?company=${companyId}`;
	const fetchInfo = {
		method: "get",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Authorization": "token " + token
		}
	}
	const rattingsResponse = await fetch(rattingsUrl, fetchInfo);
	const rattings = await rattingsResponse.json();
	let HTMLContent = "";
	rattings["results"].forEach((ratting) => {
		const rattingDate = ratting.date;
		const rattingHTMLContent = `
			<div class="ratting">
			<h2 class="ratting-title">${ratting.title}</h2>
			<p class="ratting-author-name">${ratting.author}</p>
			<p class="ratting-date">${rattingDate}</p>
			<p class="ratting-star">${ratting.star} estrela${ratting.star>1 ? "s" : ""}</p>
			<p class="ratting-text">${ratting.text}</p>
		`;
		HTMLContent += rattingHTMLContent;
	});
	rattingsList.innerHTML = HTMLContent;
}

setCompanyRattings(companyId);