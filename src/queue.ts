

class Queue {
    public container:number[]
    constructor(){
        this.container=[];
    }

    enqueue(num:number):number{
        return this.container.unshift(num)
    }
    dequeue(){
        return this.isEmpty() ? null : this.container.pop()  
    }
    
    sizeOfQueue():number{
        return this.container.length
    }
    isEmpty():boolean{
        return this.container.length===0
    }

    

}

let qu:Queue = new Queue()

console.log('Removed:',qu.dequeue())
console.log('Size Of Queue:',qu.sizeOfQueue())

for (let item=1;item<=5;item++){
    console.log('Added: ',qu.enqueue(item));
}
console.log('Queue:',qu.container)
console.log('Size Of Queue:',qu.sizeOfQueue())

console.log('Removed:',qu.dequeue())
console.log('Size Of Queue:',qu.sizeOfQueue())
console.log('Removed:',qu.dequeue())
console.log('Queue:',qu.container)

console.log('Size Of Queue:',qu.sizeOfQueue())
