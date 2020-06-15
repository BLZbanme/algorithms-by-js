function KMP(str, substr, next = []) {
    let i = 1;
    let j = 1;
    while (i <= str.length && j <= substr.length) {
        if (j == 0 || str[i] === substr[j]) {
            ++i;
            ++j;
        }
        else {
            j = next[j];
        }
    }
    if (j > substr.length) {
        return i - substr.length;
    }
    else {
        return 0;
    }
}

const getNext = (substr, next = []) => {
    let j = 1;
    let t = 0;
    next[1] = 0;
    while (j < substr.length) {
        if (t == 0 || substr[j] == substr[t]) {
            next[j + 1] = t + 1;
            t++;
            j++;
        }
        else {
            t = next[t];
        }
    }
}


function KMP(str, substr, nextVal = []) {
    let i = 1;
    let j = 1;
    while (i <= str.length && j <= substr.length) {
        if (j == 0 || str[i] === substr[j]) {
            ++i;
            ++j;
        }
        else {
            j = nextVal[j];
        }
    }
    if (j > substr.length) {
        return i - substr.length;
    }
    else {
        return 0;
    }
}

const getNextVal = (substr, nextVal = []) => {
    let j = 1;
    let t = 0;
    nextVal[1] = 0;
    while (j < substr.length) {
        if (t == 0 || substr[j] == substr[t]) {
            if (substr[j + 1] != substr[next[j + 1]]) {
                next[j + 1] =  t + 1;
            }
            else {
                nextVal[j + 1] = nextVal[ t + 1];
            }
            t++;
            j++;
        }
        else {
            t = nextVal[t];
        }
    }
}
