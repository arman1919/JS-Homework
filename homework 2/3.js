function isRepdigit(number) {
   
    const numberStr = number.toString();
  
    return numberStr.split('').every(digit => digit === numberStr[0]);
  }
  
  console.log(isRepdigit(66)); 
  console.log(isRepdigit(0));  
  console.log(isRepdigit(-11)); 
  