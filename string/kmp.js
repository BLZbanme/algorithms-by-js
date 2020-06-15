var strStr = function(s, p){
    let next = getNext(p);
    let i = 0;
    let j = 0;
    let sLen = s.length;
    let pLen = p.length;
    while(i < sLen && j < pLen){
        if(j == -1 || s[i] == p[j]){
            i++;
            j++;
        }else{
            j = next[j];
        }
    }
    if(j == pLen){
        return i - j;
    }else{
        return -1;
    }
}

function getNext(str){
    let next = new Array(str.length);
    let i = 0, j = -1;
    next[0] = -1;
    while(i < str.length - 1){
        if(j == -1 || str[i] == str[j]){
            ++i;
            ++j;
            next[i] = j;
        }else{
            j = next[j];
        }
    }
    return next;
}