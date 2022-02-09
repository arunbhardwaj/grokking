function findMaxSum(stockPrice, k) {

  // have a sliding window from 0 to k
  let startIndex = findStartingIndex(stockPrice, k, 0);
  let max = findMax(stockPrice, k, 0)
  let kWindowUniqueValues = generateMap(stockPrice, k, startIndex)

  for (let i = startIndex; i < stockPrice.length - k + 1; i++) {
    let currentMax = max;
    if (isDuplicate(stockPrice, i, i+k, kWindowUniqueValues)) {
      let newStartIndex = kWindowUniqueValues.get(stockPrice[i+k+1])

      // bc there could be a duplicates in the new window now.
      newStartIndex = findStartingIndex(stockPrice, k, newStartIndex)

      kWindowUniqueValues = generateMap(stockPrice, k, newStartIndex)
      currentMax = findMax(stockPrice, k, newStartIndex)
    } else {
      currentMax = currentMax + stockPrice[i + k + 1] - stockPrice[i]
    }

    max = Math.max(max, currentMax)
  }

  return max;

}

function isDuplicate(stockPrice, startingIndex, index, dict) {
  // checks new Value for duplicate given index of new value and map of unique values
  return (dict.has(stockPrice[index]) && dict.get(stockPrice[index]) !== startingIndex) ? true : false
}

function findStartingIndex(stockPrice, k, startIndex) {
  // figure out if there is a duplicate within the initial k range and return the new starting index
  let dict = new Map();
  for (let i = startIndex; i <= startIndex + k; i++) {
    if (dict.has(stockPrice[i])) {
      return dict.get(stockPrice[i])
    } else {
      dict.set(stockPrice[i], i)
    }
  }
  return startIndex
}

function findMax(stockPrice, k, start) {
  let max = 0
  for (let i = start; i < start + k; i++) {
    max += stockPrice[i]
  }

  return max;
}

function generateMap(stockPrice, k, startIndex) {
  let map = new Map();
  for (let i = startIndex; i < startIndex + k; i++) {
    if (map.has(stockPrice[i])) {
      throw new Error('found a duplicate when there should not be one')
    } else {
      map.set(stockPrice[i], i)
    }
  }

  return map
}