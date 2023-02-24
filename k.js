 /*
max =0
choix = None

pour chaque coup de couleur
      Gain = 0
      Jouer ce coup
      Memoriser le plateau
      Repeter 1000 fois()
          Finir la partie aleatoirement
          Si couleur gagne
              gain = gain +1
          remettre le tableau memorisé
      Si gain > max
          max = gain
          choix = coup    
 */
class ComputerNumber {
    #arr;
    #playerIndex
    #playerIndexConcat = 0;
    #board = [[]];
    constructor(arr, playerIndex, playerIndexConcat, board) {
      this.#arr = arr;
      this.#playerIndex = playerIndex;
      this.#playerIndexConcat = playerIndexConcat ;
      this.#board = board;
    }
     getNumber(){
          console.log("player cliqued => "
          ,this.#playerIndex, " concat => ", 
          this.#playerIndexConcat, " boarc=> ", 
          this.#board, " arr=> ", this.#arr);
        //  les diag valent 30 pts
        
        let rdn =this.#arr[Math.floor(Math.random() * this.#arr.length)];
        console.log("rdn ", rdn)
        return rdn;
        }
         
}
  