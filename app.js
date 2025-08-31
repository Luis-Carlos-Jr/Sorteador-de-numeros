function sortear(){

    let qnt = parseInt(document.getElementById('quantidade').value);
    let minimo = parseInt(document.getElementById('de').value);
    let maximo = parseInt(document.getElementById('ate').value);

    if(minimo > maximo || isNaN(qnt) || qnt == 0 || isNaN(minimo) || minimo == 0 || isNaN(maximo) || maximo == 0 || qnt > maximo - minimo){
        alert('Valores inválidos');
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        return;
    }

    let numeros = [];
    let x;

    for (ind = 0; ind < qnt; ind++){
        x = numeroAleatorio(minimo, maximo);
        while(numeros.includes(x)){
            x = numeroAleatorio(minimo, maximo);
        }
        numeros.push(x);
    }

    let texto = document.getElementById('resultado');
    texto.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeros}</label>`;
    if(document.getElementById('btn-reiniciar').classList.contains('container__botao-desabilitado')){
        ativarReinicio();
    }
}

function numeroAleatorio (min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

function ativarReinicio(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    ativarReinicio();
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}