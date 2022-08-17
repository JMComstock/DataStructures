// [0,3,4,4,6,30,31]

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    // Check input
    if(!arr1 || arr1 < 2 || !arr2 || arr2 < 2) {
        return 'I did not get an array';
    }

    while (arr1Item || arr2Item) {
        console.log(arr1Item, arr2Item);
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArray.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        } else {
            mergedArray.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }

    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }
    
    return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));
