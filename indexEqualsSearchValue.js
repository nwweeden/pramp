function indexEqualsValueSearch(arr) {
  
  let left = 0;
  let right = arr.length - 1;
  
  let lowest = -1
  
  
  while(left <= right){
    //console.log('left is', left, 'right is', right)
    let mid = Math.round((left + right) / 2);
    
    //console.log('mid is', mid)
    
    if (arr[mid] === mid && ((mid === 0) || arr[mid - 1] < (mid - 1))){
        return mid;
    }
    else if (arr[mid] < mid){
      left = mid + 1;
    }
    
    else {
      right = mid - 1;
    }
  }
  
  return lowest
}