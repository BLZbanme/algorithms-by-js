# 非递归

### 先序遍历

```javascript
function preOrder(root) {
    let stack = [];
    let cur = root;
    while (stack.length || cur) {
        while (cur) {
            console.log(cur);
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        cur = cur.right;
    }
}
```

### 中序遍历

```javascript
function inOrder(root) {
    let stack = [];
    let cur = root;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        console.log(cur);
        cur = cur.right;
    }
}
```

### 后序遍历

```javascript
function postOrder(root) {
    let stack = [];
    let cur = root;
    let pre = null;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && cur.right !== pre) {
            cur = cur.right;
        }
        else {
            console.log(cur.val);
            pre = cur;
            stack.pop();
            cur = null;
        }
    }
}
```

