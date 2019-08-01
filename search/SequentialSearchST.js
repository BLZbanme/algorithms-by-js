export class SequentialSearchST {

    constructor() {
        this.first = null;
    }

    get(key) {
        let tmp = this.first;
        while (tmp) {
            if (tmp.key === key) {
                return tmp.val;
            }
            tmp = tmp.next;
        }
        return null;
    }

    put(key, val) {
        let tmp = this.first;
        while (tmp) {
            if (tmp.key === key) {
                tmp.val = val;
                return;
            }
            tmp = tmp.next;
        }
        let newNode = new Node(key, val, this.first);
        this.first = newNode;
    }

    *[Symbol.iterator]() {
        let tmp = this.first;
        while (tmp) {
            yield {
                key: tmp.key,
                val: tmp.val
            }
            tmp = tmp.next;
        }
    }
    
}

class Node {
        
    constructor(key, val, next) {
        this.key = key;
        this.val = val;
        this.next = next;
    }

}