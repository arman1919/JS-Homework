function groupByProperty(array, property) {
    const grouped = {};
  
    array.forEach(obj => {
      const propValue = obj[property];
  
      if (!grouped[propValue]) {
        grouped[propValue] = [obj];
      } else {
        grouped[propValue].push(obj);
      }
    });
  
    return grouped;
  }
  


const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 }
  ];
  
  console.log(groupByProperty(people, 'age'));
  