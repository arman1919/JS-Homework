function customMap(arr,func){
    
    let new_arr = [];
    arr.forEach(element => {
       new_arr.push(func(element));

    })
    
    return new_arr;
}

const numbers = [1, 2, 3];
const doubled = customMap(numbers, num => num * 2);
console.log(doubled);
