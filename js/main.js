const cursorDiv = document.querySelector('#cursorDiv');
const cursorShadow = document.querySelector('#cursorDivShadow');

let targetX = 0;
let targetY = 0;
const delay = 0.2;
const delayS = 0.05;

document.addEventListener('mousemove', (event) => {
    targetX = event.clientX - 2;
    targetY = event.clientY - 2;
});

function actualizarPosicion() {

    const rectMiDiv = cursorDiv.getBoundingClientRect();
    const rectShadow = cursorShadow.getBoundingClientRect();

    const currentX = rectMiDiv.left;
    const currentY = rectMiDiv.top;

    const shadowX = rectShadow.left;
    const shadowY = rectShadow.top;

    const diffX = targetX - currentX;
    const diffY = targetY - currentY;

    const diffShadowX = targetX - shadowX;
    const diffShadowY = targetY - shadowY;

    cursorShadow.style.left = shadowX + diffShadowX * delayS + 'px';
    cursorShadow.style.top = shadowY + diffShadowY * delayS + 'px';

    
    cursorDiv.style.left = currentX + diffX * delay + 'px';
    cursorDiv.style.top = currentY + diffY * delay + 'px';

    requestAnimationFrame(actualizarPosicion);
}

actualizarPosicion();
