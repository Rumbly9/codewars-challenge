function nextId(ids){
  const temp = new Set(ids)
  for (i = 0; i <= ids.length; i++){
    if (!temp.has(i)) return i;
  }
}
