module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(arr => {
    arr.forEach(arrItem => {
      arrItem == "^^" ? count++ : false;
    });
  });
  return count;
};
