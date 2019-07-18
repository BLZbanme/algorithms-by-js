/**
 * compare times N * logN / 2 ~ N * logN
 * swap times
 * @param {Number[]} arr 
 */

/**
 * up2downMergeSort
 * @param {Number[]} arr 
 */
function mergeSort1(arr) {
    up2downMergeSort(arr, 0, arr.length - 1);
}

function up2downMergeSort(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    const mid = parseInt((lo + hi) / 2);
    up2downMergeSort(arr, lo, mid);
    up2downMergeSort(arr, mid + 1, hi);
    merge(arr, lo, mid, hi);
}

/**
 * down2upMergeSort
 * @param {Number[]} arr 
 */
function mergeSort2(arr) {
    const N = arr.length;
    for (let size = 1; size < N; size <<= 1) {
        for (let lo = 0; lo < N - size; lo += size * 2) {
            merge(arr, lo, lo + size - 1, Math.min(lo + 2 * size - 1, N - 1));
        }
    }
    return arr;
}

/**
 * merge in-place
 * @param {Number[]} arr 
 * @param {Numberr} lo 
 * @param {Number} mid 
 * @param {Number} hi 
 */
function merge(arr, lo, mid, hi) {
    let i = lo;
    let j = mid + 1;
    let tmp = [...arr];
    for (let k = lo; k <= hi; k++) {
        if (i > mid) {
            arr[k] = tmp[j++];
        }
        else if (j > hi) {
            arr[k] = tmp[i++];
        }
        else if (tmp[i] < tmp[j]) {
            arr[k] = tmp[i++];
        }
        else {
            arr[k] = tmp[j++];
        }
    }
}

console.log(mergeSort1([1, 3, 2, 3, 6, 4, 0]));