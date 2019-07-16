/**
 * compare times N ** 2 / 2
 * swap times N
 * @param {Number} arr 
 */

function selectSort(arr) {
    const N = arr.length;
    for (let i = 0; i < N; i++) {
        let minIndex = i;
        let min = arr[i];
        for (let j = i + 1; j < N; j++) {
            if (min > arr[j]) {
                min = arr[j];
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selectSort([1, 3, 2, 3, 6, 4, 0]));