# Symbol Table实现

|           实现           | 最坏查找 | 最坏插入 | 平均查找 | 平均插入 | 是否高效支持有序 |
| :----------------------: | :------: | :------: | :------: | :------: | :--------------: |
| 顺序查找（基于无序链表） |    n     |    n     |   n/2    |    n     |        否        |
| 二分查找（基于有序数组） |   logn   |    2n    |   logn   |    n     |        是        |
| 二叉树查找（二叉查找树） |    n     |    n     | 1.39logn | 1.39logn |        是        |
|   2-3树查找（红黑树）    |  2logn   |  2logn   | 1.00logn | 1.00logn |        是        |

## 符号表各种实现的优缺点

|    使用的数据结构    |        实现         |                        优点                        |                             缺点                             |
| :------------------: | :-----------------: | :------------------------------------------------: | :----------------------------------------------------------: |
|   链表（顺序查找）   | SequentialSearchST  |                   适用于小型问题                   |                      对于大型符号表很慢                      |
| 有序数组（二分查找） |   BinarySearchST    | 最优的查找效率和空间需求，能够进行有序性相关的操作 |                         插入操作很慢                         |
|      二叉查找树      |         BST         |         实现简单，能够进行有序性相关的操作         |            没有性能上届的保证，链接需要额外的空间            |
|    平衡二叉查找树    |     RedBlackBST     |   最优的查找和插入效率，能够进行有序性相关的操作   |                      链接需要额外的空间                      |
|        散列表        | SeparateChainHashST |         能够快速地查找和插入常见类型的数据         | 需要计算各种类型的数据的散列，无法进行有序性相关的操作，链接和空结点需要额外的空间 |

# 标准二分查找

```javascript
function binarySearch(arr, val) {
    let lo = 0;
    let hi = arr.length;
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (arr[mid] === val) {
            return mid;
        }
        else if (arr[mid] < val) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return lo;
}

```

