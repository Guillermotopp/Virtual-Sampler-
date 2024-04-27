function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio ).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


    for (let contador = 0; contador < listaDeTeclas.length; contador++ ){
            const tecla= listaDeTeclas[contador];
            const instrumento = tecla.classList[1];
            
            const idAudio = `#sonido_${instrumento}`;
            console.log(idAudio);
            
                tecla.onclick = function(){
                    playSonido(idAudio);
                }; 
            tecla.onKeyDown = function(evento){
                console.log(evento.code == 'Space');
                tecla.classList.add('activa')
                if (evento.code === 'Space' || evento.code === 'Enter'){
                    tecla.classList.add('activa');
                }
                console.log((evento.code === 'Space' || evento.code === 'Enter'))

            };
            tecla.onKeyUp = function(){
                tecla.classList.remove('activa')
            }
        
    }

