describe('countZeroes', () => {
  function countZeroes(arr){
    let start = 0;
    let mid;
    let fin = arr.length - 1;
    
    while(start <= fin) {
        mid = Math.floor((start + fin)/2);
        if(arr[mid] === 1) { // 범위 줄이기
            start = mid + 1;
            if(start === arr.length - 1) return 0;
        } else if(arr[mid] === 0) {
            if(arr[mid-1] === 1) { // length 추출하기
                return arr.length - mid;
            } else { // 처음 0 찾기 위해 오른쪽 줄이기
                fin = mid - 1;
            }
        }
    }
    
    return arr.length;
  }

  it('returns the number of zeroes', () => {
    expect(countZeroes([1,1,1,0,0,0])).toBe(3);
  });
});

// function countZeroes(arr, left = 0, right = arr.length) {
//   if(arr.length === 0 || left === right) {
//     return 0;
//   } else {
//     let center = Math.floor((left + right)/2);
//     if(arr[center] === 0) {
//       return right - center + countZeroes(arr, left, center);
//     } else {
//       return countZeroes(arr, center + 1, right);
//     }
//   }
// }

// function countZeroes2(arr) {
//   let mid;
//   let start = 0;
//   let fin = arr.length;

//   while (start < fin) {
//     mid = Math.floor((start + fin)/2);
//     if(arr[mid] === 1) {
//       if(!arr[mid + 1]) return arr.length - mid - 1;
//       else start = mid + 1;
//     } else {
//       if (arr[mid - 1] === 1) return arr.length - mid;
//       else fin = mid;
//     }
//   }
//   return arr.length;
// }
