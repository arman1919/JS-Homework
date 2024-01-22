function getType(value) {
    
    const typeMappings = {
      'undefined': 'undefined',
      'boolean': 'boolean',
      'number': 'number',
      'string': 'string',
      'symbol': 'symbol',
      'function': 'function',
      'object': value === null ? 'null' : (Array.isArray(value) ? 'array' : 'object'),
    };
  
    const valueType = typeof value;
    return typeMappings[valueType];
  }
  
  console.log(getType([1, 2, 3])); 
  