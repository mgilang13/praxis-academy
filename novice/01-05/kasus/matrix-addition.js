function matrixAddition(a, b) {
    return a.map(function (n, i) {
        return n.map(function (o, j) {
            console.log(o + b[i][j]);
        });
    });
}

matrixAddition([[1, 2], [1, 2]], [[2, 3], [2, 3]]);