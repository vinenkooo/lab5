var matrix = [
    [42, 54, 10], 
    [74, 77, 99], 
    [7, 8, 9]
];

var m = matrix[0].length;
var n = matrix.length;

for (let j = 0; j < m; j++) {
    if (j % 2 === 0) {
        console.log(j, 'столбец')
        for (let i = 0; i < n; i++) {
            console.log(matrix[i][j]);
        }
    } else {
        console.log(j, 'столбец')
        for (let i = n - 1; i >= 0; i--) {
            console.log(matrix[i][j]);
        }
    }
}

