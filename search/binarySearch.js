function binarySearch1(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (nums[mid] < target) {
            lo = mid + 1;
        }
        else if (nums[mid] > target) {
            hi = mid - 1;
        }
        return mid;
    }
    return lo;
}

//查找左边界1: 
// 1. 数组有序，但包含重复元素
// 2. 数组部分有序，且不包含重复元素
function binarySearch2(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < right) {
        let mid = lo + ((hi - lo) >> 1);
        if (nums[mid] < target) {
            lo = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return nums[lo] = target ? lo : -1;
}

//查找左边界2: 
function binarySearch3(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (nums[mid] < target) {
            lo = mid + 1;
        }
        else if (nums[mid] > target) {
            right = mid;
        }
        else {
            right--;
        }
    }
    return nums[lo] === target ? lo : -1;
}

//查找右边界：
function binarySearch4(nums,target) {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < hi) {
        let mid = lo + 1 + ((hi - lo) >> 1);
        if (nums[mid] <= target) {
            lo = mid;
        }
        else {
            hi = mid - 1;
        }
    }
    return nums[hi] === target ? right : -1;
}