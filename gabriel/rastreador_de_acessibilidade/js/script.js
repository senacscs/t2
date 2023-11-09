const shortcutKeys={
	"p": "principal",
	"h": "pagina-inicial",
	"s": "sobre",
	"a": "avaliacoes",
	"l": "solicitar",
	"c": "contato"
}
let linkElements={};
for(let shortcutKey in shortcutKeys) {
	let elementId=shortcutKeys[shortcutKey];
	let element=document.getElementById(elementId);
	element.innerHTML+=`<span class="link-shortcut-key"> (alt+${shortcutKey})</span>
	`
	linkElements[shortcutKey]=element;
}
document.addEventListener("keydown", (evt) => {
	let key=evt.key;
	if(evt.altKey) {
		if(linkElements.hasOwnProperty(key)) {
			let elementToClick=linkElements[key];
			elementToClick.click();
			evt.preventDefault();
		}
	}
});