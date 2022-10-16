function findFloor(sArr, x) {
    let midInd = Math.floor(sArr.length / 2);
    let lind = 0, rind = sArr.length - 1;
    if (sArr[midInd] == x) return x;

    while (midInd != rind && midInd != lind) {

        if (sArr[midInd] < x) {
            lind = midInd; midInd = Math.ceil((rind + midInd) / 2);
            console.log(lind, midInd, rind);
        } else if (sArr[midInd] > x) {
            rind = midInd; midInd = Math.floor((lind + midInd) / 2); // Go lower in arr
            console.log(lind, midInd, rind);
        } else{
            return sArr[midInd];
        }
    }

    if (sArr[lind] > x) {
        return -1;
    } else if (sArr[midInd] > x) {
        return sArr[lind];
    } else if (sArr[midInd] <= x) {
        return sArr[midInd];
    }
}

module.exports = findFloor