module.exports = function towelSort (matrix) {
    if(Array.isArray(matrix) && matrix.length > 0){
        return  matrix.map((value, index) => (index % 2 === 0)? value : value.reverse()).flat()
    }
    return []
}
