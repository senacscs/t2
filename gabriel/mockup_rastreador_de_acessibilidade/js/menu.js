class MenuButton {
	constructor(button, options) {
		this.settings = {
			checkable: "none",
			wrap: "true",
		}
		for(let setting in options) {
			if(options.hasOwnProperty(setting)) {
				this.settings[setting]=options[setting];
			}
		}
		this.button=button;
		this.button.setAttribute("aria-haspopup", "menu");
		this.button.setAttribute("aria-expanded", "false");
		this.button.innerHTML+=`
			<span class="menu-indicator" aria-hidden="true"> &#x25be;</span>
		`;
		this.menuId=this.button.getAttribute("data-menu-id");
		this.menu=document.getElementById(this.menuId);
		this.menu.setAttribute("role", "menu");
		this.menu.hidden=true;
		this.menuItems=this.menu.querySelectorAll("button");
		this.firstItem=this.menuItems[0];
		this.lastItem=this.menuItems[this.menuItems.length-1]
		const focusPrev=function(currentItem) {
			const move=function(elem) {
				if(elem.previousElementSibling) {
					elem=elem.previousElementSibling;
				}
				else if(this.settings["wrap"]==="true") {
					elem=this.lastItem;
				}
				return elem;
			}.bind(this);
			let newElem=move(currentItem);
			while(newElem.disabled) {
				newElem=move(newElem);
			}
			newElem.focus();
		}.bind(this);
		const focusNext=function(currentItem) {
			const move=function(elem) {
				if(elem.nextElementSibling) {
					elem=elem.nextElementSibling;
				}
				else if(this.settings["wrap"]==="true") {
					elem=this.firstItem;
				}
				return elem;
			}.bind(this);
			let newElem=move(currentItem);
			while(newElem.disabled) {
				newElem=move(newElem);
			}
			newElem.focus();
		}.bind(this);
		this.menuItems.forEach(function(menuItem) {
			if(this.settings["checkable"]=="one") {
				menuItem.setAttribute("role", "menuitemradio");
			}
			else if(this.settings["checkable"]=="many") {
				menuItem.setAttribute("role", "menuitemcheckbox");
			}
			else {
				menuItem.setAttribute("role", "menuitem");
			}
			menuItem.setAttribute("tabindex", "-1");
			menuItem.addEventListener("keydown", function(evt) {
				if(evt.key=="ArrowDown") {
					evt.preventDefault();
					focusNext(menuItem);
				}
				if(evt.key=="ArrowUp") {
					evt.preventDefault();
					focusPrev(menuItem);
				}
				if(evt.key=="Home") {
					this.firstItem.focus();
				}
				if(evt.key=="End") {
					this.lastItem.focus();
				}
				if(evt.key=="Escape"||evt.key=="Tab") {
					this.toggle();
				}
				if(evt.key=="Escape") {
					evt.preventDefault();
					this.button.focus();
				}
			}.bind(this));
			menuItem.addEventListener("click", function(evt) {
				this.choose(menuItem);
				this.close();
				this.button.focus();
			}.bind(this));
		}.bind(this));
		this.button.addEventListener("click", this.toggle.bind(this));
		this.button.addEventListener("keydown", function(evt) {
			if(evt.key=="ArrowDown") {
				if(this.menu.hidden) {
					this.open();
				}
				else {
					this.menu.querySelector(":not([disabled])").focus();
				}
			}
			if(evt.key=="ArrowUp") {
				if(!this.menu.hidden) {
					this.close();
				}
			}
		}.bind(this));
		this.listeners=[];
	}
	open() {
		this.button.setAttribute("aria-expanded", "true");
		this.menu.hidden=false;
		let checkedItem;
		if(this.settings.checkable=="one") {
			 checkedItem=this.menu.querySelector("[aria-checked='true']");
		}
		if(checkedItem) {
			checkedItem.focus();
		}
		else {
			this.menu.querySelector(":not([disabled])").focus();
		}
		this.outsideClick=function(evt) {
			if(this.menu.contains(evt.target)&&this.button.contains(evt.target)) {
				this.close();
				document.removeEventListener("click", this.outsideClick.bind(this));
			}
		}.bind(this);
		document.addEventListener("click", this.outsideClick.bind(this));
		this._fire("open");
	}
	close() {
		this.button.setAttribute("aria-expanded", "false");
		this.menu.hidden=true;
		this._fire("close");
	}
	toggle() {
		let isExpanded=this.button.getAttribute("aria-expanded")==="true";
		return isExpanded?this.close():this.open();
	}
	choose(choice) {
		if(this.settings["checkable"]=="one") {
			this.menuItems.forEach(function(menuItem) {
				if(menuItem.getAttribute("aria-checked")==="true") {
					menuItem.removeAttribute("aria-checked");
					let checkMark=menuItem.querySelector("span.check-mark");
					menuItem.removeChild(checkMark);
				}
			});
			choice.setAttribute("aria-checked", "true");
			choice.innerHTML=`
				<span class="check-mark" aria-hidden="true"> &check;</span>
			`+choice.innerHTML;
		}
		else if(this.settings["checkable"]=="many") {
			let isChecked=choice.getAttribute("aria-checked")==="true"||false;
			choice.setAttribute("aria-checked", !isChecked);
			if(choice.getAttribute("aria-checked")==="true") {
				choice.innerHTML=`
					<span class="check-mark" aria-hidden="true">&check;</span>
				`+choice.innerHTML;
			}
			else {
				let checkMark=choice.querySelector("span.check-mark");
				choice.removeChild(checkMark);
			}
		}
		this._fire("choose", choice);
	}
	_fire(type, data) {
		let listeners=this.listeners[type];
		this.listeners.forEach(function(listener) {
			listener(data);
		});
	}
	on(type, handler) {
		if(typeof this.listeners[type]==="undefined") {
			this.listeners[type]=[];
		}
		this.listeners[type].push(handler);
	}
	off(type, handler) {
		let handlerIndex=this.listeners[type].indexOf(handler);
		if(index!=-1) {
			this.listeners[type].splice(index, 1);
		}
	}
}
let accountBtn=document.getElementById("account-btn");
let accountMenuButton=new MenuButton(accountBtn);