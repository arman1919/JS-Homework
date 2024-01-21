function createLazyArray(array) {
    return new Proxy(array, {
      get(target, prop, receiver) {
        if (prop === 'map') {
          return (callback) => createLazyArray(target.map(callback));
        } else if (prop === 'filter') {
          return (callback) => createLazyArray(target.filter(callback));
        } else {
          return Reflect.get(target, prop, receiver);
        }
      },
    });
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  
  const lazyArray = createLazyArray(originalArray);
  
  const mappedArray = lazyArray.map(x => x * 2);
  
  console.log("Original Array:", originalArray);
  console.log("Mapped Array :", mappedArray);
  


  