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
    let node = root;
    const pValue = p.val;
    const qValue = q.val;

    while(node){
        let parentV = node.val;
        if(pValue > parentV && qValue > parentV) node = node.right;
        else if(pValue < parentV && qValue < parentV) node = node.left;
        else return node;
    }
    return null;
};