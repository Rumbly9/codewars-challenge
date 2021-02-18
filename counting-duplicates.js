function duplicateCount(text){
  const lowercase = text.toLowerCase().split("");
  const sorted = lowercase.sort();
  let current = null;
  let arr = [];
  let count = 0;
  let totalDupl = 0;

  for (i = 0; i < lowercase.length; i++){
    if (sorted[i] !== current){
      if (count > 0){
        arr.push(count);
      }
      current = sorted[i];
      count = 1;
    }else{
      count++
    }
  }
  if (count > 0){
    arr.push(count);
  }
  for (item of arr){
    if (item > 1){
      totalDupl += 1;
    }
  }
  return totalDupl;
}
