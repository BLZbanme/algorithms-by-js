export class FixedCapacityStack {
    constructor(num) {
        this.size = 0;
        this.arr = new Array(num);
    }

    get length() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(ele) {
        if (this.size === this.arr.length) {
            this.resize(this.arr.length * 2);
        }
        this.arr[this.size++] = ele;
    }

    pop() {
        let tmp = this.arr[--this.size];
        this.arr[this.size] = null;
        if (this.size > 0 
            && this.size == parseInt(this.arr.length / 4)) {
            this.resize(parseInt(this.arr.length / 2));
        }
        return tmp;
    }

    resize(max) {
        let tmp = new Array(max);
        for (let i = 0; i < this.size; i++) {
            tmp[i] = this.arr[i];
        }
        this.arr = tmp;
    }

    *[Symbol.iterator]() {
        for(let i = 0; i < this.size; i++) {
            yield this.arr[i];
        }
    }
}
