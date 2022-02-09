function getMinTrips(weights) {
  // chose 2 or choose 3 with same weight
  // ideally you should always choose 3 if possible -> gives min trips
  // he can only deliver SAME WEIGHT packages -> makes problem much easier
  // what do they mean if it's not possible to deliver all of them??

  // create a map where keys = weights & values = number of packages with weights
  // iterate through the keys
    // while key.value >= 3
      // trips  += 1
      // value  -= 3
    // while key.value > 0
      // trips  += 1
      // value  -= 2


  let map = new Map();
  for (let weight of weights) {
    if (map.has(weight)) {
      map.set(weight, map.get(weight) + 1)
    } else {
      map.set(weight, 1)
    }
  }

  let trips = 0;
  map.forEach((value, key, map) => {
    trips += (value / 3) >> 0;
    value -= ((value / 3) >> 0) * 3

    if (value > 0) {
      trips += ((value / 2) >> 0) || 1;
      value -= (((value / 2) >> 0) || 1) * 2
    }
  })

  return trips ?? -1;
}

console.assert(getMinTrips([2,4,6,6,4,2,4]) === 3)
console.assert(getMinTrips([2,2,4,6,6,4,2,4]) === 3)
console.assert(getMinTrips([2,2,4,6,6,2,4,2,4]) === 4)
console.assert(getMinTrips(
  [2,2,4,6,6,2,4,2,2,4]
  ) === 4
)
console.assert(getMinTrips( // six 2's, three 4's, two 6's
  [2,2,4,6,6,2,4,2,2,2,4]
  ) === 4
)