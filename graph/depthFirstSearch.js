class DepthFirstSearch {
    constructor(G, s) {
        this.marked = new Array(G).fill(false);
        dfs(G, s);
    }

    dfs(G, v) {
        this.marked[v] = ture;
        for (let w of G.adj(v)) {
            if (!this.marked[w]) {
                this.dfs(G, w);
            }
        }
    }
}

class Graph {
    constructor(V) {
        this.V = V;
        this.adjMap = new Map();
        for (let i = 0; i < V; i++) {
            if (this.adjMap.has(V[i][0])){
                this.adjMap.get(V[i]).push(V[i][1]);
            }
            else {
                this.adjMap.set(V[i][0], [V[i][1]]);
            }
        }
    }

    adj(v) {
        return this.adjMap.get(v);
    }
}