"use strict";
const se = require('./pairTargetSum').searchWithIndex;
const tripletSum = (arr) => {
    let output = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        try {
            let [one, two] = se(arr, -arr[i], i + 1);
            output.push([arr[i], arr[one], arr[two]]);
        }
        catch (err) {
            // err doesn't really matter here
        }
    }
    return output;
};
console.log(tripletSum([-3, 0, 1, 2, -1, 1, -2]));
