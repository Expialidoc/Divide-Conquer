function sortedFrequency(sArr, num) {

    let lb = findLeftBound(sArr, num);
    if (lb == -1) return lb;
    let rb = findRightBound(sArr, num);
    return rb - lb + 1;
}

function findLeftBound(arr, num, lind = 0, rind = arr.length - 1) {
    if (rind >= lind) {                                     
        let midInd = Math.floor((lind + rind) / 2);                console.log(lind, midInd, rind);
        if ((midInd === 0 || arr[midInd - 1] < num) && arr[midInd] === num) {
            return midInd;
        } else if (arr[midInd] < num) {
            return findLeftBound(arr, num, midInd + 1, rind); //move one number up
        } else { // if arr[midInd] > num
            return findLeftBound(arr, num, lind, midInd - 1) // move one number down array
        }
    }
    return -1
}

function findRightBound(arr, num, lind = 0, rind = arr.length - 1) {
    if (rind >= lind) {
      let midInd = Math.floor((lind + rind) / 2)
      if ((midInd === arr.length - 1 || arr[midInd + 1] > num) && arr[midInd] === num) {
        return midInd;
      } else if (arr[midInd] > num) {
        return findRightBound(arr, num, lind, midInd - 1)
      } else {
        return findRightBound(arr, num, midInd + 1, rind)
      }
    }
    return -1
  }

module.exports = sortedFrequency