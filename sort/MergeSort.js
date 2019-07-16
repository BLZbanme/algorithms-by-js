function mergeSort(arr) {
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