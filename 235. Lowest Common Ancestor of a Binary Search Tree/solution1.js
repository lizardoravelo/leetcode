/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root.val === p.val) return p
    else if(root.val === q.val) return q;
    
    if(p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p,q);
    else if(p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p,q);
    else return root;
 };