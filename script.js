function threeSum(arr, target) {
// write your code here
	let intDiff = Infinity ;
  for( let i=0 ; i<=n-3 ; i++){
	  for( let j=i+1 ; j<=n-2 ; j++){
		  for( let k = j+1 ; k<=k-1 ; k++){
			  let sum = arr[i] + arr[j] + arr[k];
			  let diff = Math.abs(sum - target);
			  if(intDiff > diff){
				  ans = sum ;
			  }
		  }
	  }
  }
	console.log(ans);
}

module.exports = threeSum;
