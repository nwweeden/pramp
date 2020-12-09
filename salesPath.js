/**
 * The car manufacturer Honda holds their distribution system in the form of a tree (not necessarily binary). The root is the company itself, and every node in the tree represents a car distributor that receives cars from the parent node and ships them to its children nodes. The leaf nodes are car dealerships that sell cars direct to consumers. In addition, every node holds an integer that is the cost of shipping a car to it.

Take for example the tree below:
 */

 /**
tree - not binary

      0
     / \
    4   9
   / \
  5   1
 
=> 2


 - create a helper function
 - recursively sum each branch
  - base case = no children
    - checking to see if less than min (if so swap)
    
    
minCost= 5

_helper(0, 0)
  _helper(4, 0)
    _helper(5, 4) => minCost(9, inifinite);
    _helper(1, 4) => minCost(5, 9);
  _helper(9, 0) => minCost(5,9)

*/

function getCheapestCost(rootNode) {
  
  let minCost = Infinity;
  
  function _helper(node, sum){
    if(node.children.length === 0){
      minCost = Math.min(sum + node.cost, minCost)
      return;
    }
    for (let child of node.children){
      _helper(child, sum + node.cost);
    }
    
  }
  _helper(rootNode, rootNode.cost)
  
  return minCost;

}

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/ 

// Constructor to create a new Node
class Node {
  constructor(cost, children = []){
   this.cost = cost;
   this.children = children; 
  }
}


let root = new Node(0);
let node1 = new Node(5);
let node2 = new Node(4);
let node3 = new Node(3);
let node4 = new Node(2);
let node5 = new Node(1);
let node6 = new Node(1);
let node7 = new Node(0);
let node8 = new Node(10);
let node9 = new Node(6);
let node10 = new Node(1);
let node11 = new Node(5);

//console.log(node1);
//console.log(Node(0))


root.children = [node1, node3, node9];
node1.children = [node2];
node3.children = [node4, node7];     
node4.children = [node5];
node5.children = [node6]; 
node7.children = [node8];    
node9.children = [node10, node11];  

//console.log(root.cost);


console.log(getCheapestCost(root))