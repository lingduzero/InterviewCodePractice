/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!Array.isArray(nums) || nums.length === 0) {
        return -1;
    }
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        let mid = parseInt((start + end) / 2);
        if(nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};
// @lc code=end

