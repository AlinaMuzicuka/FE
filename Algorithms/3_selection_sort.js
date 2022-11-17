const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,35,23,74];
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i+1; j < array.length; j++) {
            if(array[j] < array[indexMin]) {
                indexMin = j;
            }
            count += 1;
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    };
    return array;
};

console.log(selectionSort(arr));
console.log(arr.length);
console.log('count = ', count);