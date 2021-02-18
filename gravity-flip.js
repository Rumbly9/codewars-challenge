const flip=(d, a)=>{
  const ordered = a.sort((a, b) => a - b);
  return d === "R" ? ordered : ordered.reverse();
}
