test('Crane Game', () => {
  function solution(board, moves) {
    let count = 0;
    let stacks = [];
    let basket = [0];
    
    for(let j = 0; j < board.length; j++) {
      let stack = [];
      for(let i = board.length-1; i >= 0; i--) {
        stack.unshift(board[i][j]);
      }
      stacks.push(stack);
    }
    
    console.log(stacks);

    // stacks에 0 빼기
    stacks.forEach(function(item) {
      while(item[0] === 0) {
        item.shift();
      }
    });

    // 크레인 작동
    moves.forEach(function(i) {
      if(stacks[i-1].splice().shift() !== 0) {
        let idx = i-1;
        let picked = stacks[idx].shift();
        console.log("picked:"+picked);
        if(picked !== undefined) {
          basket.unshift(picked);
          console.log("basket:"+basket);
        }
        
        // 터지기
        if(basket[0] === basket[1]) {
          basket.shift();
          basket.shift();
          console.log("터졌다! 남은 것은: " + basket);
          count += 2;
        }
      }
    });

    return count;
  }

  expect(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4])).toBe(4);
});

// 게임 화면 N x N, 위 크레인, 오른쪽 바구니
// 아래에서부터 차곡차곡 쌓임
// 같은 모양 인형 두개가 바구니에 연속해서 쌓이게 되면 터짐
// 인형 없는 곳에서 크레인 작동시키면 아무것도 안 일어남
// 터트려진 인형의 개수 return
// board 각 칸 0-100
// 5 <= N <=30
// 1 <= move.length <= 1000
// 1 <= moves[i] <= N