'use strict'

function mudarCor(){
    const nomeCor = document.getElementById('cores').value;
    let cor = 'FFFFFF'

    if (nomeCor == 'azul'){
        cor = '8ecae6';
    }
    else if (nomeCor == 'vermelho'){
        cor = 'd62839';
    }
    else if (nomeCor == 'verde'){
        cor = 'b5e48c';
    }
    else if (nomeCor == 'amarelo'){
        cor = 'ffd60a';
    }

    document.documentElement.style.setProperty('--bg-color', `#${cor}`);
}

document.getElementById('cores').addEventListener('change', mudarCor);