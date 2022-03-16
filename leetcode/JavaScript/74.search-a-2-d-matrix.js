/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function(matrix, target) {
    if(!matrix || !Array.isArray(matrix[0])) {
        return false;
    }
    let row = matrix.length;
    let column = matrix[0].length;
    let left = 0;
    let right = row * column - 1;
    while(left <= right) {
        let midIndex = Math.floor((left + right) / 2);
        let midValue = matrix[Math.floor(midIndex / column)][Math.floor(midIndex % column)];
        if(midValue === target) {
            return true;
        } else if (midValue > target) {
            right = midIndex - 1;
        } else {
            left = midIndex + 1;
        }
    }
    return false;
};
// @lc code=end

