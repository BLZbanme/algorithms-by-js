class SegTree {
    constructor(arr) {
        this.arr = arr;
        this.tree = [];
        this.buildTree(1, 0, arr.length - 1)
    }

    buildTree(node, start, end) {
        if (start === end) {
            this.tree[node] = this.arr[start] || 0;
            return;
        }
        let mid = start + ((end - start) >> 1);
        let leftNode = 2 * node;
        let rightNode = 2 * node + 1;
        this.buildTree(leftNode, start, mid);
        this.buildTree(rightNode, mid + 1, end);
        this.tree[node] = (this.tree[leftNode] || 0) + (this.tree[rightNode] || 0);
        return;
    }

    updateTree(node, start, end, idx, val) {
        if (start === end) {
            this.arr[idx] = val;
            this.tree[node] = val;
            return;
        }

        let mid = start + ((end - start) >> 1);
        let leftNode = 2 * node;
        let rightNode = 2 * node + 1;
        if (idx >= start && idx <= mid) {
            this.updateTree(leftNode, start, mid, idx, val);
        }
        else {
            this.updateTree(rightNode, mid + 1, end, idx, val);
        }
        this.tree[node] = (this.tree[leftNode] || 0) + (this.tree[rightNode] || 0);
    }

    queryTree(node, start, end, L, R) {
        if (end < L || start > R) {
            return 0;
        }
        else if (L <= start && end <= R) {
            return this.tree[node];
        }
        else if (start === end) {
            return this.tree[node];
        }
        

        let mid = start + ((end - start) >> 1);
        let leftNode = node << 1;
        let rightNode = (node << 1) + 1;
        let sumLeft = this.queryTree(leftNode, start, mid, L, R);
        let sumRight = this.queryTree(rightNode, mid + 1, end, L, R);
        return sumLeft + sumRight;
    }
}


const st = new SegTree([1, 3, 5, 7, 9, 11])
console.log(st.tree)
st.updateTree(1, 0, 5, 4, 6)
console.log(st.tree)
console.log(st.queryTree(1, 0, 5, 2, 5))