
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
          console.log(
            "player cliqued => " ,this.#playerIndex, 
            " concat => ",  this.#playerIndexConcat, 
          " board=> ",   this.#board, 
          " arr=> ", this.#arr);
        //  les diag valent 30 pts
        
        let rdn =this.#arr[Math.floor(Math.random() * this.#arr.length)];
        console.log("rdn ", rdn)
        return rdn;
        }

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

      async getZ(){
        max = 0;
        choix = 0;
              for (let lin = 0; lin < this.#board.length; lin++) {
                for (let col = 0; col < this.#board[lin].length; col++) {
                    const element = this.#board[lin][col];
                    if (element == 0) {
                      gain = 0
                      cpBoard = this.#board;
                      for(let i = 0; i<=1000;i++){
                        
                      }
                    }
                }
            }
      }
         
}
  