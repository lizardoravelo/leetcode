/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
    let a = p, b = q;
    
    while (a !== b) {
        a = a ? a.parent : q;
        b = b ? b.parent : p;
    }
    
    return a;
};