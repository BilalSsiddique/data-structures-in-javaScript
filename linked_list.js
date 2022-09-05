class Node {
    constructor(data = null, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertAtStart(data) {
        let node = new Node(data, this.head)
        this.head = node
    }

    insertAtEnd(data) {
        if (this.head == null) {
            this.head = new Node(data, null)
            return
        }

        let iter = this.head
        while (iter.next) {
            iter = iter.next
        }
        iter.next = new Node(data, null)
    }

    linkListLength() {
        let count = 0;
        let iter = this.head
        while (iter) {
            count = count + 1
            iter = iter.next
        }
        return count
    }
    insertAtIndex(data, index) {
        if (index < 0 || index >= this.linkListLength()) {
            console.log("Invalid Index")
            return
        }
        else if (index === 0) {
            this.insertAtStart(data)
            return
        }
        let count = 0;
        let iter = this.head

        while (iter) {
            if (count === index - 1) {
                let next = iter.next
                iter.next = new Node(data, next)
            }
            iter = iter.next
            count += 1
        }
    }
    removeAtIndex(index) {
        if (index < 0 || index >= this.linkListLength()) {
            console.log("Invalid index")
            return
        }
        else if (index === 0) {
            this.head = this.head.next
        }
        let count = 0
        let iter = this.head
        while (iter) {
            if (count === index - 1) {
                iter.next = iter.next.next
                break
            }

            count += 1
            iter = iter.next
        }
    }
    insertMultiple(list) {
        for (let item of list) {
            this.insertAtEnd(item)
        }
    }
    middleLList() {
        let middle = this.linkListLength() / 2 //return middle if length is odd
        if (middle % 2 !== 0) {
            middle = Math.floor(middle)   // else return second middle element
        }

        let iter = this.head
        let count = 0
        while (iter) {
            if (count == middle) {
                return iter.data
            }
            count += 1
            iter = iter.next
        }
    }



    printLList() {
        if (this.head == null) {
            console.log("Linked list is empty")
        }
        let iter = this.head
        let llstr = ""
        while (iter) {

            llstr += `${iter.data} ==> `
            iter = iter.next

        }
        console.log(`${llstr} NextNull`)
    }
    reverseLList(){
        let prev=null
        let iter= this.head
        while (iter){
            let next= iter.next
            iter.next=prev
            prev=iter
            iter= next
        }
        this.head=prev
    }

}

let llink = new LinkedList()
llink.insertAtStart(1)
llink.insertAtStart(2)
llink.insertAtStart(4)
llink.insertAtEnd(3)
llink.printLList()
llink.removeAtIndex(1)
llink.printLList()
llink.insertAtIndex(5, 1)
llink.insertMultiple([6, 7, 8])

llink.printLList()
console.log(`The middle element in the linked list is: ${llink.middleLList()}`)
llink.insertAtIndex(9, 6)
llink.printLList()

console.log(`The middle element in the linked list is: ${llink.middleLList()}`)
console.log(`The Length of linked list is : ${llink.linkListLength()}`)
console.log("Reverese LList:")
llink.reverseLList()
llink.printLList()