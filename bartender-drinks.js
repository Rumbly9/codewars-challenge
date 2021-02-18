function getDrinkByProfession(param){
  const loCase = param.toLowerCase();
  return loCase === "jabroni" ? "Patron Tequila" : loCase === "school counselor" ? "Anything with Alcohol" :
  loCase === "programmer" ? "Hipster Craft Beer" : loCase === "bike gang member" ? "Moonshine" :
  loCase === "politician" ? "Your tax dollars" : loCase === "rapper" ? "Cristal" : "Beer";
}
