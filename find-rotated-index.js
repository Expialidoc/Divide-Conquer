function findRotatedIndex(arr, num) {
    let midInd = Math.floor(arr.length / 2);
    let lb = 0, rb = arr.length - 1;
    if (arr[lb] === num) return lb;
    if (arr[rb] === num) return rb;
    if (arr[midInd] == num) return midInd;

    while (arr[midInd] !== num) {
        if (midInd == lb || midInd == rb) return -1;

        if (arr[midInd] < num && rb < num) {
            rb = midInd; midInd = Math.floor((lb + midInd) / 2);
        } else if (arr[midInd] < num && rb > num) {
            lb = midInd; midInd = Math.floor((rb + midInd) / 2);
        } else if (arr[midInd] > num && rb < num) {
            rb = midInd; midInd = Math.floor((lb + midInd) / 2);
        } else if (arr[midInd] > num && rb > num) {
            lb = midInd; midInd = Math.floor((rb + midInd) / 2);
        }
    } console.log(lb, midInd, rb);
    return midInd;
}

module.exports = findRotatedIndex