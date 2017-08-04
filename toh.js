//until game is over
//show board
//ask for move until valid move
//make move
//loop

const readline = require('readline');


class Game {
  constructor(){
    this.stacks = [[3,2,1],[],[]];
  }

  run (callback){
    this.promptMove( function(s, e){
      const result = move(s, e).bind(this);
      if (!result) { console.log('failed');}
    });
  }
  print(){
    this.stacks.forEach( (stack) => { console.log(stack);});
  }

  isWon(){
    if(this.stacks[0].length === 0 ){
      if (this.stacks[1].length === 0 || this.stacks[2].length === 0){ return true; }
    }
    return false;
  }

  promptMove(callback){
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.print();
    rl.question('stack to move from?:', function(startIdx){
      rl.question('stack to move to?:', function(endIdx) {
          callback(startIdx, endIdx);
          rl.close();
      });
    });
  }

  isValidMove(startIdx, endIdx) {

    let start_stack = this.stacks[startIdx];
    let end_stack = this.stacks[endIdx];

    if ( [0,1,2].includes(parseInt(startIdx)) && [0,1,2].includes(parseInt(endIdx)) ) {
      if (start_stack.length > 0
        && (end_stack.length === 0 || start_stack[start_stack.length - 1] < end_stack[end_stack.length - 1]) ) {
        return true;
      } else { return false; }
    } else { return false; }
  }

  move(startIdx, endIdx) {
    let start_stack = this.stacks[startIdx];
    let end_stack = this.stacks[endIdx];

    if (this.isValidMove(startIdx, endIdx)) {
      end_stack.push(start_stack.pop());
      return true;
    } else {
      return false;
    }
  }


}

const game = new Game();
game.run(); // fail
// console.log(game.isValidMove('0', '2')); // pass
