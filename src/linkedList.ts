
class node{
    public data: number
    public next: null|node 
    constructor(data:number,next:null|node){
        this.data=data
        this.next=next
    }
}

class LinkedList{
    public head: node|null

    constructor(){
        this.head= null
    }
    
    insertAtStart(data:number){
        let nodes = new node(data,this.head)
        this.head=nodes
    }
    insertAtEnd(data:number){
        
        if (this.head===null){
            this.head= new node(data,null)
            return
        } 

        let iter = this.head
        while(iter.next){
            iter = iter.next
        }
        iter.next = new node(data,null)
    }
    insertAtIndex(index:number,data:number){
        if (index===0){
            this.insertAtStart(data) 
            return
        }
        if (index<0 || index >= this.length() ) throw 'Index Invalid'
        
        let iter= this.head
        let count=0;
        while (iter){
            if (count === index-1){
               let nodes= new node(data,iter.next)
               iter.next= nodes 
            }
        iter=iter.next
        count++
        }

    }
    middleElement(){
        let middle= this.length()/2
        if (middle %2 !==0){
            middle= Math.floor(middle)
        }
        let iter= this.head
        let count=0;
        while(iter){
            if (count===middle){
                console.log(`The middle element of linked list is: ${iter.data}`)
            }
        count++    
        iter=iter.next    
        }
    }
    length(){
        let count=0
        let iter= this.head
        while(iter){
            count++;
            iter=iter.next
        }
        return count
    }
    print(){
        let iter= this.head;
        let lListStr= '';
        while(iter){
            lListStr+= `${iter.data} ${iter.next===null? '==> null' : '==> ' }` 
            iter=iter.next
        }
        console.log(lListStr)
    }
    

}
let llist: LinkedList = new LinkedList()
llist.insertAtStart(5)
llist.insertAtEnd(6)
llist.print()
llist.middleElement()
llist.insertAtStart(4)
llist.insertAtStart(3)
llist.print()
// llist.insertAtIndex(1,7)
llist.print()
llist.middleElement()
console.log('Length:',llist.length())
llist.print()