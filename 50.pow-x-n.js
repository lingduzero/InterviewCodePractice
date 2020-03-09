/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n < 0) {
        return 1 / myPowHelper(x, -n);
    } else {
        return myPowHelper(x, n);
    }
};

var myPowHelper = function(x, n) {
    if(n === 0) {
        return 1;
    }
    var half = myPowHelper(x, Math.floor(n / 2));
    return (n % 2) ? half * half * x : half * half;
}

