const isOutOfBounds = require('./isOutOfBounds')

function indicesAreOutOfBounds (rowIndex, columnIndex, array) {   
    
    if (isOutOfBounds(rowIndex, array))
        return true;

    if (isOutOfBounds(columnIndex, array))
        return true

    return false;
}
module.exports = indicesAreOutOfBounds
