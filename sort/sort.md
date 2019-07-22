## 总体比较：

|     方法     |         时间复杂度          | 空间复杂度 | 是否稳定 | 是否为原地排序 |             备注             |
| :----------: | :-------------------------: | :--------: | :------: | :------------: | :--------------------------: |
|   选择排序   |      O(n<sup>2</sup>)       |    O(1)    |    否    |       是       |                              |
|   插入排序   |    O(n)~O(n<sup>2</sup>)    |    O(1)    |    是    |       是       |    对部分有序的数组性能好    |
|   希尔排序   | O(nlogn)~O(n<sup>6/5</sup>) |    O(1)    |    否    |       是       | 平均性能优于插入排序，不稳定 |
|   归并排序   |          O(nlogn)           |    O(n)    |    是    |       否       |           渐进最优           |
|   快速排序   |          O(nlogn)           |   O(lgn)   |    否    |       是       |    不稳定,最快的通用排序     |
| 三向快速排序 |        O(n)~O(nlogn)        |   O(lgn)   |    否    |       是       |                              |
|    堆排序    |          O(nlogn)           |    O(1)    |    否    |       是       |     不稳定，无法利用缓存     |

##### 注：

几种典型的部分有序数组：

1. 数组中每个元素距离它的最终位置都不远；
2. 一个有序的大数组接一个小数组；	
3. 数组中只有几个元素的位置不正确。

不稳定：指的是快排可能会移动相同元素的相对位置。

## 代码实现：

#### 	选择排序：

```javascript
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
```

#### 	插入排序

```javascript
function insertSort(arr) {
    const N = arr.length;
    for (let i = 1; i < N; i++) {
        for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        }
    }
    return arr;
}
```

#### 	希尔排序：

```javascript
function shellSort(arr) {
    const N = arr.length;
    let h = 1;
    while (h < parseInt(N / 3)) {
    	h = 3 * h + 1;
    }
    while (h >= 1) {
        for (let i = h; i < N; i++) {
            for (let j = h; j >= h && arr[j - h] > arr[j]; j-=h) {
                [arr[j], arr[j - h]] = [arr[j - h], arr[j]];
            }
        }
        h = parseInt(h / 3);
    }
    return arr;
}
```

#### 	归并排序：

###### 		自顶向下版：

```javascript
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
```

###### 自底向上版：

```javascript
function mergeSort(arr) {
    const N = arr.length;
    for (let size = 1; size < N; size << = 1) {
        for (let i = 0; i < N - size; i += size * 2) {
            merge(arr, i, i + size - 1, Math.min(i + 2 * size - 1, N - 1));
        }
    }
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
```

#### 快速排序

```javascript
function quickSort(arr) {
    sort(arr, 0, arr.length - 1);
    return arr;
}

function sort(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    const j = parition(arr, lo, hi);
    sort(arr, lo, j - 1);
    sort(arr, j + 1, hi);
}

function partition(arr, lo, hi) {
    let i = lo;
    let j = hi + 1;
    const cur = arr[lo];
    while (true) {
        while (arr[++i] < cur && i < hi) {
        };
        while (arr[--j] > cur && j > lo) {
        }
        if (i >= j) {
            break;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[lo], arr[j]] = [arr[j], arr[lo]];
    return j;
}
```

###### 三向切分版：大量重复的情况性能好。

```javascript
function quick3waySort(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    let lt = lo, i = lo + 1, gt = hi;
    const cur = arr[lo];
    while (i <= gt) {
        const cmp = cur - arr[i];
        if (cmp > 0) {
            [arr[i], arr[gt--]] = [arr[gt], arr[i]];
        }
        else if (cmp < 0) {
            [arr[i++], arr[lt++]] = [arr[lt], arr[i]];
        }
        else {
            i++;
        }
    }
    quick3waySort(arr, lo, lt - 1);
    quick3waySort(arr, gt + 1, hi);
}
```

#### 堆排序：

```javascript
function heapSort(arr) {
    let N = arr.length;
    arr = [0, ...arr];
    for (let i = Math.floor(N / 2); i >= 1; i--) {
        sink(arr, i, N);
    }
    
    while (N > 1) {
        [arr[1], arr[N--]] = [arr[N], arr[1]];
        sink(arr, 1, N);
    }
    arr.shift();
}

function sink(arr, i, N) {
    while (i * 2 <= N) {
        let j = i * 2;
        if (j < N && arr[j] < arr[j + 1]) {
            j++;
        }
        if (arr[i] >= arr[j]) {
            break;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i = j;
    }
}
```

