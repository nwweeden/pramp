/**
 * In a Binary Search Tree (BST), an Inorder Successor of a node is defined as the node with the smallest key greater than the key of the input node (see examples below). Given a node inputNode in a BST, you’re asked to write a function findInOrderSuccessor that returns the Inorder Successor of inputNode. If inputNode has no Inorder Successor, return null.

Explain your solution and analyze its time and space complexities.
 */

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
  
  function _rightChild(node){
    if (!node.left) return node;
    else return _rightChild(node.left);
  }
  
  function _noRightChild(node){
    if (node === null) return null;
    if (node.parent.left === node) return node.parent;
    else return _noRightChild(node.parent)
  }

    if (inputNode.right){
    let result = _rightChild(inputNode.right);
    return result; 
  }
  else return _noRightChild(inputNode.parent);
}