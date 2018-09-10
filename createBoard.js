function createBoard (size) {

var matrix = [];

for(var i=0; i<size; i++) {
    matrix[i] = new Array(size);
    matrix[i].fill();
}
    return matrix;
}

module.exports = createBoard