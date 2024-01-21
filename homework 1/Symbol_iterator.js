class MyRange {
    constructor(start,end,step = 1){
        this.start = start;
        this.end = end;
        this.step = step; 
        
    }
    

    *[Symbol.iterator](){

        for ( let i = this.start; i <= this.end; i += this.step ){
            yield i
        }
    }
}


const r = new MyRange(1,10,1)


for (const num of r){

    console.log(num);
    
}
