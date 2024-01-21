function isType(variable, targetType) {
    const getType = (value) => {
      if (Array.isArray(value)) {
        return 'array';
      } else if (value instanceof Date) {
        return 'date';
      } else {
        return typeof value;
      }
    };
  
    const variableType = getType(variable);
  
    if (variableType === targetType) {
      return true;
    } else {


      return false;
    }
  }
  
  console.log(isType(5, 'number')); // true
  console.log(isType(new Date(), 'date')); // true
  console.log(isType([], 'array')); // true


