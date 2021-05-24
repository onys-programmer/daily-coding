export default function popToResult (target, stack, result) {
  if(target === stack[stack.length-1]) {
    result.push(stack.pop());
  } else return;
}
