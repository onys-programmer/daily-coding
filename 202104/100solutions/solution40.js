function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let onBridge = [];
  let bridgeWeight = 0;
  
  for(let i = 0; i < bridge_length; i++) {
      onBridge.push(0);
  }
  
  onBridge.unShift(truck_weights.shift());
  onBridge.pop();
  
  bridgeWeight += truck_weights.shift();
  time++;
  
  while(bridgeWeight) {
      bridgeWeight -= onBridge.pop();
      if(truck_weights[0] + bridgeWeight <= weight) {
          onBridge.unShift(truck_weights.shift());
          bridgeWeight+=truck_weights.shift();
      }
      time++;
  }
  return time;
}
