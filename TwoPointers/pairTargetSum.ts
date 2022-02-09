
/**
 * Given an array of sorted numbers and a target sum,
 * find a pair in the array whose sum is equal to the given target.
 *
 * @param nums
 * @param target
 */
function search(nums: number[], target: number): number[] {

  // loop through
    // check left value
    // get the target right value (target - left)
    // if we find a right value smaller than target
      // increment left
    // else if equal to?
      // return [left, right]
    // else if left and right meet
      // throw error (no solution)
    // else
      // throw error (wrong nums input)

  for (let left = 0, right = nums.length - 1; left < right; ) {
    let leftValue = nums[left]
    let rightValue = nums[right]
    let rightTarget = target - leftValue
    if (rightValue === rightTarget) {
      return [left, right]
    } else if (rightValue < rightTarget) {
      left++;
    } else if (rightValue > rightTarget) {
      right--;
    }
  }

  throw new Error('no solution')
}

function searchWithIndex(nums: number[], target: number, left?: number, right?: number): number[][] {
  left = left ?? 0
  right = right ?? nums.length - 1
  let output = [];

  while (left < right) {
    let leftValue = nums[left]
    let rightValue = nums[right]
    let rightTarget = target - leftValue
    if (rightValue === rightTarget) {
      output.push([left, right])
      left++; right --;
    } else if (rightValue < rightTarget) {
      left++;
    } else if (rightValue > rightTarget) {
      right--;
    } else {
      throw new Error('no solution')
    }
  }

  return output
}

// console.log(search([1,2,3,4,6], 6))
// console.log(search([2,5,9,11], 11))
console.assert(JSON.stringify(search([1,2,3,4,6], 6)) === JSON.stringify([1,3]))
console.assert(JSON.stringify(search([2,5,9,11], 11)) === JSON.stringify([0,2]))

module.exports = {
  search,
  searchWithIndex
}