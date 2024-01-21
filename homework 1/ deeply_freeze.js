"use strict"

function deepFreeze(obj) {
    // Получаем имена всех свойств объекта
    var propNames = Object.getOwnPropertyNames(obj);
  
    // Замораживаем свойства верхнего уровня
    Object.freeze(obj);
  
    // Рекурсивно замораживаем вложенные объекты
    propNames.forEach(function (name) {
      var prop = obj[name];
  
      // Замораживаем вложенные объекты
      if (typeof prop === 'object' && prop !== null && !Object.isFrozen(prop)) {
        deepFreeze(prop);
      }
    });
  
    return obj;
  }





let obj = { a: { b: 2 } };
deepFreeze(obj);
obj.a.b = 3; // Throws error in strict mode


