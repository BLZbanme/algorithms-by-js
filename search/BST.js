class BST {
    
    constructor() {
        this.root = null;
    }

    get size() {
        return this.computeSize(this.root);
    }

    computeSize(node) {
        if (node) {
            return node.N;
        }
        return 0;
    }

    get(key) {
        return this.getVal(this.root, key);
    }

    getVal(node, key) {
        if (!node) {
            return null;
        }
        let cmp = node.key - key;
        if (cmp > 0) {
            return this.getVal(node.left, key);
        }
        else if (cmp < 0) {
            return this.getVal(node.rigth, key);
        }
        else {
            return node.val;
        }
    }

    put(key, val) {
        this.root = this.putKeyVal(this.root, key, val);
    }

    putKeyVal(node, key, val) {
        if (node == null) {
            return new Node(key, val, 1);
        }
        let cmp = node.key - key;
        if (cmp > 0) {
            node.left = this.putKeyVal(node.left, key, val);
        }
        else if (cmp < 0) {
            node.right = this.putKeyVal(node.right, key, val);
        }
        else {
            node.val = val;
        }
        node.N = this.computeSize(node.left) + this.computeSize(node) + 1;
        return node;
    }

    min() {
        return this.minKey(this.root).key;
    }

    minKey(node) {
        if (!node.left) {
            return node;
        }
        return this.minKey(node.left);
    }

    max() {
        return this.maxKey(this.root).key;
    }

    maxKey(node) {
        if (!node.right) {
            return node;
        }
        return this.maxKey(node.right);
    }

    floor(key) {
        let node = this.floorKey(this.root, key);
        if (!node) {
            return null;
        }
        return node.key;
    }

    floorKey(node, key) {
        if (!node) {
            return null;
        }
        let cmp = node.key - key;
        if (cmp === 0) {
            return node;
        }
        else if (cmp > 0) {
            return this.floorKey(node.left, key);
        }
        let tmp = this.floorKey(node.right, key);
        if (tmp) {
            return tmp;
        }
        else {
            return node;
        }
    }

    select(k) {
        return this.selectKey(this.root, k).key;
    }

    selectKey(node, k) {
        if (!node) {
            return null;
        }
        let t = this.computeSize(node.left);
        if (t > k) {
            return this.selectKey(node.left, k);
        }
        else if (t < k) {
            return this.selectKey(node.right, k - t - 1);
        }
        else {
            return node;
        }
    }

    rank(key) {
        return this.rankKey(this.root, key);
    }

    rankKey(node, key) {
        if (!node) {
            return 0;
        }
        let cmp = node.key - key;
        if (cmp > 0) {
            return this.rankKey(node.left, key);
        }
        else if (cmp < 0) {
            return 1 + this.computeSize(node.left) 
                + this.rankKey(node.right, key);
        }
        else {
            return this.computeSize(node.left);
        }
    }

    deleteMin() {
        this.root = this.deleteMinNode(this.root);
    }

    deleteMinNode(node) {
        if (!node.left) {
            return node.right;
        }
        node.left = this.deleteMin(node.left);
        node.N = this.computeSize(node.left) 
            + this.computeSize(node.right) + 1;
        return node;
    }

    delete(key) {
        this.root = this.deleteNode(this.root, key);
    }

    deleteNode(node, key) {
        if (!node) {
            return null;
        }
        let cmp = node.key - key;
        if (cmp > 0) {
            node.left = this.deleteNode(node.left, key);
        }
        else if (cmp < 0) {
            node.right = this.deleteNode(node.right, key);
        }
        else {
            if (!node.right) {
                return node.left;
            }
            if (!node.left) {
                return node.right;
            }
            let tmp = node;
            node = this.minKey(tmp.right);
            node.right = this.deleteMinNode(tmp.right);
            node.left = tmp.left;
        }
        node.N = this.computeSize(node.left) 
            + this.computeSize(node.right) + 1;
        return node;
    }

    *[Symbol.iterator]() {
        let result = [];
        this.keys(this.root, result, this.min(), this.max());
        for (let e of result) {
            yield e;
        }
    }

    keys(node, queue, lo, hi) {
        if (!node) {
            return;
        }
        let cmplo = node.key - lo;
        let cmphi = node.key - hi;
        if (cmplo > 0) {
            this.keys(node.left, queue, lo, hi);
        }
        if (cmplo >= 0 && cmphi <= 0) {
            queue.push(node.key);
        }
        if (cmphi < 0) {
            this.keys(node.right, queue, lo, hi);
        }
    }
}

class Node {

    constructor(key, val, N) {
        this.key = key;
        this.val = val;
        this.N = N;
    }
}
