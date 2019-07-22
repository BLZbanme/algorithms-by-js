/**
 * Priority-Queue based on binary heap
 */ 
export class MaxPQ {

    constructor(capacity) {
        this.size = 0;
        this.pq = new Array(capacity + 1);
    }

    isEmpty() {
        return this.size === 0;
    }

    get length() {
        return this.size;
    }

    insert(val) {
        if (this.size + 1 === this.pq.length) {
            this.resize(Math.floor(this.pq.length * 2));
        }
        this.pq[++this.size] = val;
        this.swim(this.size);
    }

    delMax() {
        if (!this.isEmpty()) {
            let result =  this.pq[1];
            this.exch(1, this.size);
            this.pq[this.size--] = null;
            this.sink(1);
            if (this.size === Math.floor(this.pq.length / 4)) {
                this.resize(Math.floor(this.pq.length / 2));
            }
            return result;
        }
    }

    resize(max) {
        let tmp = new Array(max);
        for (let i = 0; i < this.size; i++) {
            tmp[i] = this.pq[i];
        }
        this.arr = tmp;
    }

    swim(k) {
        while (k > 1 && this.pq[k] > this.pq[Math.floor(k / 2)]) {
            let khalf = Math.floor(k / 2);
            this.exch(k, khalf);
            k = khalf;
        }
    }

    sink(k) {
        while (2 * k <= this.size) {
            let j = 2 * k;
            if (j < this.size && this.pq[j] < this.pq[j + 1]) {
                j++;
            }
            if (this.pq[k] >= this.pq[j]) {
                break;
            }
            this.exch(k, j);
            k = j;
        }
    }

    exch(i, j) {
        [this.pq[i], this.pq[j]] = [this.pq[j], this.pq[i]];
    }
}
