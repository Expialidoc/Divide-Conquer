function countZeroes(arr1and0) {
    let lInd = 0, rInd = arr1and0.length - 1;

    let midInd = Math.floor((rInd + lInd) / 2);

    while (lInd <= rInd){           //(midInd !== lInd && midInd !== rInd){    //&& (arr1and0[midInd] !== 0 && arr1and0[midInd - 1] !== 1)) {
        if (arr1and0[midInd] === 0 && (midInd === 0 || arr1and0[midInd - 1] === 1)) {
            return arr1and0.length - midInd;
            //   rInd = midInd; midInd = Math.floor((rInd + lInd) / 2);
        } else if (arr1and0[midInd] === 1) {
            lInd = midInd + 1; midInd = Math.floor((rInd + lInd) / 2); console.log(lInd, midInd, rInd);
        } else if (arr1and0[midInd] === 0) {
            rInd = midInd - 1; midInd = Math.floor((rInd + lInd) / 2);console.log(lInd, midInd, rInd);
        }
    }    
    if( lInd > rInd)  return 0;                                                          // console.log(lInd, midInd, rInd);
    return arr1and0.length - midInd;
}

module.exports = countZeroes