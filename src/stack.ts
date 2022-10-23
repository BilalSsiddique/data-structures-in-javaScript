const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

class stack {
    public container:number[]
    constructor(){
        this.container=[];
    }

    pushInStack(num:number):number{
        return this.container.push(num)
    }
    popFromStack(){
        return this.isEmpty() ? null : this.container.pop();  
    }
    peekElement(){
        return this.container[this.container.length-1]
    }
    sizeOfStack():number{
        return this.container.length
    }
    isEmpty():boolean{
        return this.container.length===0
    }

    

}

let st:stack = new stack()

console.log('Removed:',st.popFromStack())
console.log('Size Of Stack:',st.sizeOfStack())

for (let item=1;item<=5;item++){
    console.log('pushed: ',st.pushInStack(item));
}
console.log('Stack:',st.container)
console.log('Size Of Stack:',st.sizeOfStack())
console.log('Peek element in the stack is :',st.peekElement())
console.log('Removed:',st.popFromStack())
console.log('Size Of Stack:',st.sizeOfStack())
console.log('Removed:',st.popFromStack())
console.log('Stack:',st.container)
console.log('peek element in the stack is :',st.peekElement())
console.log('Size Of Stack:',st.sizeOfStack())
