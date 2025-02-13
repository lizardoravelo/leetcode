/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(!root) return null;

    const queue = [root];

    while(queue.length > 0){
        const levelSize = queue.length;
        let prevNode = null;


        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (prevNode) {
                prevNode.next = node;
            }
            prevNode = node;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        prevNode.next = null;
    }  
    return root;
};