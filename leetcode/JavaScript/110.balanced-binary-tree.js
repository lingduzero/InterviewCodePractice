/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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

var getHeight = function(root) {
    if(root === null) {
        return 0;
    }
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}
var isBalanced = function(root) {
    if(root === null) {
        return true;
    }
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    if(Math.abs(leftHeight - rightHeight) > 1) {
        return false;
    }

    return isBalanced(root.left) && isBalanced(root.right)
};



