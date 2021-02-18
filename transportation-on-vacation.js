function rentalCarCost(d) {
  const price = 40;
  const math = d*price;
  return d >= 7 ? math-50 : d >= 3 ? math-20 : math;
}
