// // Elemento de botão voltar ao topo 
const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;
let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.opacity = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered ? "scale(1)" : "scale(0)";
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        isBackToTopRendered = true;
        alterStyles(isBackToTopRendered);
    } else {
        isBackToTopRendered = false;
        alterStyles(isBackToTopRendered);
    }
});


