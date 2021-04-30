// test('dart game', () => {
//   let score = 0;
//   let digit = 0;
//   let prevs = [0];
//   let cur = 0;

//   const solution = (dartResult) => {
//     const s = dartResult.split("");
//     console.log("split:"+s); // ["1","S","2","D","*","3","T"]

//     s.forEach((v) => {
//       console.log("v:"+v);
//       if(Number.isInteger(+v)) {
//         digitHandler(v);
//         console.log("digitHandler excuted");
//       } else if(v === "S" || v === "D" || v === "T") {
//         powHandler(v);
//         console.log("powHandler excuted");
//       } else if(v === "*") {
//         starHandler(v);
//         console.log("starHandler excuted");
//       } else if(v === "#") {
//         sharpHandler(v);
//         console.log("sharpHandler excuted");
//       }
//       console.log(
//         `score: ${score},
//         digit: ${digit},
//         prevs: ${prevs},
//         cur: ${cur}`
//       )
//     })
//     return score;
//   }
  
//   const storeScore = () => {
//     score += cur;
//     prevs.push(cur);
//   }

//   const digitHandler = (v) => {
//     if(v === 0) {
//       cur = 10;
//     }
//     cur = +v;
//   }

//   const powHandler = (v) => {
//     if(v === "S") {
//       storeScore();
//     } else if(v === "D") {
//       cur = Math.pow(cur, 2);
//       storeScore();
//     } else if(v === "T") {
//       cur = Math.pow(cur, 3);
//       storeScore();
//     }
//   }

//   const starHandler = (v) => {
//     if(prevs.length !== 1) {
//       let prev = prevs[prevs.length-2];
//       console.log("prev: "+prev);
//       score -= prevs[prevs.length-1]+prevs[prevs.length-2];
//       cur = prev*2 + cur*2;
//       storeScore();
//     } else {
//       cur = cur*2;
//       storeScore();
//     }
//   }

//   const sharpHandler = (v) => {
//     cur = -v;
//     storeScore();
//   }

//   expect(solution("1S2D*3T")).toBe(37);
// });

// // 다트판에 3차례
// // 각 기회마다 0-10점
// // 점수와 함께 S,D,T -> 1,2,3제곱
// // *해당점수x2,직전점수x2 #점수-해당점수 
// // *첫번째에 나오면 첫번째만x2
// // *효과 중첩 가능
// // *효과 아차상과 중첩 가능
// // S,D,T는 점수마다 하나씩 존대
// // * #는 점수마다 하나만 존재 or 존재안할수도

    
//     // 1S2D*3T
//     // 배열로

//     // 1
//     // cur = 1
    
//     // S
//     // cur = cur^1
//     // score += cur
//     // prev = cur

//     // 2
//     // cur = 2

//     // D
//     // cur = cur^2
//     // score += cur
//     // prev = cur

//     // *
//     // score -= prev
//     // cur = prev*2 + cur*2
//     // score += cur
//     // prev = cur
    
//     // 3
//     // cur = 3

//     // T
//     // cur = cur^3
//     // score += cur
//     // prev = cur