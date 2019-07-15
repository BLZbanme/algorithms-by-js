/**
 * simple example about
 * compute evaluate by Dijkstra double stacks
 */
function evaluate(str) {
    debugger
    let strArr = [...str];
    let numStack = [];
    let operStack = [];
    let operSet = new Set(["+", "-", "*", "/", "%"]);
    for (let s of strArr) {
        switch (s) {
            case " ":
                continue;
            case "(":
                continue;
            case ")":
                let oper = operStack.pop();
                let b = numStack.pop();
                let a = numStack.pop();
                numStack.push(operate(a, b, oper));
                continue;
            default: 
                if (operSet.has(s)) {
                    operStack.push(s);
                }
                else {
                    numStack.push(+s);
                }
        }
    }
    return numStack[0];
}

function operate(a, b, oper) {
    switch (oper) {
        case "+" :
            return a + b;
        case "-" :
            return a - b;
        case "*" :
            return a * b;
        case "/" :
            return a / b;
        case "%" :
            return a % b;
        default:
            return 0;
    }
}

console.log(evaluate("(1 + ((2 * 3) * (4 * 5)))"))