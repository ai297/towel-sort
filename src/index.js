
module.exports = function towelSort (matrix) {
  let result = []
  if(Array.isArray(matrix) && matrix.length > 0) {
    for(let line = 0; line < matrix.length; line++) {
      if(Array.isArray(matrix[line])) {
        if(line % 2 == 0) result = result.concat(matrix[line])
        else result = result.concat(matrix[line].reverse())
      } else result.push(matrix.line)
    }
  }
  return result
}
