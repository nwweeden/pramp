/**
 * Given a root of a Binary Search Tree (BST) and a number num, implement an efficient function findLargestSmallerKey that finds the largest key in the tree that is smaller than num. If such a number doesn’t exist, return -1. Assume that all keys in the tree are nonnegative.

Analyze the time and space complexities of your solution.
 */

BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
  
	/**
	 - n: 30
			 9
			/ \
		 5   25
				/ \
			 16  40
	*/
		let max = -1;
		
		function _helper(node){
			if (!node) return;
			//console.log('node val', node.key)
			
			if (node.key < num){
				max = Math.max(max, node.key);
				_helper(node.right); 
			}
			
			else _helper(node.left);
			
			//else _helper(node.right); 
		}
		
		_helper(this.root);
		
		return max;
		
	}