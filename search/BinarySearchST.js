class BinarySearchST {
    constructor(capacity) {
        this.size = 0;
        this.keyArr = new Array(capacity);
        this.valArr = new Array(capacity);
    }

    get length() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    get(key) {
        if (this.isEmpty()) {
            return null;
        }
        let i = this.rank(key);
        if (i < this.size && this.keyArr[i] === key) {
            return this.valArr[i];
        }
        return null;
    }

    put(key, val) {
        let i = this.rank(key);
        if (i < this.size && this.keyArr[i] === key) {
            this.valArr[i] = val;
            return;
        }

        for (let j = this.size; j > i; j--) {
            this.keyArr[j] = this.keyArr[j - 1];
            this.valArr[j] = this.keyArr[j - 1];
        }

        this.keyArr[i] = key;
        this.valArr[i] = val;
        this.size++;
    }

    
    delete(key) {
        if (this.isEmpty()) {
            return false;
        }
        let i = this.rank(key);
        if (i < N && this.keyArr[i] === key) {
            for (let j = i + 1; j < this.size; j++) {
                this.keyArr[j - 1] = this.keyArr[j];
                this.valArr[j - 1] = this.valArr[j];
            }
            this.size--;
            return true;
        }
        return false;
    }

    rank(key) {
        let lo = 0;
        let hi = this.size - 1;
        while (lo <= hi) {
            let mid = Math.floor((lo + hi) / 2);
            let tmp = this.keyArr[mid];
            if (tmp < key) {
                lo = mid + 1;
            }
            else if (tmp > key) {
                hi = mid - 1;
            }
            else {
                return mid;
            }
        }
        return lo;
    }

    *[Symbol.iterator]() {
        for (let i = 0; i < this.size; i++) {
            yield {
                key: this.keyArr[i],
                val: this.valArr[i]
            }
        }
    }
}
