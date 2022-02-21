function intersect(arr){
    result = arr.reduce((a, b) => a.filter(c => b.includes(c)));
    console.log(result);
}
const array1 = [[1, 2, 3, 4, 5], [3, 6, 3, 7, 1, 9, 2], [1, 9, 3, 2, 8]]
intersect(array1)