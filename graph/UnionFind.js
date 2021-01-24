class UnionFind {
    constructor(n) {
        this.parent = Array(n).fill(-1)
        this.rank = Array(n).fill(0)
    }

    findRoot(x) {
        if (this.parent[x] === -1) return x;
        let xRoot = this.findRoot(this.parent[x]);
        return xRoot;
    }

    /** 1- union successfully, 0 - failed */
    union(x, y) {
        let xRoot = this.findRoot(x);
        let yRoot = this.findRoot(y);
        if (xRoot === yRoot) return 0;
        if (this.rank[xRoot] > this.rank[yRoot]) {
            this.parent[xRoot] = yRoot;
        }
        else if(this.rank[xRoot] < this.rank[yRoot]) {
            this.parent[yRoot] = xRoot;
        }
        else {
            this.parent[xRoot] = yRoot;
            this.rank[yRoot]++;
        }
        return 1;
    }
}

function demo() {
    let edges = [
        [0, 1],
        [1, 2],
        [1, 3],
        [2, 5],
        [3, 4],
    ]
    const uf = new UnionFind(6);
    for (let i = 0; i < 5; i++) {
        let x = edges[i][0];
        let y = edges[i][1];
        if (uf.union(x, y) === 0) {
            console.log('Cycle detected')
            return;
        }
    }
    console.log('No cycles found')
    return;
}
demo()