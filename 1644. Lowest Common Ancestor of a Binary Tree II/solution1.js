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
    let foundP = false;
    let foundQ = false;

    function dfs(node) {
        if (!node) return null;

        let left = dfs(node.left);
        let right = dfs(node.right);

        if (node === p) {
            foundP = true;
            return node;
        }
        if (node === q) {
            foundQ = true;
            return node;
        }

        if (left && right) return node;

        return left || right;
    }

    let lca = dfs(root);

    return foundP && foundQ ? lca : null;
};