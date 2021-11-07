import solution from './index.js';

test('solution', () => {
  let input = [8,4,3,6,8,7,5,2,1];
  expect(solution(input)).toBe('+\n-');

  input = [5,1,2,5,3,4];
  expect(solution(input)).toBe("NO");
});

// 1부터 n까지의 수를 스택에 넣었다가 뽑아 늘어놓음으로써, 하나의 수열을 만들 수 있다.
// 이 때 스택에 push하는 순서는 반드시 오름차순을 지키도록 한다고 하자. 
// 임의의 수열이 주어졌을 때 스택을 이용해 그 수열을 만들 수 있는지 없는지, 
// 있다면 어떤 순서로 push와 pop을 수행해야 하는지 알아낼 수 있다.

// targets = [4,3,6,8,7,5,2,1];
// resource = [1,2,3,4,5,6,7,8];
// stack= [];
// result = [];

// target: 4 -> targets[0]
// stack마지막게 4야? 아니면 stack에 1234 + -> target일 때까지
// resource == [5,6,7,8]
// stack == [1,2,3,4]
// 맞으면 4 빼내

// target: 3
// 3 빼내

// target: 6
// stack마지막게 6이야? 아니면 stack에 56 +
// 맞으면 6 빼내

// 12534일때
// target: 1
// stack에 1+
// 1 빼내

// target: 2
// stack에 2+
// 2 빼내

// target: 5
// stack에 345+
// 5 빼내

// target: 3
// stack 마지막게 3이 아닌데 stack에 넣을 3이 없어
// 혹은 stack 마지막게 3이 아닌데 stack에 3이 이미 있어