/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    if(!Array.isArray(nums) || nums.length === 0) {
        return result;
    }
    subsetsHelper([], 0);
    function subsetsHelper(curArray, index) {
        if(index === nums.length) {
            result.push(curArray);
            return;
        }
        curArray.push(nums[index]);
        subsetsHelper([].concat(curArray), index + 1);
        curArray.pop();
        subsetsHelper([].concat(curArray), index + 1);
    }
    return result;
};

subsets([1,2,3]);



