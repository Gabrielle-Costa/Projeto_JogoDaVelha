let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box-board");
let buttons = document.querySelectorAll(".buttons-players button");
let messageContainer = document.querySelector("#msg-final");
let messageText = document.querySelector("#msg-final p");
let secondPlayer;

//contador de jogadas
let player1 = 0;
let player2 = 0;

//adicionando evento de click nos boxes
for (let i = 0; i < boxes.length; i++) {

    //quando alguém clica no box
    boxes[i].addEventListener("click", function () {
        let el= checkEl(player1, player2);
 

        if (this.childNodes.length == 0) { //verifica se o box tem conteúdo
            let cloneEl = el.cloneNode(true); //clonar o conteúdo da variável
            this.appendChild(cloneEl);

            //contabilizar a jogada pra saber de quem será a vez
            if (player1 == player2) {
                player1++;
                if(secondPlayer == "player-ai"){
                    player2++;
                    computerPlay();
                }
            } else {
                player2++;
            }
            
            //confere quem venceu
            checkWinCondition();
        }



    });
}

// evento para ver se é contra IA ou segundo player
for(let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {
  
      secondPlayer = this.getAttribute('id');
  
      for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'none';
      }
  
      setTimeout(function() {
        let container = document.querySelector(".container-board");
        container.classList.remove("hide");
        let divScore = document.querySelector(".divScore");
        divScore.classList.remove("hide");
      }, 500);
  
    });
  
  }

//decide se quem clicou é x ou o e grava a informação no el
function checkEl(player1, player2){
    if (player1 == player2) {
        el = x;
    } else {
        el = o;
    }
    return el;
}

//confere quem venceu
function checkWinCondition(){

    let b1 = document.getElementById('box1');
    let b2 = document.getElementById('box2');
    let b3 = document.getElementById('box3');
    let b4 = document.getElementById('box4');
    let b5 = document.getElementById('box5');
    let b6 = document.getElementById('box6');
    let b7 = document.getElementById('box7');
    let b8 = document.getElementById('box8');
    let b9 = document.getElementById('box9');

    //sequencia de jogadas na horizontal
    if(b1.childNodes.length >0 && b2.childNodes.length >0 && b3.childNodes.length >0){
        
        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if(b1child =='x' && b2child == 'x' && b3child == 'x'){
            declareWinner("x");
        }else if(b1child =='o' && b2child == 'o' && b3child == 'o'){
            declareWinner("o");;
        }
    }

    if(b4.childNodes.length >0 && b5.childNodes.length >0 && b6.childNodes.length >0){
        
        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if(b4child =='x' && b5child == 'x' && b6child == 'x'){
            declareWinner("x");
        }else if(b4child =='o' && b5child == 'o' && b6child == 'o'){
            declareWinner("o");
        }
    }

    if(b7.childNodes.length >0 && b8.childNodes.length >0 && b9.childNodes.length >0){
        
        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b7child =='x' && b8child == 'x' && b9child == 'x'){
            declareWinner("x");
        }else if(b7child =='o' && b8child == 'o' && b9child == 'o'){
            declareWinner("o");
        }
    }

    //sequencia de jogadas na vertical
    if(b1.childNodes.length >0 && b4.childNodes.length >0 && b7.childNodes.length >0){
        
        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b1child =='x' && b4child == 'x' && b7child == 'x'){
            declareWinner("x");
        }else if(b1child =='o' && b4child == 'o' && b7child == 'o'){
            declareWinner("o");
        }
    }

    if(b2.childNodes.length >0 && b5.childNodes.length >0 && b8.childNodes.length >0){
        
        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if(b2child =='x' && b5child == 'x' && b8child == 'x'){
            declareWinner("x");
        }else if(b2child =='o' && b5child == 'o' && b8child == 'o'){
            declareWinner("o");
        }
    }

    if(b3.childNodes.length >0 && b6.childNodes.length >0 && b9.childNodes.length >0){
        
        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b3child =='x' && b6child == 'x' && b9child == 'x'){
            declareWinner("x");
        }else if(b3child =='o' && b6child == 'o' && b9child == 'o'){
            declareWinner("o");
        }
    }
    
    //sequencia de jogadas na diagonal
    if(b1.childNodes.length >0 && b5.childNodes.length >0 && b9.childNodes.length >0){
        
        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b1child =='x' && b5child == 'x' && b9child == 'x'){
            declareWinner("x");
        }else if(b1child =='o' && b5child == 'o' && b9child == 'o'){
            declareWinner("o");
        }
    }

    if(b3.childNodes.length >0 && b5.childNodes.length >0 && b7.childNodes.length >0){
        
        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b3child =='x' && b5child == 'x' && b7child == 'x'){
            declareWinner("x");
        }else if(b3child =='o' && b5child == 'o' && b7child == 'o'){
            declareWinner("o");
        }
    }

    //deu empate (velha)
    let counter = 0;
    for(let i=0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++;
        }
    }

    if(counter == 9){
        declareWinner("Deu Velha");
    }

}

function declareWinner(winner){
    let scoreboardX = document.getElementById('scored-1');
    let scoreboardO = document.getElementById('scored-2');
    let msg = '';

    if(winner == 'x'){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    }else if(winner =='o'){
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = "O jogador 2 venceu";
    }else{
        msg = "Deu Velha!"
    }

    //exibe mensagem
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    //exibe mensagem
    setTimeout(function(){
        messageContainer.classList.add("hide");
    }, 2000);

    //zerar as jogadas
    player1 = 0;
    player2 = 0;

    //limpar os boxes
    let boxesToRemove = document.querySelectorAll(".box-board div")
    for(let i =0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

function computerPlay() {

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;
            
    for(let i = 0; i < boxes.length; i++) {
  
      let randomNumber = Math.floor(Math.random() * 5);
  
      // só preenche o box que estiver vazio
      if(boxes[i].childNodes[0] == undefined) {  
        if(randomNumber <= 1) {
          boxes[i].appendChild(cloneO);
          counter++;
          break;
        }
      // contabilizar quantos box estão vazios
      } else {
        filled++;
      }
  
    }
  
    if(counter == 0 && filled < 9) { //chamando a função novamente - função recursiva
      computerPlay();
    }
  
  }