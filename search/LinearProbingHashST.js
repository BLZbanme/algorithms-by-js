import SequentialSearchST from './SequentialSearchST.js'

class LinearProbingHashST {

    constructor() {
        this.N = 0;
        this.M = 16;
        this.keys = new Array(this.M);
        this.vals = new Array(this.M);
    }

    hash(key) {
        return (key.hashCode() & 0x7fffffff) % M;
    }

    resize() {
        
    }

    put(key, val) {
        if (N >= M / 2) {
            this.resize(2 * this.M);
        }
        for (i = this.hash(key); this.keys[i]; i = (i + 1) % this.M) {
            if (this.keys[i].equals(key)) {
                this.vals[i] = val;
                return;
            }
        }
        this.keys[i] = key;
        this.vals[i] = val;
        this.N++;
    }

    get(key) {
        for (let i = hash(key); this.keys[i]; i = (i + 1) % this.M) {
            if (this.keys[i].equals(key)) {
                return this.vals[i];
            }
        }
        return null;
    }
}