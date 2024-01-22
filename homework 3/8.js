function customReduceRight(arr, callback, initialValue) {
    let accumulator = initialValue;
  
    for (let i = arr.length - 1; i >= 0; i--) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  
    return accumulator;
  }
  


  const array = [1, 2, 3, 4];
  const sum = customReduceRight(array, (acc, value) => acc + value, 0);
  console.log(sum);
