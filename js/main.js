const miDiv = document.querySelector('#cursorDiv');

let targetX = 0;
let targetY = 0;
const delay = 0.2;

document.addEventListener('mousemove', (event) => {
    targetX = event.clientX - 20;
    targetY = event.clientY - 20;
});

function actualizarPosicion() {
    const rectMiDiv = miDiv.getBoundingClientRect();
    const currentX = rectMiDiv.left;
    const currentY = rectMiDiv.top;

    const diffX = targetX - currentX;
    const diffY = targetY - currentY;

    miDiv.style.left = currentX + diffX * delay + 'px';
    miDiv.style.top = currentY + diffY * delay + 'px';

    requestAnimationFrame(actualizarPosicion);
}

actualizarPosicion();