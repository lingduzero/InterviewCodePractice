/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(!Array.isArray(nums) || nums.length === 0) {
        return [-1, -1];
    }

    let first = positionHelper(target, nums, 'first');
    let last = positionHelper(target, nums, 'last');
    return [first, last];
};

var positionHelper = function(target, nums, situation) {
    let start = 0;
    let end = nums.length - 1;
    let position = -1;
    while(start <= end) {
        let mid = start + parseInt((end - start) / 2);
        if(nums[mid] === target) {
            position = mid;
            if(situation === 'first'){
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else if(nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return position;
}


