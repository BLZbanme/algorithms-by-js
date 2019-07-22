/**
 * 
 * @param {Number[]} arr 
 */
function heapSort(arr) {
    let N = arr.length;
    arr = [0, ...arr];
    for (let k = Math.floor(N / 2); k >= 1; k--){
        sink(arr, k, N);
    }
    while (N > 1) {
        [arr[1], arr[N--]] = [arr[N], arr[1]];
        sink(arr, 1, N);
    }
    arr.shift();
    return arr;
}

function sink(arr, k, N) {
    while (2 * k <= N) {
        let j = 2 * k;
        if (j < N && arr[j] < arr[j + 1]) {
            j++;
        }
        if (arr[k] >= arr[j]) {
            break;
        }
        [arr[k], arr[j]] = [arr[j], arr[k]];
        k = j;
    }
}

console.log(heapSort([1, 3, 2, 3, 6, 4, 0]));