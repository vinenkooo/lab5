var matrix = [
    [1, 2, 3, 10], 
    [4, 5, 6, 11], 
    [7, 8, 9, 12]
];

var k = 1;
var m = matrix[0].length;
var n = matrix.length;

for (let i = 0; i < n; i++) {
    matrix[i].splice(k,1);
}
console.log(matrix);


