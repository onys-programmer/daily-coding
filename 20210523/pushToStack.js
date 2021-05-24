export default function pushToStack (target, resource, stack) {
  if(resource.some((e) => e === target)) {
    while(stack[stack.length - 1] !== target) {
      stack.push(resource.shift());
    }
  } else return;
}
