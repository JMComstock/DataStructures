// Perfect Binary Tree O(log N) 
// Properties:
//  1. the total number of nodes double as you move down the tree
//  2. the number of nodes on the last level, is equal to the sum of all the other nodes + 1

// Full Binary Tree

function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
