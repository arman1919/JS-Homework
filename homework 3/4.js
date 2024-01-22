function combineUnique(array1,array2)

{
    
    return [...new Set(array1.concat(array2))];
}





const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
console.log(combineUnique(array1, array2));
