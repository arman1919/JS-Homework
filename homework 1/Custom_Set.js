
class CustomSet{

    constructor(){
        this.objs =  {} ;
         
    }
    
    add(val) {
        
        this.objs[val] = val ; 
        
    } 
    
    has (val){
        
        return Boolean(this.objs[val]) ; 
    }

    remove(val){
        
        delete (this.objs[val]) ;

    }
}





let mySet = new CustomSet();
mySet.add(1);
mySet.add(2);
console.log(mySet.has(1)); // true
mySet.remove(2);
console.log(mySet.has(2)); // false
