let button = document.querySelector(".btn");
let mainGridClass;
button.addEventListener("click", 
function(){
    let container = document.querySelector(".ms_box_container");
    container.innerHTML = "";
    let userDifficulty = userInput();
    boxGen(userDifficulty);
    let box = document.querySelector("span");
    console.log(box)
    let bombs = gameBombs();
    // L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
    // con difficoltà 1 => tra 1 e 100
    // con difficoltà 2 => tra 1 e 81
    // con difficoltà 3 => tra 1 e 49
    function userInput(){
        let userCheck = false;
        let userChoice = parseInt(document.querySelector(".form-select").value);
        while(userCheck === false){
            let gameDifficulty = 0;
            switch(userChoice) {
                case 1:
                    gameDifficulty = 100;
                    mainGridClass = "easy";
                    break;
                case 2:
                    gameDifficulty = 81;
                    mainGridClass = "hard";
                    break;
                case 3:
                    gameDifficulty = 49;
                    mainGridClass = "crazy";
                    break
                default:
                    gameDifficulty = "errore";
                    throw "inserisci un numero tra 1 e 3!"
            }
            console.log(gameDifficulty);
            return gameDifficulty;
        }
    }
    function boxGen(userDifficulty){
        if(userDifficulty === 100){
            for(let i = 1;i <= userDifficulty; i++){
                // container.(`<div class="box size easy"><span>${i}</span></div>`);
                let newCell = document.createElement("div");
                newCell.innerHTML = `<span>${i}</span>`;
                newCell.classList.add("box");
                newCell.classList.add("size");
                newCell.classList.add("easy");
                container.append(newCell);
                newCell.addEventListener("click", onBoxClick);
            }
        } else if(userDifficulty === 81){
            for(let i = 1;i <= userDifficulty; i++){
                // container.(`<div class="box size easy"><span>${i}</span></div>`);
                let newCell = document.createElement("div");
                newCell.innerHTML = `<span>${i}</span>`;
                newCell.classList.add("box");
                newCell.classList.add("size");
                newCell.classList.add("hard");
                container.append(newCell);
                newCell.addEventListener("click", onBoxClick);
            }
        } else if(userDifficulty === 49){
            for(let i = 1;i <= userDifficulty; i++){
                // container.(`<div class="box size easy"><span>${i}</span></div>`);
                let newCell = document.createElement("div");
                newCell.innerHTML = `<span>${i}</span>`;
                newCell.classList.add("box");
                newCell.classList.add("size");
                newCell.classList.add("crazy");
                container.append(newCell);
                newCell.addEventListener("click", onBoxClick);
            }
        }
    }
    function gameBombs(){
        let bombs = [];
        while(bombs.length <= 16){
            let singleBomb = Math.floor(Math.random() * userDifficulty + 1);
            if(!bombs.includes(singleBomb)){
                bombs.push(singleBomb);
            }
        }
        return bombs;
    }

    function onBoxClick(){

    }
}
)

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
