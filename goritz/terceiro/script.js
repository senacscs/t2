function irParaPrincipal() {
    window.location.href = "main.html";
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    let posY = 0;
    let directionY = 1;
    const speed = 0.3;  // Velocidade do movimento
    const amplitude = 10; // Amplitude do movimento, controla o quanto sobe e desce

    function float() {
        posY += directionY * speed;

        if (posY >= amplitude || posY <= -amplitude) {
            directionY *= -1;  // Inverte a direção vertical ao atingir a amplitude
        }

        container.style.transform = `translateY(${posY}px)`;

        requestAnimationFrame(float);
    }

    float();
});
