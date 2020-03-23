/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(!Array.isArray(nums) || nums.length <= 1) {
        return;
    }

    let insertPosition = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[insertPosition++] = nums[i]
        }
    }

    while(insertPosition < nums.length) {
        nums[insertPosition++] = 0;
    }
    return;
};
// @lc code=end

