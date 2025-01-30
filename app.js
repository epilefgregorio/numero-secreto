let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log (numeroSecreto);


//função com parâmetro
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.5; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

mensagemInicial(); 

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e 100` );
}



//função sem parâmetro
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', `Parabéns você acertou!`);

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa, parabéns você acertou de primeira!';

        let mensagemTentativas = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);

        alterarImg();

        exibirTextoNaTela('p', `${mensagemTentativas} O número secreto era o ${numeroSecreto}!!!`);

        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if(chute > numeroSecreto){
        exibirTextoNaTela('h1', 'O número secreto é menor :(');
        exibirTextoNaTela('p', 'Tente novamente.');

    }else{
        exibirTextoNaTela('h1','O secreto é maior :(');
        exibirTextoNaTela('p', 'Tente novamente.');
    }
    tentativas++;
    limparCampo();
 }


//função com retorno de informações
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;

    if(quantidadeDeElementos == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
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
    mensagemInicial();
    console.log (numeroSecreto);
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}
function alterarImg(){
    const img = document.getElementById('imagemCJ');
    img.src = 'img2.png';
}



// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';