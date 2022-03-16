/*
 * @lc app=leetcode id=658 lang=javascript
 *
 * [658] Find K Closest Elements
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    if(!Array.isArray(arr) || arr.length === 0 || k === 0 || k > arr.length) {
        return arr;
    }
    let start = 0, end = arr.length - 1;
    while(start < end) {
        let mid = parseInt((start + end) / 2);
        if(x - arr[mid] > arr[mid + k] - x) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return arr.slice(start, start + k);
};
// @lc code=end

