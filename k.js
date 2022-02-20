let msg = "hello from ks";
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
          ,this.#playerIndex, " concat => ", this.#playerIndexConcat, " boarc=> ", this.#board);
        //  les diag valent 30 pts
        
        let rdn =this.#arr[Math.floor(Math.random() * this.#arr.length)];
        return rdn;
        }
         
}
  