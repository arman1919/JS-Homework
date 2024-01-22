function chunkArray(arr,length){
    let chunk = [];
    let arr3 = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (count == 3){
            chunk.push(arr3);
            count = 0;
            arr3 = []
        } 
        arr3.push(arr[i])
        count ++;
        
    }
    if (count  != 0){
        chunk.push(arr3);

    }
    return chunk
}




const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunkArray(data, 3));
