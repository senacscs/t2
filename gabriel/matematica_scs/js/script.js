let elementsWithKey=document.querySelectorAll("[data-shortcut-key]");
elementsWithKey.forEach((element) => {
	let elementKey=element.getAttribute("data-shortcut-key");
	element.innerHTML+=`
		<span class="shortcut-key visually-hidden">(alt+${elementKey})</span>
	`;
});
document.addEventListener("keydown", (evt) => {
	if(evt.altKey) {
			evt.preventDefault();
		elementsWithKey.forEach((element) => {
			let elementKey=element.getAttribute("data-shortcut-key");
			if(evt.key===elementKey) {
				element.click();
			}
		});
	}
});