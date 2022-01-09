function sortedFrequency(arr, target) {
  let start = 0;
  let mid;
  let end = arr.length-1;

  let firtstIndex = getFirstIndex(arr, target, start, mid, end);
  let lastIndex = getLastIndex(arr, target, start, mid, end);

  return lastIndex - firtstIndex + 1 ? lastIndex - firtstIndex + 1 : - 1;
}

function getFirstIndex(arr, target, start, mid, end) {
  let index;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      if (arr[mid - 1] === target) {
        end = mid - 1;
      } else if (arr[mid - 1] < target || arr[mid - 1] === undefined) {
        index = mid;
        break;
      }
    }
  }

  return index;
}

function getLastIndex(arr, target, start, mid, end) {
  let index;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      if (arr[mid + 1] === target) {
        start = mid + 1;
      } else if (arr[mid + 1] > target || arr[mid + 1] === undefined) {
        index = mid;
        break;
      }
    }
  }

  return index;
}
