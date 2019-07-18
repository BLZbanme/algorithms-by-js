/**
 * 
 * @param {Number[]} arr 
 */
function quickSort(arr) {
    sort(arr, 0, arr.length - 1);
    return arr;
}

/**
 * 
 * @param {Number[]} arr 
 * @param {Number} lo 
 * @param {Number} hi 
 */
function sort(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    let j = partition(arr, lo, hi);
    sort(arr, lo, j - 1);
    sort(arr, j + 1, hi);
}

function partition(arr, lo, hi) {
    let i = lo, j = hi + 1;
    let tmp = arr[lo];
    while (true) {
        while (arr[++i] < tmp && i !== hi) {
        }
        while (arr[--j] > tmp && j !== lo) {
        }
        if (i >= j) {
            break;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[j], arr[lo]] = [arr[lo], arr[j]];
    return j;
}

console.log(quickSort([1, 3, 2, 3, 6, 4, 0]));