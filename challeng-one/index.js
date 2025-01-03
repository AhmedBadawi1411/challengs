const LTS = [3, 7, 3, 5, 11, 9, 7, 1];

const oddNumbers = (array) => {
    const temp = [];
    for (let index = 0; index < array.length; index++) {
        if (LTS[index] %2 != 0) {
            temp.push(LTS[index]);
        }
    }
    return temp;
}

const partitioning = (array, low, high) => {
    let pivot = array[high];
    let i     = low - 1;
    let j     = low ;

    while (j < high) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
        j++;
    }

    [array[i+1], array[high]] = [array[high], array[i +1]];
    return i + 1;
}

const quickSort = (array, low, high) => {
    if (low < high) {
        const pivot = partitioning(array, low, high);

        quickSort(array, low, pivot-1);
        quickSort(array, pivot + 1, high);

    }
}

const countRepeatedOdd = (array) => {
    const odd = oddNumbers(array);
    quickSort(odd, 0, odd.length - 1);

    let temp = 0;
    for (let index = 0; index < odd.length; index++) {
        if (odd[index] === odd[index + 1]) {
            temp ++;
        }
    }
    
    return temp;
}

const largestNumFormedFromAllOdds = (array) => {
    let str = String(oddNumbers(array));
    let arr = [];
    let tmpStr ='';

    Array.from(str).forEach(char => {
        if (char !=  ',') {
            arr.push(Number(char));
        }
    });

    quickSort(arr, 0, arr.length - 1);
    
    arr.forEach((num,i) => {
        tmpStr += arr[arr.length-1 - i];
    });
    
    return tmpStr;
}

console.log(oddNumbers(LTS));
console.log('=============================');
console.log(countRepeatedOdd(LTS));
console.log('=============================');
console.log(largestNumFormedFromAllOdds(LTS));



