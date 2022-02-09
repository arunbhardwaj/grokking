const squareSortedArray: (arr: number[]) => number[] = (arr: number[]) => {
  let left = 0
  let right = arr.length - 1
  let output: number[] = []
  let outputIndex = right;

  while (outputIndex >= 0) {
    if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      output[outputIndex] = arr[left]**2;
      left++
    } else {
      output[outputIndex] = arr[right]**2;
      right--
    }
    outputIndex--
  }

  return output;
}

// console.log(squareSortedArray([-2,-1,0,2,3]))
console.assert(JSON.stringify(squareSortedArray([-2,-1,0,2,3])) === JSON.stringify([0,1,4,4,9]));
console.assert(JSON.stringify(squareSortedArray([-3,-1,0,1,2])) === JSON.stringify([0,1,1,4,9]));