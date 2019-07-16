class ListStack {
    
    constructor() {
        this.size = 0;
        this.head = new ListNode(Infinity);
    }

    get length() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(val) {
        let newNode = new ListNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        this.size++;
    }

    pop() {
        if (!this.size) {
            return "this stack is empty";
        }
        else {
            let node = this.head.next;
            this.head.next = node.next;
            this.size--;
            return node;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head.next;
        while (node) {
            yield node;
            node = node.next;
        }
    }

    print() {
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
