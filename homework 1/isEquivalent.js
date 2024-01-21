function isEquivalent(value1, value2) {
    // Check if the values are identical, including handling NaN and -0/+0
    if (value1 === value2) {
      // Check for +0/-0 distinction
      return value1 !== 0 || 1 / value1 === 1 / value2;
    }
  
    // Check for NaN
    return value1 !== value1 && value2 !== value2;
  }
  

  console.log(isEquivalent(NaN, NaN) )
  console.log(isEquivalent(0, -0) )
  console.log(isEquivalent(5, 5) )
  console.log(isEquivalent('hello', 'hello'))
  console.log(isEquivalent('hello', 'world') )
  console.log(isEquivalent(true, false))

