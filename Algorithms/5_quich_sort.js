const arr = [0,3,2,5,8,1,9,4,2,1,2,9,6,4,1,7,-1,-5,23,6,2,35,6,3,32];
let count = 0;

function quichSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2); // Math.floor округляет получ значение
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if(i === pivotIndex)
            continue
        if(array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[1]);
        }
        return [...quichSort(less), pivot, ...quichSort(greater)]
    }
}

console.log(quichSort(arr));
console.log('count = ', count);