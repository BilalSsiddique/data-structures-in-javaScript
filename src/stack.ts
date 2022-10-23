class stack {
    public container:number[]
    constructor(){
        this.container=[];
    }

    push(num:number):number{
        return this.container.push(num)
    }
}

let st = new stack()
st.push(8)
console.log(st.container)