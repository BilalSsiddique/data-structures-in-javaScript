"use strict";
class node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insertAtStart(data) {
        let nodes = new node(data, this.head);
        this.head = nodes;
    }
    insertAtEnd(data) {
        if (this.head === null) {
            this.head = new node(data, null);
            return;
        }
        let iter = this.head;
        while (iter.next) {
            iter = iter.next;
        }
        iter.next = new node(data, null);
    }
    insertAtIndex(index, data) {
        if (index === 0) {
            this.insertAtStart(data);
            return;
        }
        if (index < 0 || index >= this.length())
            throw 'Index Invalid';
        let iter = this.head;
        let count = 0;
        while (iter) {
            if (count === index - 1) {
                let nodes = new node(data, iter.next);
                iter.next = nodes;
            }
            iter = iter.next;
            count++;
        }
    }
    middleElement() {
        let middle = this.length() / 2;
        if (middle % 2 !== 0) {
            middle = Math.floor(middle);
        }
        let iter = this.head;
        let count = 0;
        while (iter) {
            if (count === middle) {
                console.log(`The middle element of linked list is: ${iter.data}`);
            }
            count++;
            iter = iter.next;
        }
    }
    removeFromStart() {
        if (this.head === null) {
            throw 'Linked List is Empty';
        }
        let freeTemp = this.head;
        this.head = this.head.next;
        freeTemp = null;
    }
    removeFromEnd() {
        if (this.head === null) {
            throw 'Linked List is Empty';
        }
        if (this.head.next === null) {
            throw 'Not enough elements to remove';
        }
        let iter = this.head;
        while (iter.next.next) {
            iter = iter.next;
        }
        iter.next = null;
        this.print();
    }
    remoteAtIndex(index) {
        if (index < 0 || index >= this.length())
            throw "Index Invalid";
        if (index === 0) {
            this.removeFromStart();
        }
        let iter = this.head;
        let count = 0;
        while (iter) {
            if (count === index - 1) {
                console.log(`Removed indexed ${count + 1} element from the linkedlist`);
                iter.next = iter.next.next;
                break;
            }
            iter = iter.next;
            count++;
        }
    }
    length() {
        let count = 0;
        let iter = this.head;
        while (iter) {
            count++;
            iter = iter.next;
        }
        return count;
    }
    print() {
        let iter = this.head;
        let lListStr = '';
        while (iter) {
            lListStr += `${iter.data} ${iter.next === null ? '==> null' : '==> '}`;
            iter = iter.next;
        }
        console.log(lListStr);
    }
}
let llist = new LinkedList();
llist.insertAtStart(5);
llist.insertAtEnd(6);
llist.print();
// llist.remoteAtIndex(5)
llist.print();
llist.removeFromEnd();
llist.removeFromEnd();
llist.print();
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
