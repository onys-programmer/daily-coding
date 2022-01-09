function kakaocrane(board, moves) {
//뽑아오는 함수
//쌓는 함수
  let count = 0;
  const stack = [];
  function move (moves) {
    for (let i in moves) {
      for(let j= 0; j <board.length;j++) {
        if(board[i][j] != 0){
          stack.push(board[i][j])
          //board.pop(board[i][j])
        }
    }
      
    }
  }

  //주어진 것
  //board, moves
  //board.length => 순환할 때 한계값
  //stack.length => 무한

  //구해야 할 것
  //pop횟수
  //스택에 쌓인 애들이 앞뒤로 같은지 => stack[n] == stack[n+1]
  //스택의 마지막 값을 뭐 캐시에 저장한다던가 ㅋ
  
  //Process
  //JOBS = [pickUp, stacker, popCounter]
  function pickUp(moves) {
    const pickedUp = [];
    board.map()
      //Top doll be picked up(pop) 
      pickedUp = board[board.length][i];
    }

  }

  function stacker(pickedUp) {
    //pickedUp be pushed in stack
    //if stack[last] == pickedUp {pop();}
    //
  }
  //height = board.length;
  //moves[i] => board[height][i]
  //push to stack

  //moves
  //1. 


  //bomb => count +1 
  //stack.pop(stack[n])
  // stack.pop(stack[n+1])
  
  return 4;
}
test('kakaocrane', () => {
  const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
  const moves = [1,5,3,5,1,2,1,4];
  expect(kakaocrane(board, moves)).toBe(4);
});