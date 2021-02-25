const solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  const gasConst = 0.082;
  const tempConv = temp + 273.15;
  return (((givenMass1/molarMass1)+(givenMass2/molarMass2))*gasConst*tempConv)/volume
}
