function  findLongestString(arr){
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i].length > arr[max].length){
            max = i
        }
            
        
    }
    return arr[max];
}





const strings = ["short", "medium length", "longest string"];
console.log(findLongestString(strings));
