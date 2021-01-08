/**
 * Many times, we need to re-implement basic functions without using any standard library functions already implemented. For example, when designing a chip that requires very little memory space.

In this question we’ll implement a function root that calculates the n’th root of a number. The function takes a nonnegative number x and a positive integer n, and returns the positive n’th root of x within an error of 0.001 (i.e. suppose the real root is y, then the error is: |y-root(x,n)| and must satisfy |y-root(x,n)| < 0.001).

Don’t be intimidated by the question. While there are many algorithms to calculate roots that require prior knowledge in numerical analysis (some of them are mentioned here), there is also an elementary method which doesn’t require more than guessing-and-checking. Try to think more in terms of the latter.

Make sure your algorithm is efficient, and analyze its time and space complexities.
 */

function root(x, n) {
  
  if (x === 0) return 0;
  
  let lower = 0;
  let upper = x;
  let mid = (upper + lower) / 2;
  
  while (mid - lower >= .001){
    if (Math.pow(mid, n) > x){
      upper = mid;
    } else if(Math.pow(mid,n) < x){
      lower = mid
    } else break
    
    mid = (upper + lower) / 2
  }
  
  return mid;
}