let listaSorteados = []
let numerolimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})


}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1' , 'Jogo do número secreto');
    exibirTextoNaTela('p' , 'Escolha um numero de 1 a 10');

}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1' , 'Acertou');
    
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero com ${tentativas} ${palavraTentativas}`;

        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela ('p' , 'O numero secreto é menor');
        } else{
            exibirTextoNaTela ('p' , 'O numero secreto é maior');
        }
        tentativas++
        
    }

}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numerolimite + 1);
    let quantidadeLista = listaSorteados.length;

    if(quantidadeLista == numerolimite){
        listaSorteados = []

    }
    if(listaSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}