// For example, if the array is [1, 2, 3, 4, 5] , 1 + 2 + 3 + 4 + 5 = 15 , so return 15 .

function total(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(total([1, 2, 3, 4, 5]))