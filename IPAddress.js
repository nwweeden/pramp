function validateIP(ip) {
	/**
	@param ip: string
	@return: boolean
	*/
  //Just lost you.... haha yeah - I'll be here if we reconnect. 6 out of 9 passing
  // awesome. continue! so close! you need to adjust conditional of the for loop of num
  // You obviously understand what you need to finish this problem, it's the syntax you need
  // the solution i used involves what you did earlier
  // NaN instead of 'NaN' and also add more checks, you previously wrote it as an or
  // Yeah I'm not sure how to check for a string...thinking...
  
  //VICTORY! haha thanks man - great working with you - best of luck going forward
  // seeya!
  
  //WELL DONE SIR
  // Very nice working with you as well, best of luck also!
  // take care
  
  
  const ipArr = ip.split('.');
  
  if (ipArr.length !== 4) return false;
  
  for (let n of ipArr){
    if (n === '') return false;
    if (+n < 0 || +n > 255) return false;
    
    for (let num of n){
      console.log('num is', +num)
      let curr = +num
      if (isNaN(+num)) return false
    }
    
  }
  
  return true;
}
