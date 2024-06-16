
function atualizarTempo(){
    var display = document.querySelector('.number-hora');
    var agora =  new Date();
    var hora = corrigirHorario(agora.getHours());
    var minutos = corrigirHorario(agora.getMinutes());
    var segundos = corrigirHorario(agora.getSeconds());
    var horaCompleta = `${hora}:${minutos}:${segundos}`;
    display.innerHTML = horaCompleta;
    var saudacao = document.querySelector('.saudacao');

    
    if(hora <= 11){
        saudacao.textContent = 'Bom dia, já agradeceu a Deus pelo seu dia?'
    }else if(hora <= 18){
        saudacao.innerHTML = 'Boa tarde, já agradeceu a Deus pelo entardecer?'
    }else{
        saudacao.innerHTML = 'Boa noite, já agradeceu a Deus pelo anoitecer?'
    }

}
//chama antes a funcao para nao dar bug quando atualizar a funcao de 1 segundo
atualizarTempo()
//funcao que dita um intervalo de execução recebe a funcao e o tempo como parametro
setInterval(atualizarTempo, 1000)

//funcao para aparecer 12:01 e nao 12:1  fica melhor apresentavel
function corrigirHorario(numero){
if(numero < 10){
    numero = '0' + numero;
}
return numero;
}

