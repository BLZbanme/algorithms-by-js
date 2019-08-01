import SequentialSearchST from './SequentialSearchST.js'

export class SeparateChainingHashST {
    constructor(M=997) {
        //键对值总数
        this.N = 0;
        //散列表的大小
        this.M = M;
        this.st = new SequentialSearchST(M);
        for (let i = 0; i < M; i++) {
            st[i] = new SequentialSearchST();
        }
    }

    hash(key) {
        return (key.hashCode() & 0x7fffffff) % this.M;
    }

    get(key) {
        return this.st[this.hash(key)].get(key);
    }

    put(key, val) {
        this.st[this.hash(key)].put(key, val);
    }
}

