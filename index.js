
let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];
const cellules = document.querySelectorAll(".case");
const size_of_square = 4;
let play = true;
let codewinner = 0;
let playIndex = 0;
let playerIndexConcat = 0;
 
//for click user
cellules.forEach((element, index) => {
    element.addEventListener("click", () => {
        // determine la cellule cliquée.
        let colonne = index % size_of_square;
        let ligne = (index - colonne) / size_of_square;
        playIndex = index;
        playerIndexConcat += index;
        // si play est à false on arrete. 
        // sinon si play est à true mais qu"on a déjà cliqué sur une cellule alors on met un message d'avertissement et on sort.
        // sinon on continue
        if (play == false ) {
          return;
        }else if(play == true && board[ligne][colonne] != 0){
            document.getElementById("winner").innerText = "All ready cliqued..";
            return;
        }
        else {
            document.getElementById("winner").innerText = "who will win... you or computer ?";
            board[ligne][colonne] = 1;
            //on ajoute la couleur du joueur
            element.classList.add("j1couleur");
            checkIfWinOrTie(ligne, colonne);
            setTimeout(() => {
            computer();
        }, 500);
       }
    });
});

 async function computer() {
    let arr = [];
    for (let lin = 0; lin < board.length; lin++) {
        for (let col = 0; col < board[lin].length; col++) {
            const element = board[lin][col];
            if (element == 0) {
                let indice =  await calculIndicesDisponibles(lin, col);
                arr.push(indice);
            }
        }
    }
    
    let rand =  await randomCell(arr, playIndex, playerIndexConcat, board);
    // A place de rand il faut une IA.
    
    let colonne = rand % size_of_square;
    let ligne = (rand - colonne) / size_of_square;
    if (board[ligne][colonne] == 0 && play == true) {
        board[ligne][colonne] = -1;
        cellules[rand].classList.add("j2couleur");
        checkIfWinOrTie(ligne, colonne);
    }
 }

function checkIfWinOrTie(ligne, colonne) {
    let cpt = 0;
    let sumligne = 0;
    let sumcolonne = 0;
    let sumleftdiagonale = 0;
    let sumrightdiagonale = 0;
    //on recupere la taille du tableau -1 pour matcher les indices
    let sizeBoard = board.length - 1;
    for (let i = 0; i < board.length; i++) {
        sumligne += board[ligne][i];
        sumcolonne += board[i][colonne];
        sumleftdiagonale += board[i][i];
        sumrightdiagonale += board[i][sizeBoard - i];
        if (sumligne == size_of_square || sumcolonne == size_of_square
            || sumleftdiagonale == size_of_square || sumrightdiagonale == size_of_square) {
            for (let index = 0; index < size_of_square; index++) {
                if (sumligne == size_of_square) {
                    cellules[calculIndicesDisponibles(ligne, index)].classList.add("cellwingreen");
                } else if (sumcolonne == size_of_square) {
                    cellules[calculIndicesDisponibles(index, colonne)].classList.add("cellwingreen");
                }
                else if (sumleftdiagonale == size_of_square) {
                    cellules[calculIndicesDisponibles(index, index)].classList.add("cellwingreen");
                }
                else if (sumrightdiagonale == size_of_square) {
                    cellules[calculIndicesDisponibles(index, sizeBoard - index)].classList.add("cellwingreen");
                }
            }
            codewinner = 1;
            document.getElementById("winner").innerText = "You Win";
            play = false;
            return;
        } else if (sumligne == -size_of_square || sumcolonne == -size_of_square
            || sumleftdiagonale == -size_of_square || sumrightdiagonale == -size_of_square) {
            for (let index = 0; index < size_of_square; index++) {
                if (sumligne == -size_of_square) {
                    cellules[calculIndicesDisponibles(ligne, index)].classList.add("cellwinpink");
                } else if (sumcolonne == -size_of_square) {
                    cellules[calculIndicesDisponibles(index, colonne)].classList.add("cellwinpink");
                }
                else if (sumleftdiagonale == -size_of_square) {
                    cellules[calculIndicesDisponibles(index, index)].classList.add("cellwinpink");
                }
                else if (sumrightdiagonale == -size_of_square) {
                    cellules[calculIndicesDisponibles(index, sizeBoard - index)].classList.add("cellwinpink");
                }
            }
            codewinner = -1;
            document.getElementById("winner").innerText = "Computer win";
            play = false;
            return;
        } else {
            for (let y = 0; y < board[i].length; y++) {
                const element = board[i][y];
                if (element == 0) {
                    cpt += 1;
                }
            }
        }
    }
    if (cpt == 0) {
        codewinner = 0 ;
        document.getElementById("winner").innerText = "Tie game";
        play = false;
        return;
    }
}

function randomCell(arr, pindex, pindexConcat, board){
      
    const randNumber = new ComputerNumber(arr, pindex, pindexConcat, board);
     
    return randNumber.getNumber();
}

function calculIndicesDisponibles(ligne, colonne) {
    return (ligne * size_of_square) + colonne;
}



// pour restart....
const btn = document.getElementById("restart");
btn.addEventListener("click", () => {
     board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    play = true;
    playIndex = 0;
    playerIndexConcat = 0;
    document.getElementById("winner").innerText = "who will win... you or computer ?";
    cellules.forEach((element) => { element.classList.remove("j1couleur", "j2couleur", "cellwingreen", "cellwinpink"); });
});
