/**
 * 3 way partition
 * @param {Number[]} arr 
 * @param {Number} lo 
 * @param {Number} hi 
 */
function quick3waySort(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    let lt = lo, i = lo + 1, gt = hi;
    let cur = arr[lo];
    while (i <= gt) {
        let cmp = arr[i] - cur;
        if (cmp > 0) {
            [arr[i], arr[gt--]] = [arr[gt], arr[i]];
        }
        else if (cmp < 0) {
            [arr[lt++], arr[i++]] = [arr[i], arr[lt]];
        }
        else {
            i++;
        }
    }
    quick3waySort(arr, lo, lt - 1);
    quick3waySort(arr, gt + 1, hi);
    return arr;
}

console.log(quick3waySort([1, 3, 2, 3, 6, 4, 0], 0, 6));