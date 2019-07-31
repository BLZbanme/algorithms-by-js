class RedBlackBST {

    constructor(root) {
        this.root = root;
    }

    size(node) {
        if (!node) {
            return 0;
        }
        return node.N;
    }

    put(key, val) {
        this.root = this.putNode(node, key, val);
        this.root.color = BLACK;
    }

    putNode(node, key, val) {
        if (!node) {
            return new Node(key, val, 1, RED);
        }
        let cmp = key - node.key;
        if (cmp < 0) {
            node.left = this.putNode(node.left, key, val);
        }
        else if (cmp > 0) {
            node.right = this.putNode(node.right, key, val);
        }
        else {
            node.val = val;
        }
        if (this.isRed(node.right) && !this.isRed(node.left)) {
            node = this.rotateLeft(node);
        }
        if (this.isRed(node.left) && this.isRed(node.left.left)) {
            node = this.rotateRight(node);
        }
        if (this.isRed(node.left) && this.isRed(node.right)) {
            this.flipColors(node);
        }
        node.N = 1 + this.size(node.left) + this.size(node.right);
    }

    rotateLeft(node) {
        let tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        tmp.color = node.color;
        node.color = RED;
        tmp.N = node.N;
        node.N = 1 + this.size(node.left) + this.size(node.right);
        return tmp;
    }

    rotateRight(node) {
        let tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        tmp.color = node.color;
        node.color = RED;
        tmp.N = node.N;
        node.N = 1 + this.size(node.left) + this.size(node.right);
        return tmp;
    }

    flipColors(node) {
        node.color = RED;
        node.left.color = BLACK;
        node.right.color = BLACK;
    }

    isRed(node) {
        if (!node) {
            return false;
        }
        return node.color === RED;
    }
}

const RED = true;
const BLACK = false;

class Node {
    constructor(key, val, N, color) {
        this.key = key;
        this.val = val;
        this.N = N;
        this.color = color;
    }
}