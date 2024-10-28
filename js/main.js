const cursorDiv = document.querySelector('#cursorDiv');
const cursorShadow = document.querySelector('#cursorDivShadow');
const terminalText = document.querySelector('#terminalText');
const terminal = document.querySelector('.terminal');

document.getElementById('terminalText').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        ejecutar();
    }
});

const openZX = () => {
    window.open('https://zxofficial.github.io/ZXPagesProject/', '_blank');
}
document.openZX = openZX;

const ejecutar = async() => {
    const text = document.querySelector('#terminalText').value.trim();
    if (text === 'start'){

        const whiteScreen = document.getElementById('whiteScreen');
        whiteScreen.style.opacity = 1;

        setTimeout(() => {
            document.querySelectorAll('body > *:not(.terminal):not(#whiteScreen)')
                .forEach(el => el.style.visibility = 'hidden');

            document.querySelectorAll('#portafolioGrid').forEach(el => {
                    el.style.visibility = 'visible';
            });

            document.querySelectorAll('.terminal').forEach(el => {
                el.style.zIndex = '6';
                el.style.marginRight = '20px';
                el.style.marginBottom = '20px';
            });

            document.querySelectorAll('#body').forEach(el => {
                el.style.backgroundColor = 'var(--colorB1)';
                el.style.cursor = 'default';
            });

            document.querySelectorAll('#cursorDiv').forEach(el => {
                el.style.backgroundColor = 'var(--colorW)';
                el.style.zIndex = '5';
            });


            cursorShadow.style.boxShadow = '0px 0px 10px 0px var(--colorB1)';
            whiteScreen.style.opacity = 0;
            terminalText.value = '';
            terminalText.placeholder = '//type help';
            terminal.style.position = 'fixed';
            terminal.style.right = 0;
            terminal.style.bottom = 0;
        }, 1000);
    } 
    else if (text === 'help') {
        terminalText.value = '';
        terminalText.placeholder = 
`// you can type:
- start
- github
- reload
- zx`;
    }
    else if (text === 'reload') {
        location.reload();
    }
    else if (text === 'zx') {
        terminalText.value = '';
        window.open('https://zxofficial.github.io/ZXPagesProject/', '_blank');
    }
    else if (text === 'github') {
        terminalText.value = '';
        window.open('https://github.com/gonzx77', '_blank');
    }
    else {
        terminalText.value = '';
        terminalText.placeholder = 'error: command not found';
    
        setTimeout(() => {
            terminalText.placeholder = '//type help';
        }, 3000);
    }
}
document.ejecutar = ejecutar;


setInterval(() => {
    cursorShadow.style.animation = 'flicker 2s';
    setTimeout(() => {
        cursorShadow.style.animation = 'none';
    }, 2000);
}, 10000);


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
