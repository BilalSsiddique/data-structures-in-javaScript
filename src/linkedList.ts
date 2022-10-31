
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
    removeFromStart(){
        if (this.head===null){
            throw 'Linked List is Empty'
            
        }
        let freeTemp: node | null= this.head
        this.head= this.head.next
        freeTemp=null
    }
    removeFromEnd(){
        if (this.head===null){
            throw 'Linked List is Empty'   
        }

        if (this.head.next===null) {
            throw 'Not enough elements to remove'
        }

        let iter= this.head
        while(iter.next!.next){
            iter =iter.next!
        }
        iter.next= null
        this.print()
    }
    remoteAtIndex(index:number){
        if (index < 0 || index >= this.length()) throw "Index Invalid";

         if (index === 0){
            this.removeFromStart()
         }
        let iter = this.head;
        let count = 0;
        while (iter) {
          if (count === index - 1) {
            console.log(
              `Removed indexed ${count+1} element from the linkedlist`
            );
            iter.next=iter.next!.next
            break;
          }
          iter = iter.next;
          count++;
        }
    }

    insertMultipleElements(list: number[]){
        for (let element of list){
            this.insertAtEnd(element)
        }
    }

    /*** 
     * Returns reversed Linked List
    */
    reverseLinkedList(){
        let prev= null;
        let iter=this.head
        while (iter){
            let next= iter.next //save next pointer
            iter.next= prev //to point => current node next pointer to previous 
            prev= iter  // save current node so that we can point to it
            iter= next  // increment
        }
        this.head= prev  // In the end the last node become head as the prev will be last node so we make it head
        this.print()
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
llist.print();
llist.insertMultipleElements([7,8,9,10])
// llist.remoteAtIndex(5)
llist.reverseLinkedList()
llist.print();

llist.removeFromEnd()
llist.removeFromEnd();
llist.print()
// llist.middleElement()
// llist.insertAtStart(4)
// // llist.removeFromEnd()
// llist.insertAtStart(3)
// llist.removeFromEnd()
// llist.insertAtStart(8)

// llist.print()
// llist.insertAtIndex(1,9)
// llist.print()
// llist.middleElement()
// console.log('Length:',llist.length())
// llist.print()