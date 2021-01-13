/**
 * A letter can be encoded to a number in the following way:

'A' -> '1', 'B' -> '2', 'C' -> '3', ..., 'Z' -> '26'
A message is a string of uppercase letters, and it is encoded first using this scheme. For example, 'AZB' -> '1262'

Given a string of digits S from 0-9 representing an encoded message, return the number of ways to decode it.
 */

function decodeVariations(S) {
	/**
	@param S: string
	@return: integer
	*/
  let dp = new Array(S.length);
  
  dp[S.length] = 1
  //console.log({dp})
  
	for (let i = S.length - 1; i >= 0; i--){
    if (S[i] === '0') dp[i] = 0;
    else if (S[i] === '1'){
      if (dp[i+2]) dp[i] = dp[i+1] + dp[i+2];
      else dp[i] = dp[i+1];
    }
    else if (S[i] === '2' && i+1 < S.length) dp[i] = dp[i+1] + (S[i+1] <= '6' ? dp[i+2] : 0)
    else dp[i] = dp[i+1];
  }
 // console.log({dp})
  return dp[0];
}

//decodeVariations('321121311231')