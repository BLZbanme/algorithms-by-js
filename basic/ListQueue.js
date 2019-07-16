class ListQueue {

    constructor() {
        this.size = 0;
        this.head = this.tail = null;
    }

    get length() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(val) {
        let node = new ListNode(val);
        if (!this.size) {
            this.head = node;
        }
        else {
            this.tail.next = node;
        }
        this.tail = node;
        this.size++;
    }

    dequeue() {
        if (!this.size) {
            return "this queue is empty";
        }
        let node = this.head;
        this.head = this.head.next;
        this.size--;
        if (!this.size) {
            this.tail = null;
        }
        return node;
    }

    *[Symbol.iterator]() {
        let p = this.head;
        let N = this.size;
        while (N--) {
            yield p;
            p = p.next;
        }
    }

    prinf() {
        let result = "";
        for (let e of this) {
            result += e.val + " ";
        }
        return result;
    }
}

class ListNode {

    constructor(val) {
        this.val = val;
        this.next = null;
    }

}
