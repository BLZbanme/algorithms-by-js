## 总体比较：

|   方法   |    时间复杂度    | 空间复杂度 |              比较次数               |             交换次数              |          备注          |
| :------: | :--------------: | :--------: | :---------------------------------: | :-------------------------------: | :--------------------: |
| 选择排序 | O(n<sup>2</sup>) |    O(1)    |           n<sup>2</sup>/2           |                 n                 |                        |
| 插入排序 | O(n<sup>2</sup>) |    O(1)    | n-1~n<sup>2</sup>/4~n<sup>2</sup>/2 | 0~n<sup>2</sup>/4~n<sup>2</sup>/2 | 对部分有序的数组性能好 |
| 希尔排序 |                  |            |                                     |                                   |  平均性能优于插入排序  |
| 归并排序 |     O(nlogn)     |    O(n)    |           nlogn / 2~nlogn           |                                   |                        |

##### 注：

几种典型的部分有序数组：

1. 数组中每个元素距离它的最终位置都不远；
2. 一个有序的大数组接一个小数组；	
3. 数组中只有几个元素的位置不正确。

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

#### 