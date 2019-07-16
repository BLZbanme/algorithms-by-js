/**
 * compare times N ** 2 / 4 -- N ** 2 / 2
 * swap times N ** 2 / 4 -- N ** 2 / 2
 * @param {Number} arr 
 */

function insertSort(arr) {
    const N = arr.length;
    for (let i = 1; i < N; i++) {
        for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        }
    }
    return arr;
}

console.log(insertSort([1, 3, 2, 3, 6, 4, 0]));