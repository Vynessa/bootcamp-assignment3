module.exports={
findMissing:function(arr1, arr2){
  if (arr1.length === 0 || arr2.length === 0 || arr1.length === arr2.length ) {
    return 0;
  }
  
  for (var i = 0; i < arr2.length; i++){
    if(arr1.indexOf(arr2[i]) < 0){
      return arr2[i];
    }
  }
  
}
}