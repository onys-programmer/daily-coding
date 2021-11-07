function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    console.log(`currentVal : ${currentVal}`);
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log(`the original arr is ${arr}`);
      console.log(`${arr[j+1]} has replaced to ${arr[j]}!`);
      arr[j+1] = arr[j];
      console.log(`now, the arr is ${arr}`);
    }
    console.log(`${arr[j+1]} has replaced to currentVal:${currentVal}!`);
    arr[j+1] = currentVal;
    console.log(arr);
  }
  return arr;
}

insertionSort([2,1,9,76,4]);

function insertionSort2(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    console.log(`currentVal : ${currentVal}`);
    for(var j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
      console.log(`the original arr is ${arr}`);
      console.log(`${arr[j]} has replaced to ${arr[j+1]}!`);
      console.log(`${arr[j+1]} has replaced to currentVal:${currentVal}!`);
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
      console.log(`now, the arr is ${arr}`);
    }
    console.log(arr);
  }
  return arr;
}

insertionSort2([2,1,9,76,4]);

function quickSort(arr, left = 0, right = arr.length - 1) {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right) // 3
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);  
  }
  return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  
  // pivot이 항상 첫번째 요소인걸 확정합니다.
  let pivot = arr[start];
  let swapIdx = start;
  
  for(let i = start + 1; i <= end; i++) {
    if(pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  
  // pivot을 start에서 swapPoint로 옮깁니다.
  swap(arr, start, swapIdx);
  return swapIdx;
}

quickSort([2,1,9,76,4]);
