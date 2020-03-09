/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return isValidBSTHelper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

function isValidBSTHelper(root, min, max) {
    if(root === null) {
        return true;
    }

    if(root.val <= min || root.val >= max) {
        return false;
    }

    return isValidBSTHelper(root.left, min, root.val) && 
    isValidBSTHelper(root.right, root.val, max);
}

