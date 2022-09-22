function diagonalDifference(arr) {
    // Write your code here
    let d1=0;
  let d2=0;
  let s=arr.length;
  for(let i=0;i<s;++i){
    d1+=arr[i][i];
    d2+=arr[i][s-i-1]
  }
  return Math.abs(d1-d2)
}
