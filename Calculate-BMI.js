let bmi = (weight, height) => {
  let math = (weight/Math.pow(height,2)).toFixed(1);
  return math <= 18.5 ? "Underweight" : math <= 25 ? "Normal" : math <= 30 ? "Overweight" : "Obese";
};
