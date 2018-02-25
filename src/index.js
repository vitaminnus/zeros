module.exports = function getZerosCount(number) {
  let count = 0;   
  let fives;
  for (let five=5; five<number;five=five*5) {
    fives = Math.floor(number/five);
    count = count + fives;    
  }
  return count;
}
