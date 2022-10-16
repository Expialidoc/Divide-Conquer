function findRotationCount(arr) {
    let midInd = Math.floor(arr.length / 2);
    let lind = 0, rind = arr.length - 1;
    if (arr[rind] > arr[lind]) return 0;

    let lb = lind, rb = rind;

    while (midInd != lb) {
        
        if (arr[rb] < arr[lb] && arr[midInd] < arr[rb]) { // how many items to the left of midInd are larger than rb?
            rb = midInd; midInd = Math.floor((lb + midInd) / 2); console.log(rb, midInd);
        } else if (arr[rb] < arr[lb] && arr[midInd] > arr[rb]) { // how many items to the right of midInd are larger than rb?
            lb = midInd; midInd = Math.floor((rb + midInd) / 2); console.log(midInd, lb);
        }
    }
    return lb + 1;
}

module.exports = findRotationCount