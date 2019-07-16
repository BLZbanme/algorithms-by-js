/**
 * compare times N ** 2 / 4 -- N ** 2 / 2
 * swap times N ** 2 / 4 -- N ** 2 / 2
 * @param {Number} arr 
 */

function shellSort(arr) {
    const N = arr.length;
    let h = 1;
    while (h < parseInt(N / 3)) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (let i = h; i < N; i++) {
            for (let j = i; j >= h && arr[j - h] > arr[j]; j -= h) {
                [arr[j], arr[j - h]] = [arr[j - h], arr[j]];
            } 
        }
        h = parseInt(h / 3);
    }
    return arr;
}

console.log(shellSort([1, 3, 2, 3, 6, 4, 0]));