/**
 * An H-tree is a geometric shape that consists of a repeating pattern resembles the letter “H”.

It can be constructed by starting with a line segment of arbitrary length, drawing two segments of the same length at right angles to the first through its endpoints, and continuing in the same vein, reducing (dividing) the length of the line segments drawn at each stage by √2.


Write a function drawHTree that constructs an H-tree, given its center (x and y coordinates), a starting length, and depth. Assume that the starting line is parallel to the X-axis.

Use the function drawLine provided to implement your algorithm. In a production code, a drawLine function would render a real line between two points. However, this is not a real production environment, so to make things easier, implement drawLine such that it simply prints its arguments (the print format is left to your discretion).

Analyze the time and space complexity of your algorithm. In your analysis, assume that drawLine's time and space complexities are constant, i.e. O(1).


 */

function drawLine(p1, p2){
	console.log([p1[0], p1[1]], [p2[0], p2[1]])
}

function drawHTree(center, length, depth){
 if (depth === 0) return;
 
 //Horizontal line:
 let hP1 = [center[0] + length/2, center[1]]
 let hP2 = [center[0] - length/2, center[1]]
 drawLine(hP1, hP2);
 //Vertical Right:
 let vRP1 = [center[0] + length/2, center[1] + length/2]
 let vRP2 = [center[0] + length/2, center[1] - length/2]
 drawLine(vRP1, vRP2);
 //Vertical Left:
 let vLP1 = [center[0] - length/2, center[1] + length/2]
 let vLP2 = [center[0] - length/2, center[1] - length/2]
 drawLine(vLP1, vLP2);
 
 drawHTree(vRP1, length/(Math.pow(2, 1/2)), depth - 1);
 drawHTree(vRP2, length/(Math.pow(2, 1/2)), depth - 1);
 drawHTree(vLP1, length/(Math.pow(2, 1/2)), depth - 1);
 drawHTree(vLP2, length/(Math.pow(2, 1/2)), depth - 1);
 
}
