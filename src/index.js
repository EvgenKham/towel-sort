module.exports = function towelSort (matrix) {
  
  if (!(matrix)) return [];

  return matrix.reduce( (arr, item, index) => {
    return arr.concat( index % 2 ? item.reverse() : item );
  }, []);

}